import type { FC, Dispatch, SetStateAction, SyntheticEvent } from "react"

import { useRef } from "react"
import { useRouter } from "next/router"

import Link from "next/link"
import Style from "./Filter.module.css"

interface IProps {
  brands?: string[]
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>
}

export const Filter: FC<IProps> = ({ brands, setIsFilterOpen }) => {
  const router = useRouter()
  const min = useRef<HTMLInputElement | null>(null)
  const max = useRef<HTMLInputElement | null>(null)
  const quantity = useRef<HTMLInputElement | null>(null)
  const sale = useRef<HTMLInputElement | null>(null)
  const displayBrands = brands ? [...brands].sort() : []

  function handleCloseFilter(event: SyntheticEvent): void {
    event.preventDefault()
    setIsFilterOpen(false)
  }

  function handleSubmit(event: SyntheticEvent): void {
    event.preventDefault()
    setIsFilterOpen(false)
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        min: Number(min?.current?.value) || 0,
        max: Number(max?.current?.value) || 500000,
        quantity: quantity?.current?.checked ? 1 : 0,
        sale: sale?.current?.checked,
        sort: router.query?.sort || 0,
        page: 1,
      },
    })
  }

  return (
    <form className={Style.Form} onSubmit={handleSubmit}>
      {brands && (
        <>
          <h5>Brands</h5>
          <div className={Style.List}>
            {displayBrands.map((brand) => (
              <Link href={`/category/${router.query.slug}/${brand.toLowerCase()}`} key={brand}>
                {brand}
              </Link>
            ))}
          </div>
        </>
      )}

      <h5>Price Range</h5>
      <div className={Style.Price}>
        <span className={Style.Input}>
          <label htmlFor="min">Min</label>
          <input type="number" id="min" min={0} max={500000} ref={min} />
        </span>
        <span className={Style.Input}>
          <label htmlFor="max">Max</label>
          <input type="number" id="max" min={0} max={500000} ref={max} />
        </span>
      </div>

      <h5>Other</h5>
      <div className={Style.List}>
        <label>
          <input type="checkbox" name="stock" ref={quantity} />
          <span>In Stock</span>
        </label>
        <label>
          <input type="checkbox" name="sale" ref={sale} />
          <span>On Sale</span>
        </label>
      </div>

      <div className={Style.Actions}>
        <button type="submit">Apply</button>
        <button className={Style.FilterClose} onClick={handleCloseFilter}>
          Close
        </button>
      </div>
    </form>
  )
}
