import type { FunctionComponent, SyntheticEvent } from "react"

import { useEffect, useState, useCallback } from "react"

import { ICart } from "@interfaces/interfaces"
import { cartStore } from "@services/apollo-client"
import { displayPrice, removeFromCart, updateCart } from "@utils/utils"
import { Quantity } from "@components/index"

import Link from "next/link"
import Style from "./CartProduct.module.css"

interface IProps {
  cartItem: ICart
}

export const CartProduct: FunctionComponent<IProps> = ({ cartItem }) => {
  const [quantity, setQuantity] = useState<number>(cartItem.quantity)
  const { product } = cartItem

  const handleClick = (event: SyntheticEvent<HTMLButtonElement>): void => {
    removeFromCart(event.currentTarget.value)
    cartStore(JSON.parse(localStorage.getItem("cart") || "[]"))
  }

  const cartProductUpdate = useCallback(() => {
    updateCart(product.id, quantity)
    cartStore(JSON.parse(localStorage.getItem("cart") || "[]"))
  }, [quantity])

  useEffect(() => {
    cartProductUpdate()
  }, [cartProductUpdate])

  return (
    <div className={Style.Container}>
      <div className={Style.Image}>
        <img src={product.image.url} alt={product.title} />
      </div>

      <div className={Style.Product}>
        <Link href={`/product/${product.id}`}>{product.title}</Link>

        <div className={Style.Info}>
          <div className={Style.Quantity}>
            <Quantity stock={product.quantity} quantity={quantity} setQuantity={setQuantity} />

            <p>
              {quantity}x {displayPrice(product.price)}
            </p>
          </div>

          <div className={Style.Subtotal}>
            <p>{displayPrice(product.price * quantity)}</p>
          </div>
        </div>
      </div>

      <button value={product.id} onClick={handleClick} className={Style.Remove}>
        <img src="/img/xmark-solid.svg" alt="X" />
      </button>
    </div>
  )
}
