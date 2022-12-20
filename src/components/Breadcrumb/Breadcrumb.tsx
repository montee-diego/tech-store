import type { FC } from "react"

import { IProducts } from "@interfaces/interfaces"

import Link from "next/link"
import Style from "./Breadcrumb.module.css"

interface IProps {
  category: {
    id: string
    name: string
    products: IProducts[]
    slug: string
  }
  brand: string
}

export const Breadcrumb: FC<IProps> = ({ category, brand }) => {
  return (
    <div className={`${Style.container} ${Style.breadcrumb}`}>
      <div className={Style.breadcrumb}>
        <Link href="/">
          Home
        </Link>
        <img className={Style.separator} src="/img/breadcrumb-sep.svg" alt="/" />
      </div>

      <div className={Style.breadcrumb}>
        <Link href={`/category/${category.slug}`}>
          {category.name}
        </Link>
        <img className={Style.separator} src="/img/breadcrumb-sep.svg" alt="/" />
      </div>

      <div className={Style.breadcrumb}>
        <Link href={`/category/${category.slug}/${brand.toLowerCase()}`}>
          {brand}
        </Link>
      </div>
    </div>
  )
}
