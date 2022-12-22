import type { FC, ChangeEvent } from "react"

import { useEffect, useRef } from "react"
import { useRouter } from "next/router"

import Style from "./OrderBy.module.css"

export const OrderBy: FC = () => {
  const router = useRouter()
  const feat = useRef<HTMLInputElement | null>(null)
  const asc = useRef<HTMLInputElement | null>(null)
  const desc = useRef<HTMLInputElement | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: event.target.value,
      },
    })
  }

  useEffect(() => {
    const { query } = router

    if (feat.current && asc.current && desc.current) {
      if (!query.sort || query.sort === "" || Number(query.sort) > 2) {
        feat.current.checked = true
        return
      }

      feat.current.checked = query.sort === "0"
      asc.current.checked = query.sort === "1"
      desc.current.checked = query.sort === "2"
    }
  }, [router.isReady])

  return (
    <div className={Style.Container}>
      <h5>Sort by:</h5>
      <div className={Style.List}>
        <label className={Style.Option}>
          <input type="radio" name="orderBy" onChange={handleChange} value={0} ref={feat} />
          <span>Featured</span>
        </label>

        <label className={Style.Option}>
          <input type="radio" name="orderBy" onChange={handleChange} value={1} ref={asc} />
          <span>Lowest Price</span>
        </label>

        <label className={Style.Option}>
          <input type="radio" name="orderBy" onChange={handleChange} value={2} ref={desc} />
          <span>Highest Price</span>
        </label>
      </div>
    </div>
  )
}
