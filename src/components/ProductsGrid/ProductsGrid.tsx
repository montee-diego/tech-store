import type { FunctionComponent } from "react"
import { IProducts } from "@interfaces/interfaces"
import { Card } from "@components/index"
import Style from "./ProductsGrid.module.css"

interface IProps {
  products: IProducts[]
}

export const ProductsGrid: FunctionComponent<IProps> = ({ products }) => {
  return (
    <div className={Style.products}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  )
}
