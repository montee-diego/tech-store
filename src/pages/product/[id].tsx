import type { GetServerSideProps, NextPage } from "next"
import type { MouseEvent } from "react"

import { useState, useEffect } from "react"

import { client, cartStore } from "@services/apollo-client"
import { displayPrice, displayDiscount, addToCart } from "@utils/utils"
import { GetProductByID } from "@services/queries"
import { ISeller, IProducts, ICart } from "@interfaces/interfaces"

import { Breadcrumb, ButtonLink, ProductsGrid, Quantity, Seller, Title } from "@components/index"
import Head from "next/head"
import Style from "@styles/Product.module.css"

interface IProduct {
  product: {
    about: {
      html: string
    }
    brand: string
    category: {
      id: string
      name: string
      products: IProducts[]
      slug: string
    }
    description: string
    id: string
    image: {
      url: string
    }
    isOnSale: boolean
    listPrice: number
    price: number
    quantity: number
    sellers: ISeller[]
    title: string
  }
}

const ProductPage: NextPage<IProduct> = ({ product }) => {
  const isInCart = cartStore().findIndex((item) => item.product.id === product.id) >= 0
  const [quantity, setQuantity] = useState<number>(1)
  const [addedToCart, setAddedToCart] = useState<boolean>(isInCart)

  const handlePurchase = (event: MouseEvent<HTMLButtonElement>): void => {
    const productToAdd: ICart = {
      product: {
        id: product.id,
        image: {
          url: product.image.url,
        },
        price: product.price,
        quantity: product.quantity,
        title: product.title,
      },
      quantity: quantity,
    }

    addToCart(productToAdd)
    cartStore(JSON.parse(localStorage.getItem("cart") || "[]"))
    setAddedToCart(true)
  }

  useEffect(() => {
    setAddedToCart(cartStore().findIndex((item) => item.product.id === product.id) >= 0)
  }, [product.id])

  return (
    <>
      <Head>
        <title>Tech Store | {product.title}</title>
      </Head>

      <section>
        <Title>
          <Breadcrumb category={product.category} brand={product.brand} />
        </Title>

        <div className={Style.product}>
          <div className={Style.details}>
            <div className={Style.image}>
              <img src={product.image.url} alt={product.title} />
            </div>

            <div className={Style.info}>
              <h2>{product.title}</h2>
              <Seller seller={product.sellers[0]} />
              <p className={Style.description}>{product.description}</p>

              <h3 className={product.isOnSale ? Style.oldprice : ""}>
                {displayPrice(product.listPrice)}
              </h3>

              {product.isOnSale && (
                <h3 className={Style.sale}>
                  {displayPrice(product.price)} ({displayDiscount(product.listPrice, product.price)}
                  %)
                </h3>
              )}

              {product.quantity > 0 ? (
                <>
                  <div className={Style.quantity}>
                    <Quantity
                      stock={product.quantity}
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />

                    <span className={Style.stock}>{product.quantity} in Stock.</span>
                  </div>

                  {addedToCart ? (
                    <ButtonLink href="/cart" secondary>
                      In Cart
                    </ButtonLink>
                  ) : (
                    <ButtonLink onClick={handlePurchase}>Purchase</ButtonLink>
                  )}
                </>
              ) : (
                <p className={Style.nostock}>This product is out of stock.</p>
              )}
            </div>
          </div>
          <div className={Style.about}>
            <h2>About this product</h2>
            <div className={Style.line}></div>
            <div
              className={Style.aboutlist}
              dangerouslySetInnerHTML={{ __html: product.about.html }}
            />
          </div>
        </div>
      </section>

      <section>
        <Title>
          <h1>Browse more {product.category.name}</h1>
        </Title>
        <ProductsGrid products={product.category.products} />
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const { data } = await client.query({
    query: GetProductByID,
    variables: { id: params?.id },
  })

  if (!data.product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data.product,
    },
  }
}

export default ProductPage
