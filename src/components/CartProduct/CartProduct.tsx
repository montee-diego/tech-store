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
    <div className={Style.card}>
      <div className={Style.image}>
        <img src={product.image.url} alt={product.title} />
      </div>

      <div className={Style.container}>
        <div className={Style.title}>
          <Link href={`/product/${product.id}`}>
            <a className={Style.productlink}>{product.title}</a>
          </Link>
        </div>

        <div className={Style.info}>
          <div className={Style.quantity}>
            <Quantity stock={product.quantity} quantity={quantity} setQuantity={setQuantity} />

            <p>
              {quantity}x {displayPrice(product.price)}
            </p>
          </div>

          <div className={Style.subtotal}>
            <p>{displayPrice(product.price * quantity)}</p>
          </div>
        </div>
      </div>

      <button value={product.id} onClick={handleClick} className={Style.remove}>
        <img src="/img/xmark-solid.svg" alt="X" />
      </button>
    </div>
  )
}
