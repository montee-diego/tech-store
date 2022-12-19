import type { GetServerSideProps, NextPage } from "next"
import { useState } from "react"

import { client } from "@services/apollo-client"
import { GetCategory } from "@services/queries"
import { IProducts, EnumOrderBy } from "@interfaces/interfaces"

import { Filter, OrderBy, Pagination, ProductsGrid } from "@components/index"
import Head from "next/head"
import Style from "@styles/Category.module.css"

interface ICategory {
  brands: string[]
  id: string
  name: string
  products: IProducts[]
}

interface IProps {
  category: ICategory
  total: number
}

const CategoryPage: NextPage<IProps> = ({ category, total }) => {
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
        <title>Tech Store | {category.name}</title>
      </Head>

      <div className={Style.title}>
        <h1>{category.name}</h1>
        <button className={Style.filterbtn} onClick={handleShowFilter}>
          {isFilterOpen ? "Close" : "Filter"}
        </button>
      </div>

      <div className={Style.flex}>
        <div className={`${Style.filter} ${isFilterOpen ? Style.open : Style.close}`}>
          <Filter brands={category.brands} />
        </div>
        <div className={Style.products}>
          <OrderBy />

          {category.products.length > 0 ? (
            <>
              <ProductsGrid products={category.products} />
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
    query: GetCategory,
    variables: {
      slug: query.slug,
      min: Number(query.min) || 0,
      max: Number(query.max) || 500000,
      quantity: Number(query.quantity) || 0,
      sale: query.sale === "true",
      sort: Object.values(EnumOrderBy)[Number(query.sort || 0)],
      skip: query.page ? (Number(query.page) - 1) * 10 : 0,
    },
  })

  if (!data.category) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category: data.category,
      total: data.productsConnection.aggregate.count,
    },
  }
}

export default CategoryPage
