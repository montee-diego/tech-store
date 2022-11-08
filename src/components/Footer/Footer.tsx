import type { FunctionComponent } from "react"
import Style from "./Footer.module.css"

export const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className={Style.container}>
        <p>Tech Store &copy; 2010-2022</p>
      </div>
    </footer>
  )
}
