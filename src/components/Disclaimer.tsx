import { Dispatch, SetStateAction, SyntheticEvent } from "react"
import { NextPage } from "next"

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
        <button onClick={handlePopup}>Ok, I Understand</button>
      </div>
    </div>
  )
}

export default Disclaimer
