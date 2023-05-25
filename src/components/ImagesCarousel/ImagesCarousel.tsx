import React from 'react';
import Slider from 'react-slick';

interface Props {
  urls: string[];
}

export default function ImagesCarousel({urls}: Props) {
  const sliderSettings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{marginBottom: '100px'}}>
      {/* Carrousel */}
      <Slider {...sliderSettings}>
        {urls.map((product, index) => (
          <img key={index} src={product} alt={product} />
        ))}
      </Slider>
    </div>
  );
}
