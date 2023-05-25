import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {Product} from 'types/Product';
import {Button} from '@material-ui/core';
import ProductCard from './ProductCard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface Props {
  title: string;
  products: Product[];
}

export default function ProductCarousel({title, products}: Props) {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const sliderSettings = {
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          infinite: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-background-secondary)',
        padding: '25px',
      }}
    >
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1 style={{marginBottom: '25px'}}>{title}</h1>
        <div>
          <Button onClick={sliderRef?.slickPrev}>
            <ArrowCircleLeftIcon style={{fontSize: '40px'}} />
          </Button>
          <Button onClick={sliderRef?.slickNext}>
            <ArrowCircleRightIcon style={{fontSize: '40px'}} />
          </Button>
        </div>
      </div>
      {/* Carrousel */}
      <Slider ref={setSliderRef} {...sliderSettings}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Slider>
    </div>
  );
}
