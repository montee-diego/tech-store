import type { FC, SyntheticEvent } from "react"

import { useRef } from "react"
import { useRouter } from "next/router"

import Link from "next/link"
import Style from "./Filter.module.css"

interface IProps {
  brands: string[]
}

export const Filter: FC<IProps> = ({ brands }) => {
  const router = useRouter()
  const min = useRef<HTMLInputElement | null>(null)
  const max = useRef<HTMLInputElement | null>(null)
  const quantity = useRef<HTMLInputElement | null>(null)
  const sale = useRef<HTMLInputElement | null>(null)
  const displayBrands = [...brands].sort()

  function handleSubmit(event: SyntheticEvent): void {
    event.preventDefault()
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
    <form className={Style.form} onSubmit={handleSubmit}>
      {brands.length > 0 && (
        <>
          <h5>Brands</h5>
          <div className={`${Style.checkbox} ${Style.filter}`}>
            {displayBrands.map((brand) => (
              <Link href={`/category/${router.query.slug}/${brand.toLowerCase()}`} key={brand}>
                {brand}
              </Link>
            ))}
          </div>
        </>
      )}

      <h5>Price Range</h5>
      <div className={Style.price}>
        <span className={Style.input}>
          <label htmlFor="min">Min</label>
          <input type="number" id="min" min={0} max={500000} ref={min} />
        </span>
        <span className={Style.input}>
          <label htmlFor="max">Max</label>
          <input type="number" id="max" min={0} max={500000} ref={max} />
        </span>
      </div>

      <h5>Other</h5>
      <div className={`${Style.checkbox} ${Style.filter}`}>
        <label>
          <input type="checkbox" name="stock" ref={quantity} />
          In Stock
        </label>
        <label>
          <input type="checkbox" name="sale" ref={sale} />
          On Sale
        </label>
      </div>

      <button type="submit">Apply</button>
    </form>
  )
}
