import type { FC, ChangeEvent } from "react"

import { useRouter } from "next/router"

import Style from "./OrderBy.module.css"

export const OrderBy: FC = () => {
  const router = useRouter()
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: Number(event.target.value),
      },
    })
  }

  return (
    <div className={Style.Container}>
      <h5>Sort by:</h5>
      <div className={Style.List}>
        <label className={Style.Option}>
          <input type="radio" name="orderBy" onChange={handleChange} value={0} defaultChecked />
          <span>Featured</span>
        </label>

        <label className={Style.Option}>
          <input type="radio" name="orderBy" onChange={handleChange} value={1} />
          <span>Lowest Price</span>
        </label>

        <label className={Style.Option}>
          <input type="radio" name="orderBy" onChange={handleChange} value={2} />
          <span>Highest Price</span>
        </label>
      </div>
    </div>
  )
}
