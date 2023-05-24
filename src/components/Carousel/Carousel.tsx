import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { Product } from 'types/Poduct'
import ProductCard from './ProductCard'

interface IHotelCard {
  imageSrc: string
  title: string
  description: string
  pricingText: string
  features: string[]
}

interface Props {
  hotelCards: IHotelCard[];
  products : Product[];
}

export default function Carousel( {hotelCards, products} : Props ) {

  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
  }

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Slider>
    </div>
  )
}
