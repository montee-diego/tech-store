import { NextPage } from "next"

import Link from "next/link"
import Style from "@styles/components/Category.module.css"

interface ICategory {
  icon: {
    url: string
  }
  id: string
  name: string
}

interface IProps {
  category: ICategory
}

const Category: NextPage<IProps> = ({ category }) => {
  return (
    <Link href={`/category/${category.id}`}>
      <a className={Style.card}>
        <div className={Style.image}>
          <img src={category.icon.url} alt="product image" />
        </div>
        <h4>{category.name}</h4>
      </a>
    </Link>
  )
}

export default Category
