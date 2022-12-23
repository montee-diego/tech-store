import type { Dispatch, SetStateAction, SyntheticEvent, FC } from "react"

import { useEffect, useRef } from "react"

import { ButtonLink } from "@components/index"

import Style from "./Disclaimer.module.css"

interface IProps {
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>
}

export const Disclaimer: FC<IProps> = ({ setIsPopupOpen }) => {
  const btn = useRef<(HTMLAnchorElement & HTMLButtonElement) | null>(null)
  const handlePopup = (event: SyntheticEvent): void => {
    setIsPopupOpen(false)
  }

  useEffect(() => {
    if (btn.current) btn.current.focus()
  }, [])

  return (
    <div className={Style.Container}>
      <div className={Style.Popup}>
        <h2>Disclaimer</h2>
        <p>
          This site is a <strong>portfolio project</strong> only, none of the products are for sale.
          Prices were taken from different sites and do not reflect real market prices at all.
        </p>
        <ButtonLink onClick={handlePopup} ref={btn}>
          Ok, I understand
        </ButtonLink>
      </div>
    </div>
  )
}
