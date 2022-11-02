import { Dispatch, SetStateAction, MouseEvent, useState } from "react"
import { NextPage } from "next"

import Style from "@styles/components/Pagination.module.css"

interface IProps {
  page: number
  total: number
  setPage: Dispatch<SetStateAction<number>>
}

const Pagination: NextPage<IProps> = ({ page, setPage, total }) => {
  const totalPages = Math.ceil(total / 10)

  const handlePage = (event: MouseEvent<HTMLButtonElement>): void => {
    setPage(Number(event.currentTarget.value))
  }

  const renderButtons = () => {
    let buttons = []

    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={handlePage}
          value={i}
          className={page === i ? Style.active : ""}
        >
          {i + 1}
        </button>
      )
    }

    return buttons
  }

  return <div className={Style.pagination}>{renderButtons()}</div>
}

export default Pagination
