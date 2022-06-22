import { NextPage } from "next"

import { ISeller } from "../interfaces/interfaces"

import Style from "../styles/components/Seller.module.css"

interface IProps {
  seller: ISeller
}

const Seller: NextPage<IProps> = ({ seller }) => {
  return (
    <div className={Style.seller}>
      <span>
        Sold by <strong>{seller.name}</strong>
      </span>
      {seller.isOfficial && <img src='/img/circle-check-solid.svg' />}
    </div>
  )
}

export default Seller
