import type { FC, MouseEvent } from "react"
import { useRouter } from "next/router"
import Style from "./Pagination.module.css"

interface IProps {
  total: number
}

export const Pagination: FC<IProps> = ({ total }) => {
  const router = useRouter()
  const page = Number(router.query?.page) || 1
  const totalPages = Math.ceil(total / 10)

  const handlePage = (event: MouseEvent<HTMLButtonElement>): void => {
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: event.currentTarget.value,
      }
    })
  }

  const renderButtons = () => {
    let buttons = []

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={handlePage} value={i} disabled={page === i}>
          {i}
        </button>
      )
    }

    return buttons
  }

  return (
    <div className={Style.pagination}>
      {renderButtons()}
    </div>
  )
}
