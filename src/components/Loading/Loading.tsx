import type { FunctionComponent } from "react"
import Style from "./Loading.module.css"

export const Loading: FunctionComponent = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.loading}></div>
      <p>Loading</p>
    </div>
  )
}
