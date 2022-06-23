import { useState, useEffect } from "react"
import { GetServerSideProps, NextPage } from "next"
import { useLazyQuery } from "@apollo/client"

import { client } from "../../services/apollo-client"
import { GET_CATEGORY, GET_CATEGORY_FILTERED } from "../../services/queries"
import { IProducts } from "../../interfaces/interfaces"

import Head from "next/head"
import Card from "../../components/Card"
import Filter from "../../components/Filter"
import Loading from "../../components/Loading"
import OrderBy from "../../components/OrderBy"
import Pagination from "../../components/Pagination"
import Style from "../../styles/Category.module.css"

enum ProductOrderByInput {
  title_ASC = "title_ASC",
  price_ASC = "price_ASC",
  price_DESC = "price_DESC",
}

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
  orderBy?: ProductOrderByInput
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
  const [orderBy, setOrderBy] = useState<ProductOrderByInput>(
    ProductOrderByInput.title_ASC
  )
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
    onCompleted: data => {
      setProducts(data.products)
      setIsLoading(false)
    },
  })

  const handleShowFilter = (): void => {
    if (isFilterOpen) {
      document.body.style.overflow = "unset"
    } else {
      document.body.style.overflow = "hidden"
    }

    setIsFilterOpen(!isFilterOpen)
  }

  useEffect(() => {
    setIsLoading(true)

    if (isFilterOpen) {
      document.body.style.overflow = "unset"
      setIsFilterOpen(false)
    }

    runQuery({
      variables: { ...filterOpts, orderBy: orderBy, skip: 10 * page },
    })
  }, [orderBy, filterOpts, page])

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
        <div
          className={`${Style.filter} ${
            isFilterOpen ? Style.open : Style.close
          }`}>
          <Filter
            id={category.id}
            brands={category.brands}
            setFilterOpts={setFilterOpts}
          />
        </div>
        <div className={Style.products}>
          <OrderBy setOrderBy={setOrderBy} />

          {isLoading ? (
            <Loading />
          ) : products.length > 0 ? (
            <>
              <div className={Style.grid}>
                {products.map(product => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
              <Pagination setPage={setPage} total={total} />
            </>
          ) : (
            <p>No results.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context?.params?.id

  const { data } = await client.query({
    query: GET_CATEGORY,
    variables: {
      id: id,
      catId: id,
    },
  })

  return {
    props: {
      category: data.category,
      total: data.productsConnection.aggregate.count,
    },
  }
}

export default CategoryPage
