import type { FC } from "react"

import Style from "./Loading.module.css"

export const Loading: FC = () => {
  return (
    <div className={Style.Container}>
      <div className={Style.Loading}></div>
      <p>Loading</p>
    </div>
  )
}
