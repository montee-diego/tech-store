import type { FunctionComponent, MouseEvent, SetStateAction } from "react"
import { Dispatch } from "react"

import Style from "./Pagination.module.css"

interface IProps {
  page: number
  total: number
  setPage: Dispatch<SetStateAction<number>>
}

export const Pagination: FunctionComponent<IProps> = ({ page, setPage, total }) => {
  const totalPages = Math.ceil(total / 10)

  const handlePage = (event: MouseEvent<HTMLButtonElement>): void => {
    setPage(Number(event.currentTarget.value))
  }

  const renderButtons = () => {
    let buttons = []

    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button key={i} onClick={handlePage} value={i} disabled={page === i}>
          {i + 1}
        </button>
      )
    }

    return buttons
  }

  return <div className={Style.pagination}>{renderButtons()}</div>
}
