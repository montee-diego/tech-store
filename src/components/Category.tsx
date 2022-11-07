import { NextPage } from "next"

import { ICategory } from "@interfaces/interfaces"
import Link from "next/link"
import Style from "@styles/components/Category.module.css"

interface IProps {
  category: ICategory
}

const Category: NextPage<IProps> = ({ category }) => {
  return (
    <div
      className={Style.slide}
      style={{ backgroundImage: `url(${category.image.url})` }}
    >
      <div className={Style.overlay}>
        <Link href={`/category/${category.id}`}>
          <a className={Style.link}>{category.name}</a>
        </Link>
      </div>
    </div>
  )
}

export default Category
