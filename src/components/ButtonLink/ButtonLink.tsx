import type { MouseEventHandler, ReactNode } from "react"

import { forwardRef } from "react"

import Link from "next/link"
import Style from "./ButtonLink.module.css"

interface IProps {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  secondary?: boolean
}

type Ref = HTMLAnchorElement & HTMLButtonElement

export const ButtonLink = forwardRef<Ref, IProps>(function ButtonLink(props, ref) {
  const { children, href, onClick, secondary } = props
  const buttonStyle = secondary ? Style.Secondary : Style.Primary

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <a className={`${Style.Button} ${buttonStyle}`} ref={ref}>
            {children}
          </a>
        </Link>
      ) : (
        <button className={`${Style.Button} ${buttonStyle}`} onClick={onClick} ref={ref}>
          {children}
        </button>
      )}
    </>
  )
})
