import type { NextPage, GetServerSideProps } from "next"
import { useState } from "react"
import { client } from "@services/apollo-client"
import { GetCategory } from "@services/queries"
import { EnumOrderBy, IProducts } from "@interfaces/interfaces"
import { Breadcrumb, Filter, OrderBy, Pagination, ProductsGrid } from "@components/index"
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
      <Breadcrumb category={category} brand={brand} />

      <button className={Style.filterbtn} onClick={handleShowFilter}>
        {isFilterOpen ? "Close" : "Filter"}
      </button>

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
  const { data } = await client.query({
    query: GetCategory,
    variables: {
      slug: query.slug,
      brand: query.brand,
      min: Number(query.min) || 0,
      max: Number(query.max) || 500000,
      quantity: Number(query.quantity) || 0,
      sale: query.sale === "true",
      sort: Object.values(EnumOrderBy)[Number(query.sort || 0)],
      skip: query.page ? (Number(query.page) - 1) * 10 : 0,
    },
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
