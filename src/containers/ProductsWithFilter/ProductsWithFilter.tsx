import type { FC } from "react"
import type { IProducts } from "@interfaces/interfaces"

import { useState } from "react"

import { Filter, OrderBy, Pagination, ProductsGrid } from "@components/index"
import Style from "./ProductsWithFilter.module.css"

interface IProps {
  brands?: string[]
  products: IProducts[]
  total: number
}

export const ProductsWithFilter: FC<IProps> = ({ brands, products, total }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

  return (
    <div className={Style.Container}>
      <div className={Style.Filter + (isFilterOpen ? " " + Style.Open : "")}>
        <Filter brands={brands} setIsFilterOpen={setIsFilterOpen} />
      </div>

      <div className={Style.Products + (isFilterOpen ? " " + Style.Hide : "")}>
        <div className={Style.Tools}>
          <OrderBy />
          <button className={Style.FilterBtn} onClick={() => setIsFilterOpen(true)}>
            Filter
          </button>
        </div>

        {products.length > 0 ? (
          <>
            <ProductsGrid products={products} />
            <Pagination total={total} />
          </>
        ) : (
          <p>No results.</p>
        )}
      </div>
    </div>
  )
}
