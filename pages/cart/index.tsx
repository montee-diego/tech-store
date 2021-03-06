import { useReactiveVar } from "@apollo/client"
import { useRouter } from "next/router"

import { cartStore } from "../../services/apollo-client"
import { ICart } from "../../interfaces/interfaces"
import { displayPrice } from "../../utils"

import Head from "next/head"
import Link from "next/link"
import CartProduct from "../../components/CartProduct"
import Style from "../../styles/Cart.module.css"
import { SyntheticEvent } from "react"

const Cart = () => {
  const router = useRouter()
  const cart: ICart[] = useReactiveVar(cartStore)

  const cartTotal = cart.reduce((prev, next) => {
    return prev + next.quantity * next.product.price
  }, 0)

  const handleCheckout = (event: SyntheticEvent): void => {
    cartStore([])
    localStorage.removeItem("cart")
    router.push("/success")
  }

  return (
    <section>
      <Head>
        <title>Tech Store | Cart</title>
      </Head>

      {cart.length > 0 ? (
        <>
          <h1>Cart</h1>
          <div className={Style.products}>
            {cart.map(product => (
              <CartProduct cartItem={product} key={product.product.id} />
            ))}
          </div>

          <div className={Style.total}>
            <span>Total: </span>
            <h3>{displayPrice(cartTotal)}</h3>
            <button className={Style.checkout} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className={Style.empty}>
          <p>Your cart is empty!</p>
          <Link href='/'>
            <a className={Style.shop}>Go Shopping</a>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Cart
