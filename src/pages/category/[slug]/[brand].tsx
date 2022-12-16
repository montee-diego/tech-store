import type { NextPage, GetServerSideProps } from "next"
import type { IProducts } from "@interfaces/interfaces"
import { useState } from "react"
import { client } from "@services/apollo-client"
import { GetCategoryBrand } from "@services/queries"
import { Breadcrumb, Filter, Pagination, ProductsGrid } from "@components/index"
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
          <Filter id={category.id} brands={[]} setFilterOpts={() => {}} />
        </div>
        <div className={Style.products}>
          {category.products.length > 0 ? (
            <>
              <ProductsGrid products={category.products} />
              {/* <Pagination page={page} setPage={setPage} total={filterTotal} /> */}
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
    query: GetCategoryBrand,
    variables: {
      slug: query.slug,
      brand: query.brand,
      minPrice: Number(query.minPrice) || 0,
      maxPrice: Number(query.maxPrice) || 500000,
      quantity: Number(query.quantity) || 0,
      isSale: query.isSale === "true",
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
