import { Dispatch, ChangeEvent, SetStateAction } from "react"
import { NextPage } from "next"

import Style from "../styles/components/OrderBy.module.css"

enum ProductOrderByInput {
  title_ASC = "title_ASC",
  price_ASC = "price_ASC",
  price_DESC = "price_DESC",
}

interface IProps {
  setOrderBy: Dispatch<SetStateAction<ProductOrderByInput>>
}

const OrderBy: NextPage<IProps> = ({ setOrderBy }) => {
  const handleOrderChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const index: number = Number(event.target.value)

    setOrderBy(Object.values(ProductOrderByInput)[index])
  }

  return (
    <div className={Style.container}>
      <h5>Sort by:</h5>
      <div className={Style.wrapper}>
        <label className={Style.orderby}>
          <input
            type='radio'
            name='orderBy'
            onChange={handleOrderChange}
            value={0}
            defaultChecked
          />
          <span>Featured</span>
        </label>

        <label className={Style.orderby}>
          <input
            type='radio'
            name='orderBy'
            onChange={handleOrderChange}
            value={1}
          />
          <span>Lowest Price</span>
        </label>

        <label className={Style.orderby}>
          <input
            type='radio'
            name='orderBy'
            onChange={handleOrderChange}
            value={2}
          />
          <span>Highest Price</span>
        </label>
      </div>
    </div>
  )
}

export default OrderBy
