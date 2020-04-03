import React from 'react';
import Carousel from './Carousel.component';
import FlashDealsContainer from './FlashDealsContainer';
import LocationContainer from './LocationContainer';
import TrendingProductsContainer from './TrendingProductsContainer';
import TrendingStoresContainer from './TrendingStoresContainer';
import FeaturedBrandsContainer from './FeaturedBrandsContainer';
import CategoriesContainer from './CategoriesContainer';
import DummyContainer from './DummyContainer';

function LandingPage() {
  return (
    <div className='landing-page-body'>
      <div className='row row-1'>
        <div className='col-20 r1-c1-container '>
          <div className='categories-container box-container'>
            <CategoriesContainer />
          </div>
        </div>

        <div className='col-60 r1-c2-container'>
          <div className='carousel-container'>
            <Carousel
              slides={[
                'https://ae01.alicdn.com/kf/H09d1e34a569a4e749f58b4179504c1bf6.png',
                'https://i01.appmifile.com/webfile/globalimg/Mandy/g7-Global-pc.jpg',
                'https://pbs.twimg.com/media/C8KNQo5UIAA94Q7.jpg',
                'https://ae01.alicdn.com/kf/H42b8ff978f9f40c68f85025d62a2d533R.jpg',
                'https://ae01.alicdn.com/kf/Hb549882efd9548fda0cb502383a43bdd3.png',
                'https://ae01.alicdn.com/kf/H60786de031ca4430a1a8a95fd3003d7aD.png'
              ]}
              links={[
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com'
              ]}
              timer={6000}
            />
          </div>

          <div className='flash-deals-box-container box-container'>
            <FlashDealsContainer />
          </div>
        </div>

        <div className='col-20 r1-c3-container'>
          <div className='location-box-container box-container'>
            <LocationContainer />
          </div>
          <div className='dummy-box-container box-container'>
            <DummyContainer />
          </div>
        </div>
      </div>

      <div className='row row-2'>
        <div className='col-100 trending-products-box-container box-container'>
          <TrendingProductsContainer />
        </div>
      </div>

      <div className='row row-3'>
        <div className='col-100 trending-stores-box-container box-container'>
          <TrendingStoresContainer />
        </div>
      </div>

      <div className='row row-4'>
        <div className='col-100 featured-brands-box-container box-container'>
          <FeaturedBrandsContainer />
        </div>
      </div>

      <div className='row row-3'>
        <div className='col-100 trending-stores-box-container box-container'>
          <TrendingStoresContainer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
