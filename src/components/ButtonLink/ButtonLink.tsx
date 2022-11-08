import type { FunctionComponent, MouseEventHandler, ReactNode } from "react"

import Link from "next/link"
import Style from "./ButtonLink.module.css"

interface IProps {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  secondary?: boolean
}

export const ButtonLink: FunctionComponent<IProps> = ({ children, href, onClick, secondary }) => {
  const buttonStyle = secondary ? Style.secondary : Style.primary

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={`${Style.button} ${buttonStyle}`}>{children}</a>
        </Link>
      ) : (
        <button className={`${Style.button} ${buttonStyle}`} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}
