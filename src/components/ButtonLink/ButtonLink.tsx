import type { FC, MouseEventHandler, ReactNode } from "react"

import Link from "next/link"
import Style from "./ButtonLink.module.css"

interface IProps {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  secondary?: boolean
}

export const ButtonLink: FC<IProps> = ({ children, href, onClick, secondary }) => {
  const buttonStyle = secondary ? Style.Secondary : Style.Primary

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <a className={`${Style.Button} ${buttonStyle}`}>{children}</a>
        </Link>
      ) : (
        <button className={`${Style.Button} ${buttonStyle}`} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}
