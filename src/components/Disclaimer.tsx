import { Dispatch, SetStateAction, SyntheticEvent } from "react"
import { NextPage } from "next"

import { ButtonLink } from "@components/index"

import Style from "@styles/components/Disclaimer.module.css"

interface IProps {
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>
}

const Disclaimer: NextPage<IProps> = ({ setIsPopupOpen }) => {
  const handlePopup = (event: SyntheticEvent): void => {
    setIsPopupOpen(false)
  }

  return (
    <div className={Style.container}>
      <div className={Style.popup}>
        <h2>Disclaimer</h2>
        <p>
          This site is a <strong>portfolio project</strong> only, none of the
          products are for sale. Prices were taken from different sites and do
          not reflect real market prices at all.
        </p>
        <ButtonLink onClick={handlePopup}>Ok, I understand</ButtonLink>
      </div>
    </div>
  )
}

export default Disclaimer
