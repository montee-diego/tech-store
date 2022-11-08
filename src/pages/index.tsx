import { GetServerSideProps, NextPage } from "next"
import { client } from "@services/apollo-client"

import { GET_HOMEPAGE } from "@services/queries"
import { ICategory, IProducts } from "@interfaces/interfaces"
import { getRandomNumber } from "@utils/utils"

import { CategorySlide, ProductsGrid, Slideshow } from "@components/index"
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
        <meta name="description" content="Fulfull your tech needs at the best price!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Browse Categories</h1>
        <Slideshow>
          {categories.map((category) => (
            <CategorySlide category={category} key={category.id} />
          ))}
        </Slideshow>
      </section>

      <section>
        <h1>Popular</h1>
        <ProductsGrid products={popular} />
      </section>

      <section>
        <h1>Great Deals</h1>
        <ProductsGrid products={deals} />
      </section>
    </>
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
