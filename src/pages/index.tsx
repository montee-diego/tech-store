import type { GetServerSideProps, NextPage } from "next"

import { client } from "@services/apollo-client"
import { GetHomePage } from "@services/queries"
import { ICategory, IProducts } from "@interfaces/interfaces"
import { getRandomNumber } from "@utils/utils"

import { CategorySlide, ProductsGrid, Slideshow, Title } from "@components/index"
import Head from "next/head"
import Style from "@styles/Home.module.css"

interface IProps {
  categories: ICategory[]
  popular: IProducts[]
  deals: IProducts[]
}

const Home: NextPage<IProps> = ({ categories, popular, deals }) => {
  return (
    <>
      <Head>
        <title>Tech Store | Home</title>
      </Head>

      <section>
        <Title>
          <h1>Browse Categories</h1>
        </Title>
        <Slideshow>
          {categories.map((category) => (
            <CategorySlide category={category} key={category.id} />
          ))}
        </Slideshow>
      </section>

      <section>
        <Title>
          <h1>Popular</h1>
        </Title>
        <ProductsGrid products={popular} />
      </section>

      <section>
        <Title>
          <h1>Great Deals</h1>
        </Title>
        <ProductsGrid products={deals} />
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const skip = getRandomNumber(0, 9)
  const { data } = await client.query({
    query: GetHomePage,
    variables: { skip: skip },
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
