import React, { useEffect } from 'react'
import useHome from '../hooks/home.hook'
import Carousel from 'components/Carousel/Carousel'
import ProductCarousel from 'components/ProductCarousel/ProductCarousel'

export default function Index() {
  const { data, loading, error, fetchHomeData } = useHome()

  useEffect(() => {
    console.log('data', data)
  }, [data])

  return (
    <div style={{padding:'80px 0px'}}>

      <div style={{padding: '0px 200px'}}>
        <ProductCarousel title='Best deals' products={data?.bestDeals||[]} />
      </div>

      <div style={{padding: '80px 200px'}}>
        <ProductCarousel title='Most bought' products={data?.mostBought||[]} />
      </div>

    </div>
  )
}
