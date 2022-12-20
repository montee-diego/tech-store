import type { FC, ReactNode } from "react"

import Style from "./Title.module.css"

interface IProps {
  children: ReactNode
}

export const Title: FC<IProps> = ({ children }) => {
  return (
    <div className={Style.Title}>
      {children}
    </div>
  )
}
