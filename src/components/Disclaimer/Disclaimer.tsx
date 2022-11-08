import { Dispatch, SetStateAction, SyntheticEvent, FunctionComponent } from "react"

import { ButtonLink } from "@components/index"
import Style from "./Disclaimer.module.css"

interface IProps {
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>
}

export const Disclaimer: FunctionComponent<IProps> = ({ setIsPopupOpen }) => {
  const handlePopup = (event: SyntheticEvent): void => {
    setIsPopupOpen(false)
  }

  return (
    <div className={Style.container}>
      <div className={Style.popup}>
        <h2>Disclaimer</h2>
        <p>
          This site is a <strong>portfolio project</strong> only, none of the products are for sale.
          Prices were taken from different sites and do not reflect real market prices at all.
        </p>
        <ButtonLink onClick={handlePopup}>Ok, I understand</ButtonLink>
      </div>
    </div>
  )
}
