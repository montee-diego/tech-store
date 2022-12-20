import type { GetServerSideProps, NextPage } from "next"

import { useState } from "react"

import { client } from "@services/apollo-client"
import { GetSearch } from "@services/queries"
import { IProducts } from "@interfaces/interfaces"
import { getQueryParams } from "@utils/getQueryParams"

import { Filter, OrderBy, Pagination, ProductsGrid, Title } from "@components/index"
import Head from "next/head"
import Style from "@styles/Search.module.css"

interface IProps {
  results: IProducts[]
  query: string
  total: number
}

const Search: NextPage<IProps> = ({ results, query, total }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

  const handleShowFilter = (): void => {
    if (isFilterOpen) {
      document.body.style.overflow = "visible"
    } else {
      document.body.style.overflow = "hidden"
    }

    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <section>
      <Head>
        <title>Tech Store | Search: {query}</title>
      </Head>

      <Title>
        <h1>Search results for &quot;{query}&quot;</h1>
        <button className={Style.filterbtn} onClick={handleShowFilter}>
          {isFilterOpen ? "Close" : "Filter"}
        </button>
      </Title>

      <div className={Style.flex}>
        <div className={`${Style.filter} ${isFilterOpen ? Style.open : Style.close}`}>
          <Filter brands={[]} />
        </div>
        <div className={Style.products}>
          <OrderBy />

          {results.length > 0 ? (
            <>
              <ProductsGrid products={results} />
              <Pagination total={total} />
            </>
          ) : (
            <p>No results.</p>
          )}
        </div>
      </div>
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
