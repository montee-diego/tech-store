import {
  useRef,
  ChangeEvent,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from "react"
import { NextPage } from "next"

import Style from "@styles/components/Filter.module.css"

interface IFilterOpts {
  id: string
  brands: string[]
  minPrice: number
  maxPrice: number
  quantity: number
  isSale: boolean
}

interface IProps {
  brands: string[]
  id: string
  setFilterOpts: Dispatch<SetStateAction<IFilterOpts>>
}

const Filter: NextPage<IProps> = ({ id, brands, setFilterOpts }) => {
  const minPrice = useRef<HTMLInputElement | null>(null)
  const maxPrice = useRef<HTMLInputElement | null>(null)
  const selectedBrands = useRef<string[]>([])
  const stock = useRef<number>(0)
  const isSale = useRef<boolean>(false)
  const displayBrands = [...brands].sort()

  function handleBrand(event: ChangeEvent<HTMLInputElement>): void {
    const { value, checked } = event.target

    if (checked) {
      selectedBrands.current.push(value)
    } else {
      selectedBrands.current = selectedBrands.current.filter(
        (item) => item !== value
      )
    }
  }

  function handleStock(event: ChangeEvent<HTMLInputElement>): void {
    stock.current = event.target.checked ? 1 : 0
  }

  function handleSale(event: ChangeEvent<HTMLInputElement>): void {
    isSale.current = event.target.checked
  }

  function handleSubmit(event: SyntheticEvent): void {
    event.preventDefault()

    setFilterOpts({
      id: id,
      brands: selectedBrands.current.length ? selectedBrands.current : brands,
      minPrice: Number(minPrice?.current?.value) || 0,
      maxPrice: Number(maxPrice?.current?.value) || 500000,
      quantity: stock.current,
      isSale: isSale.current,
    })
  }

  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <h5>Brands</h5>
      <div className={`${Style.checkbox} ${Style.filter}`}>
        {displayBrands.map((brand) => (
          <label key={brand}>
            <input type="checkbox" value={brand} onChange={handleBrand} />
            {brand}
          </label>
        ))}
      </div>
      <h5>Price Range</h5>
      <div className={Style.price}>
        <span className={Style.input}>
          <label htmlFor="min">Min</label>
          <input type="number" id="min" min={0} max={500000} ref={minPrice} />
        </span>
        <span className={Style.input}>
          <label htmlFor="max">Max</label>
          <input type="number" id="max" min={0} max={500000} ref={maxPrice} />
        </span>
      </div>
      <h5>Other</h5>
      <div className={`${Style.checkbox} ${Style.filter}`}>
        <label>
          <input type="checkbox" name="stock" onChange={handleStock} />
          In Stock
        </label>
        <label>
          <input type="checkbox" name="sale" onChange={handleSale} />
          On Sale
        </label>
      </div>
      <button type="submit">Apply</button>
    </form>
  )
}

export default Filter
