import { useState, useEffect, useCallback } from "react"
import { GetServerSideProps, NextPage } from "next"
import { useLazyQuery } from "@apollo/client"

import { client } from "@services/apollo-client"
import { GET_SEARCH } from "@services/queries"
import { IProducts } from "@interfaces/interfaces"

import Head from "next/head"
import Card from "@components/Card"
import Loading from "@components/Loading"
import OrderBy from "@components/OrderBy"
import Pagination from "@components/Pagination"
import ProductList from "@components/ProductList"
import Style from "@styles/Search.module.css"

interface IProps {
  results: IProducts[]
  query: string
  total: number
}

enum ProductOrderByInput {
  title_ASC = "title_ASC",
  price_ASC = "price_ASC",
  price_DESC = "price_DESC",
}

const Search: NextPage<IProps> = ({ results, query, total }) => {
  const [products, setProducts] = useState<IProducts[]>(results)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [orderBy, setOrderBy] = useState<ProductOrderByInput>(
    ProductOrderByInput.title_ASC
  )
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
          <ProductList>
            {products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </ProductList>
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
