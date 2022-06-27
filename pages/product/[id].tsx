import { useState, MouseEvent, useEffect } from "react"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"

import { client, cartStore } from "../../services/apollo-client"
import { displayPrice, displayDiscount, addToCart } from "../../utils"
import { GET_PRODUCT_BY_ID } from "../../services/queries"
import { ISeller, IProducts, ICart } from "../../interfaces/interfaces"

import Head from "next/head"
import Card from "../../components/Card"
import Quantity from "../../components/Quantity"
import Location from "../../components/Location"
import Seller from "../../components/Seller"
import Style from "../../styles/Product.module.css"

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
  const router = useRouter()
  const { id } = router.query
  const isInCart =
    cartStore().findIndex(item => item.product.id === product.id) >= 0
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

  const handleInCart = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    router.push("/cart")
  }

  useEffect(() => {
    setAddedToCart(
      cartStore().findIndex(item => item.product.id === product.id) >= 0
    )
  }, [product.id])

  return (
    <section>
      <Head>
        <title>Tech Store | {product.title}</title>
      </Head>

      <Location
        id={product.category.id}
        name={product.category.name}
        brand={product.brand}
      />

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
                {displayPrice(product.price)} (
                {displayDiscount(product.listPrice, product.price)}%)
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

                  <span className={Style.stock}>
                    {product.quantity} in Stock.
                  </span>
                </div>

                {addedToCart ? (
                  <button
                    className={`${Style.purchase} ${Style.added}`}
                    disabled={product.quantity < 1}
                    onClick={handleInCart}>
                    In Cart
                  </button>
                ) : (
                  <button
                    className={Style.purchase}
                    disabled={product.quantity < 1}
                    onClick={handlePurchase}>
                    Purchase
                  </button>
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

      <h1 className={Style.similar}>Browse more {product.category.name}</h1>
      <div className={Style.grid}>
        {product.category.products.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context?.params?.id

  const { data } = await client.query({
    query: GET_PRODUCT_BY_ID,
    variables: {
      id: id,
    },
  })

  return {
    props: {
      product: data.product,
    },
  }
}

export default ProductPage
