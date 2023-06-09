import React, {useEffect} from 'react';
import useHome from '../hooks/home.hook';
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';
import ImagesCarousel from 'components/ImagesCarousel/ImagesCarousel';
import ModalWait from 'components/Modals/WaitModal';

export default function Index() {
  const {data, loading, error, fetchHomeData} = useHome();

  return (
    <div>
      <ImagesCarousel urls={data?.bannerUrls || []} />

      <div style={{padding: '0px 200px'}}>
        <ProductCarousel title='Best deals' products={data?.bestDeals || []} />
      </div>

      <div style={{padding: '80px 200px'}}>
        <ProductCarousel
          title='Most bought'
          products={data?.mostBought || []}
        />
      </div>

      <ModalWait />
    </div>
  );
}
