import type { GetServerSideProps, NextPage } from "next"

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
  category: ICategory
  total: number
}

const CategoryPage: NextPage<IProps> = ({ category, total }) => {
  const { brands, products } = category

  return (
    <section>
      <Head>
        <title>Tech Store | {category.name}</title>
      </Head>

      <Title>
        <Breadcrumb category={category} />
      </Title>

      <ProductsWithFilter brands={brands} products={products} total={total} />
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { params } = getQueryParams(query)
  const { data } = await client.query({
    query: GetCategory,
    variables: { slug: query.slug, ...params },
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
