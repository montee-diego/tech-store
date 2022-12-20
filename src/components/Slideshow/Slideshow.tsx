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
    <div className={`${Style.arrow} ${Style.prev}`} onClick={onClick}>
      <img src="/img/prev-arrow.svg" alt="<" />
    </div>
  )
}

const CustomNextArrow: FunctionComponent<CustomArrowProps> = (props) => {
  const { onClick } = props

  return (
    <div className={`${Style.arrow} ${Style.next}`} onClick={onClick}>
      <img src="/img/next-arrow.svg" alt="<" />
    </div>
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
    <div className={Style.container}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
