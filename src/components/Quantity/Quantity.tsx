import type { Dispatch, FC, SetStateAction } from "react"

import Style from "./Quantity.module.css"

interface IProps {
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  stock: number
}

export const Quantity: FC<IProps> = ({ stock, quantity, setQuantity }) => {
  const handleDecrease = () => {
    setQuantity(Math.max(1, quantity - 1))
  }

  const handleIncrease = () => {
    setQuantity(Math.min(stock, quantity + 1))
  }

  return (
    <div className={Style.quantity}>
      <button className={Style.lbtn} onClick={handleDecrease}>
        -
      </button>
      <input type="number" name="quantity" value={quantity} readOnly />
      <button className={Style.rbtn} onClick={handleIncrease}>
        +
      </button>
    </div>
  )
}
