import Link from "next/link"
import Style from "@styles/404.module.css"

const NotFound404 = () => {
  return (
    <section>
      <div className={Style.wrapper}>
        <p>Page not found.</p>
        <Link href="/">
          <a className={Style.btn}>Home</a>
        </Link>
      </div>
    </section>
  )
}

export default NotFound404
