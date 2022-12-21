import type { FunctionComponent, ReactNode } from "react"
import type { CustomArrowProps } from "react-slick"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Style from "./Slideshow.module.css"

interface IProps {
  children: ReactNode
}

const CustomPrevArrow: FunctionComponent<CustomArrowProps> = (props) => {
  const { onClick } = props

  return (
    <button className={`${Style.Arrow} ${Style.Prev}`} onClick={onClick}>
      <div className={Style.Icon}>
        <img src="/img/prev-arrow.svg" alt="<" />
      </div>
    </button>
  )
}

const CustomNextArrow: FunctionComponent<CustomArrowProps> = (props) => {
  const { onClick } = props

  return (
    <button className={`${Style.Arrow} ${Style.Next}`} onClick={onClick}>
      <div className={Style.Icon}>
        <img src="/img/next-arrow.svg" alt="<" />
      </div>
    </button>
  )
}

export const Slideshow: FunctionComponent<IProps> = ({ children }) => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <div className={Style.Container}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
