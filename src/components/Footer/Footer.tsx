import type { FC } from "react"

import Style from "./Footer.module.css"

export const Footer: FC = () => {
  return (
    <footer>
      <div className={Style.Container}>
        <p>Tech Store &copy; 2010-2022</p>
      </div>
    </footer>
  )
}
