import { FunctionComponent, ReactNode } from "react"

import Style from "@styles/components/ProductList.module.css"

interface IProps {
  children: ReactNode
}

const ProductList: FunctionComponent<IProps> = ({ children }) => {
  return <div className={Style.products}>{children}</div>
}

export default ProductList
