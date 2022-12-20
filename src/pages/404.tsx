import type { NextPage } from "next"

import { ButtonLink } from "@components/index"
import Style from "@styles/404.module.css"

const NotFound404: NextPage = () => {
  return (
    <section>
      <div className={Style.wrapper}>
        <p>Oops! We could not find what you are looking for.</p>
        <ButtonLink href="/">Home</ButtonLink>
      </div>
    </section>
  )
}

export default NotFound404
