import { useState } from "react"
import { GetServerSideProps, NextPage } from "next"

import { client } from "@services/apollo-client"
import { GetSearch } from "@services/queries"
import { IProducts, EnumOrderBy } from "@interfaces/interfaces"

import { Filter, OrderBy, Pagination, ProductsGrid } from "@components/index"
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

      <h1>Search results for &quot;{query}&quot;</h1>

      <button className={Style.filterbtn} onClick={handleShowFilter}>
        {isFilterOpen ? "Close" : "Filter"}
      </button>

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
  const { data } = await client.query({
    query: GetSearch,
    variables: {
      query: query.query,
      min: Number(query.min) || 0,
      max: Number(query.max) || 500000,
      quantity: Number(query.quantity) || 0,
      sale: query.sale === "true",
      sort: Object.values(EnumOrderBy)[Number(query.sort || 0)],
      skip: query.page ? (Number(query.page) - 1) * 10 : 0,
    },
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
