import type { GetServerSideProps, NextPage } from "next"

import { client } from "@services/apollo-client"
import { GetSearch } from "@services/queries"
import { IProducts } from "@interfaces/interfaces"
import { getQueryParams } from "@utils/getQueryParams"

import { Title } from "@components/index"
import { ProductsWithFilter } from "@containers/index"
import Head from "next/head"

interface IProps {
  results: IProducts[]
  query: string
  total: number
}

const Search: NextPage<IProps> = ({ results, query, total }) => {
  return (
    <section>
      <Head>
        <title>Tech Store | Search: {query}</title>
      </Head>

      <Title>
        <h1>Search results for &quot;{query}&quot;</h1>
      </Title>

      <ProductsWithFilter products={results} total={total} />
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { params } = getQueryParams(query)
  const { data } = await client.query({
    query: GetSearch,
    variables: { query: query.query, ...params },
  })

  return {
    props: {
      results: data.products,
      query: query.query,
      total: data.productsConnection.aggregate.count,
    },
  }
}

export default Search
