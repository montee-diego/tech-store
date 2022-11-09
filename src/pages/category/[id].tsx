import { useState, useEffect, useCallback } from "react"
import { GetServerSideProps, NextPage } from "next"
import { useLazyQuery } from "@apollo/client"

import { client } from "@services/apollo-client"
import { GET_CATEGORY, GET_CATEGORY_FILTERED } from "@services/queries"
import { IProducts, EnumOrderBy } from "@interfaces/interfaces"

import { Filter, Loading, OrderBy, Pagination, ProductsGrid } from "@components/index"
import Head from "next/head"
import Style from "@styles/Category.module.css"

interface ICategory {
  brands: string[]
  id: string
  name: string
  products: IProducts[]
}

interface IFilterOpts {
  id: string
  brands: string[]
  minPrice: number
  maxPrice: number
  quantity: number
  isSale: boolean
  orderBy?: EnumOrderBy
  skip?: number
}

interface IProps {
  category: ICategory
  total: number
}

const CategoryPage: NextPage<IProps> = ({ category, total }) => {
  const [products, setProducts] = useState<IProducts[]>(category.products)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  const [filterTotal, setFilterTotal] = useState<number>(total)
  const [orderBy, setOrderBy] = useState<EnumOrderBy>(EnumOrderBy.title_ASC)
  const [filterOpts, setFilterOpts] = useState<IFilterOpts>({
    id: category.id,
    brands: category.brands,
    minPrice: 0,
    maxPrice: 5000,
    quantity: 0,
    isSale: false,
    orderBy: orderBy,
    skip: 10 * page,
  })
  const [runQuery, { data }] = useLazyQuery(GET_CATEGORY_FILTERED, {
    variables: filterOpts,
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.productsConnection.aggregate.count <= 10) {
        setPage(0)
      }
      setFilterTotal(data.productsConnection.aggregate.count)
      setProducts(data.products)
      setIsLoading(false)
    },
  })

  const handleShowFilter = (): void => {
    if (isFilterOpen) {
      document.body.style.overflow = "visible"
    } else {
      document.body.style.overflow = "hidden"
    }

    setIsFilterOpen(!isFilterOpen)
  }

  const reloadData = useCallback(() => {
    setIsLoading(true)

    if (isFilterOpen) {
      document.body.style.overflow = "unset"
      setIsFilterOpen(false)
    }

    runQuery({
      variables: { ...filterOpts, orderBy: orderBy, skip: 10 * page },
    })
  }, [orderBy, filterOpts, page])

  useEffect(() => {
    reloadData()
  }, [reloadData])

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
          <Filter id={category.id} brands={category.brands} setFilterOpts={setFilterOpts} />
        </div>
        <div className={Style.products}>
          <OrderBy setOrderBy={setOrderBy} />

          {isLoading ? (
            <Loading />
          ) : products.length > 0 ? (
            <>
              <ProductsGrid products={products} />
              <Pagination page={page} setPage={setPage} total={filterTotal} />
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
  const id = context?.params?.id
  const { data } = await client.query({
    query: GET_CATEGORY,
    variables: {
      id: id,
      catId: id,
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
