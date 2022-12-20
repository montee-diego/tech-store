import type { NextPage, GetServerSideProps } from "next"

import { useState } from "react"

import { client } from "@services/apollo-client"
import { GetCategory } from "@services/queries"
import { IProducts } from "@interfaces/interfaces"
import { getQueryParams } from "@utils/getQueryParams"

import { Breadcrumb, Filter, OrderBy, Pagination, ProductsGrid, Title } from "@components/index"
import Head from "next/head"
import Style from "@styles/Brand.module.css"

interface ICategory {
  brands: string[]
  id: string
  name: string
  products: IProducts[]
  slug: string
}

interface IProps {
  brand: string
  category: ICategory
  total: number
}

const BrandPage: NextPage<IProps> = ({ brand, category, total }) => {
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
        <title>
          Tech Store | {brand} {category.name}
        </title>
      </Head>

      <Title>
        <Breadcrumb category={category} brand={brand} />
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

          {category.products.length > 0 ? (
            <>
              <ProductsGrid products={category.products} />
              <Pagination total={total} />
            </>
          ) : (
            <p>no results</p>
          )}
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let brand

  const checkBrand = (brands: string[]): string | undefined => {
    return brands.find((brand) => brand.toLowerCase() === `${query.brand}`.toLowerCase())
  }

  const { query } = context
  const { params } = getQueryParams(query)
  const { data } = await client.query({
    query: GetCategory,
    variables: { slug: query.slug, brand: query.brand, ...params },
  })

  if (data.category && query.brand) {
    brand = checkBrand(data.category.brands)
  }

  if (!data.category || !brand) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      brand,
      category: data.category,
      total: data.productsConnection.aggregate.count,
    },
  }
}

export default BrandPage
