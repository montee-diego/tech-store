import type { FunctionComponent } from "react"
import { IProducts } from "@interfaces/interfaces"
import Link from "next/link"
import Style from "./Breadcrumb.module.css"

interface IProps {
  category: {
    id: string
    name: string
    products: IProducts[]
  }
  brand: string
}

export const Breadcrumb: FunctionComponent<IProps> = ({ category, brand }) => {
  return (
    <div className={`${Style.container} ${Style.breadcrumb}`}>
      <div className={Style.breadcrumb}>
        <Link href="/">
          <a className={Style.link}>Home</a>
        </Link>
        <img className={Style.separator} src="/img/breadcrumb-sep.svg" alt="/" />
      </div>

      <div className={Style.breadcrumb}>
        <Link href={`/category/${category.id}`}>
          <a className={Style.link}>{category.name}</a>
        </Link>
        <img className={Style.separator} src="/img/breadcrumb-sep.svg" alt="/" />
      </div>

      <div className={Style.breadcrumb}>
        <h1>{brand}</h1>
      </div>
    </div>
  )
}
