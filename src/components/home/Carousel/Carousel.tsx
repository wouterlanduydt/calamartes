import Arrow from '@assets/svg/Arrow'
import Img, { FixedObject } from 'gatsby-image'
import * as React from 'react'
import { Settings } from 'react-slick'
import { ArrowWrap, InnerWrap, StyledSlider, Wrap } from './Carousel.styled'

type TProps = {
  images: Array<FixedObject | null | undefined>
}

const CarouselComponent = (props: TProps) => {
  const { images } = props

  const sliderSettings: Settings = {
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  }

  return images ? (
    <Wrap>
      {/* second wrapper to add another ornament */}
      <InnerWrap>
        <div className="innerContainer">
          <StyledSlider {...sliderSettings}>
            {images.map((image, index) => image && <Img key={index} fixed={image} alt="" />)}
          </StyledSlider>
        </div>
      </InnerWrap>
    </Wrap>
  ) : null
}

const CustomArrow = (props: { className?: string; onClick?: () => void }) => {
  const { className, onClick } = props
  const prev = (className && className.indexOf('slick-prev') >= 0) || false

  return (
    <div className={className} onClick={onClick}>
      <ArrowWrap prev={prev}>
        <Arrow />
      </ArrowWrap>
    </div>
  )
}

export default CarouselComponent
