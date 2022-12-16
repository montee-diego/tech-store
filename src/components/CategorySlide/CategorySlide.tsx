import type { FunctionComponent } from "react"
import { ICategory } from "@interfaces/interfaces"
import Link from "next/link"
import Style from "./CategorySlide.module.css"

interface IProps {
  category: ICategory
}

export const CategorySlide: FunctionComponent<IProps> = ({ category }) => {
  return (
    <div className={Style.slide} style={{ backgroundImage: `url(${category.image.url})` }}>
      <div className={Style.overlay}>
        <Link href={`/category/${category.slug}`}>
          <a className={Style.link}>{category.name}</a>
        </Link>
      </div>
    </div>
  )
}
