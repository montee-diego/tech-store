import { NextPage } from "next"

import Link from "next/link"
import Style from "@styles/components/NavLink.module.css"

interface IProps {
  href: string
  title: string
}

const NavLink: NextPage<IProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className={Style.link}>{title}</a>
    </Link>
  )
}

export default NavLink
