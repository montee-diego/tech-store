import { useState, useEffect, useCallback } from "react"
import { GetServerSideProps, NextPage } from "next"
import { useLazyQuery } from "@apollo/client"

import { client } from "@services/apollo-client"
import { GET_SEARCH } from "@services/queries"
import { IProducts, EnumOrderBy } from "@interfaces/interfaces"

import { Loading, OrderBy, Pagination, ProductsGrid } from "@components/index"
import Head from "next/head"
import Style from "@styles/Search.module.css"

interface IProps {
  results: IProducts[]
  query: string
  total: number
}

const Search: NextPage<IProps> = ({ results, query, total }) => {
  const [products, setProducts] = useState<IProducts[]>(results)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [orderBy, setOrderBy] = useState<EnumOrderBy>(EnumOrderBy.title_ASC)
  const [page, setPage] = useState<number>(0)
  const [runQuery, { data }] = useLazyQuery(GET_SEARCH, {
    variables: {
      query: query,
      orderBy: orderBy,
      skip: 10 * page,
    },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setProducts(data.products)
      setIsLoading(false)
    },
  })

  const reloadData = useCallback(() => {
    setIsLoading(true)
    runQuery()
  }, [orderBy, page])

  useEffect(() => {
    reloadData()
  }, [reloadData])

  return (
    <section>
      <Head>
        <title>Tech Store | Search: {query}</title>
      </Head>

      <h1>Search results for &quot;{query}&quot;</h1>
      <OrderBy setOrderBy={setOrderBy} />

      {isLoading ? (
        <Loading />
      ) : products.length > 0 ? (
        <>
          <ProductsGrid products={products} />
          <Pagination page={page} setPage={setPage} total={total} />
        </>
      ) : (
        <p>No results.</p>
      )}
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.query

  const { data } = await client.query({
    query: GET_SEARCH,
    variables: {
      query: query,
    },
  })

  return {
    props: {
      results: data.products,
      query: query,
      total: data.productsConnection.aggregate.count,
    },
  }
}

export default Search
