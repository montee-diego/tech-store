import { FunctionComponent, MouseEventHandler, ReactNode } from "react"

import Link from "next/link"
import Style from "./ButtonLink.module.css"

interface IProps {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonLink: FunctionComponent<IProps> = ({ children, href, onClick }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={Style.button}>
            {children}
          </a>
        </Link>
      ) : (
        <button className={Style.button} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}
