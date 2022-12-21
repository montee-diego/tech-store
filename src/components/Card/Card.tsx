import type { NextPage } from "next"

import { displayPrice, displayDiscount } from "@utils/utils"
import { IProducts } from "@interfaces/interfaces"

import Link from "next/link"
import Style from "./Card.module.css"

interface IProps {
  product: IProducts
}

export const Card: NextPage<IProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <a className={Style.Container}>
        <div className={Style.Image}>
          <img src={product.image.url} alt="product image" />
        </div>

        <div className={Style.Info}>
          {product.quantity < 1 && (
            <span className={Style.Stock}>
              NO STOCK
            </span>
          )}

          {product.isOnSale && (
            <span className={Style.Save}>
              Save {displayDiscount(product.listPrice, product.price)}%
            </span>
          )}

          <div className={Style.Price}>
            {product.isOnSale ? (
              <>
                <h3 className={Style.CurPrice}>{displayPrice(product.price)}</h3>
                <h3 className={Style.OldPrice}>{displayPrice(product.listPrice)}</h3>
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
