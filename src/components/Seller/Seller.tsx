import type { FunctionComponent } from "react"
import { ISeller } from "@interfaces/interfaces"
import Style from "./Seller.module.css"

interface IProps {
  seller: ISeller
}

export const Seller: FunctionComponent<IProps> = ({ seller }) => {
  return (
    <div className={Style.seller}>
      <span>
        Sold by <strong>{seller.name}</strong>
      </span>
      {seller.isOfficial && <img src="/img/circle-check-solid.svg" alt="&check;" />}
    </div>
  )
}
