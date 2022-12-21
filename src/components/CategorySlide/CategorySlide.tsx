import type { FC } from "react"

import { ICategory } from "@interfaces/interfaces"

import Link from "next/link"
import Style from "./CategorySlide.module.css"

interface IProps {
  category: ICategory
}

export const CategorySlide: FC<IProps> = ({ category }) => {
  return (
    <div className={Style.Slide} style={{ backgroundImage: `url(${category.image.url})` }}>
      <div className={Style.Overlay}>
        <Link href={`/category/${category.slug}`} passHref>
          <a tabIndex={-1}>{category.name}</a>
        </Link>
      </div>
    </div>
  )
}
