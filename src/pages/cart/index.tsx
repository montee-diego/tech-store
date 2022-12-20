import { useReactiveVar } from "@apollo/client"
import type { NextPage } from "next"

import { cartStore } from "@services/apollo-client"
import { ICart } from "@interfaces/interfaces"
import { displayPrice } from "@utils/utils"

import Head from "next/head"
import getStripe from "@services/getStripe"
import { ButtonLink, CartProduct, Title } from "@components/index"
import Style from "@styles/Cart.module.css"

const Cart: NextPage = () => {
  const cart: ICart[] = useReactiveVar(cartStore)

  const cartTotal = cart.reduce((prev, next) => {
    return prev + next.quantity * next.product.price
  }, 0)

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response: Response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })

    if (response.status === 500) return

    const data = await response.json()

    stripe.redirectToCheckout({
      sessionId: data.id,
    })
  }

  return (
    <section>
      <Head>
        <title>Tech Store | Cart</title>
      </Head>

      {cart.length > 0 ? (
        <>
          <Title>
            <h1>Cart</h1>
          </Title>

          <div className={Style.products}>
            {cart.map((product) => (
              <CartProduct cartItem={product} key={product.product.id} />
            ))}
          </div>

          <div className={Style.total}>
            <span>Total: </span>
            <h3>{displayPrice(cartTotal)}</h3>
            <ButtonLink onClick={handleCheckout}>Checkout</ButtonLink>
          </div>
        </>
      ) : (
        <div className={Style.empty}>
          <p>Oh no! Your cart is empty, but that is about to change...</p>
          <ButtonLink href="/">Go Shopping</ButtonLink>
        </div>
      )}
    </section>
  )
}

export default Cart
