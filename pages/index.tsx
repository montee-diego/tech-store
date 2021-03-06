import { GetServerSideProps, NextPage } from "next"
import { client } from "../services/apollo-client"

import { GET_HOMEPAGE } from "../services/queries"
import { IProducts } from "../interfaces/interfaces"
import { getRandomNumber } from "../utils"

import Head from "next/head"
import Card from "../components/Card"
import Category from "../components/Category"
import ProductList from "../components/ProductList"
import Style from "../styles/Home.module.css"

interface ICategory {
  icon: {
    url: string
  }
  id: string
  name: string
}

interface IProps {
  categories: ICategory[]
  popular: IProducts[]
  deals: IProducts[]
}

const Home: NextPage<IProps> = ({ categories, popular, deals }) => {
  return (
    <section>
      <Head>
        <title>Tech Store | Home</title>
        <meta
          name='description'
          content='Fulfull your tech needs at the best price!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Browse Categories</h1>
      <div className={Style.grid}>
        {categories.map(category => (
          <Category category={category} key={category.id} />
        ))}
      </div>

      <h1>Popular</h1>
      <ProductList>
        {popular.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </ProductList>

      <h1>Great Deals</h1>
      <ProductList>
        {deals.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </ProductList>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const skip = getRandomNumber(0, 9)
  const { data } = await client.query({
    query: GET_HOMEPAGE,
    variables: {
      skip: skip,
    },
  })

  return {
    props: {
      categories: data.categories,
      popular: data.popular,
      deals: data.deals,
    },
  }
}

export default Home
