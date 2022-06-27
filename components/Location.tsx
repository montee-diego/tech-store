import { NextPage } from "next"

import NavLink from "./NavLink"
import Style from "../styles/components/Location.module.css"

interface IProps {
  brand: string
  id: string
  name: string
}

const Location: NextPage<IProps> = ({ id, name, brand }) => {
  return (
    <div className={Style.flex}>
      <NavLink href={`/category/${id}`} title={name} />
      <img src='/tech-store/img/chevron-right-solid.svg' alt='>' />
      <h1>{brand}</h1>
    </div>
  )
}

export default Location
