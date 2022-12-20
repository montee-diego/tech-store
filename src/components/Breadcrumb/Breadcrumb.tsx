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
  brand?: string
}

export const Breadcrumb: FC<IProps> = ({ category, brand }) => {
  return (
    <div className={Style.Container}>
      <div className={Style.Link}>
        <Link href="/">
          Home
        </Link>
        <img className={Style.Separator} src="/img/breadcrumb-sep.svg" alt="/" />
      </div>

      <div className={Style.Link}>
        <Link href={`/category/${category.slug}`}>
          {category.name}
        </Link>
      </div>

      {brand && (
        <div className={Style.Link}>
          <img className={Style.Separator} src="/img/breadcrumb-sep.svg" alt="/" />
          <Link href={`/category/${category.slug}/${brand.toLowerCase()}`}>
            {brand}
          </Link>
        </div>
      )}
    </div>
  )
}
