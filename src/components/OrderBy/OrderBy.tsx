import type { FunctionComponent, ChangeEvent, SetStateAction } from "react"
import { Dispatch } from "react"

import { EnumOrderBy } from "@interfaces/interfaces"
import Style from "./OrderBy.module.css"

interface IProps {
  setOrderBy: Dispatch<SetStateAction<EnumOrderBy>>
}

export const OrderBy: FunctionComponent<IProps> = ({ setOrderBy }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const index: number = Number(event.target.value)

    setOrderBy(Object.values(EnumOrderBy)[index])
  }

  return (
    <div className={Style.container}>
      <h5>Sort by:</h5>
      <div className={Style.wrapper}>
        <label className={Style.orderby}>
          <input type="radio" name="orderBy" onChange={handleChange} value={0} defaultChecked />
          <span>Featured</span>
        </label>

        <label className={Style.orderby}>
          <input type="radio" name="orderBy" onChange={handleChange} value={1} />
          <span>Lowest Price</span>
        </label>

        <label className={Style.orderby}>
          <input type="radio" name="orderBy" onChange={handleChange} value={2} />
          <span>Highest Price</span>
        </label>
      </div>
    </div>
  )
}
