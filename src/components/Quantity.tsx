import { Dispatch, SetStateAction } from "react"
import { NextPage } from "next"

import Style from "@styles/components/Quantity.module.css"

interface IProps {
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  stock: number
}

const Quantity: NextPage<IProps> = ({ stock, quantity, setQuantity }) => {
  const handleDecrease = () => {
    setQuantity(Math.max(1, quantity - 1))
  }

  const handleIncrease = () => {
    setQuantity(Math.min(stock, quantity + 1))
  }

  return (
    <div className={Style.quantity}>
      <input
        className={Style.lbtn}
        type="button"
        value="-"
        onClick={handleDecrease}
        disabled={stock < 1}
      />
      <input
        className={Style.value}
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        size={3}
        readOnly
        disabled={stock < 1}
      />
      <input
        className={Style.rbtn}
        type="button"
        value="+"
        onClick={handleIncrease}
        disabled={stock < 1}
      />
    </div>
  )
}

export default Quantity
