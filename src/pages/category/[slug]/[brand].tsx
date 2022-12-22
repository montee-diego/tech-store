import type { NextPage, GetServerSideProps } from "next"

import { client } from "@services/apollo-client"
import { GetCategory } from "@services/queries"
import { IProducts } from "@interfaces/interfaces"
import { getQueryParams } from "@utils/getQueryParams"

import { Breadcrumb, Title } from "@components/index"
import { ProductsWithFilter } from "@containers/index"
import Head from "next/head"

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
  const { products } = category

  return (
    <section>
      <Head>
        <title>
          Tech Store | {brand} {category.name}
        </title>
      </Head>

      <Title>
        <Breadcrumb category={category} brand={brand} />
      </Title>

      <ProductsWithFilter products={products} total={total} />
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
