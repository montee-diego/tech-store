import { NextPage } from "next"

import { displayPrice, displayDiscount } from "@utils/utils"
import { IProducts } from "@interfaces/interfaces"

import Link from "next/link"
import Style from "@styles/components/Card.module.css"

interface IProps {
  product: IProducts
}

const Card: NextPage<IProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <a className={Style.card}>
        <div className={Style.image}>
          <img src={product.image.url} alt="product image" />
        </div>

        <div className={Style.info}>
          {product.quantity < 1 && (
            <span className={Style.nostock}>NO STOCK</span>
          )}

          <div className={Style.flex}>
            {product.isOnSale ? (
              <>
                <h3 className={Style.sale}>{displayPrice(product.price)}</h3>
                <h3 className={Style.oldprice}>
                  {displayPrice(product.listPrice)}
                </h3>
                <span className={Style.save}>
                  Save {displayDiscount(product.listPrice, product.price)}%
                </span>
              </>
            ) : (
              <h3>{displayPrice(product.price)}</h3>
            )}
          </div>

          <p>{product.title}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card
