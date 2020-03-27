import React, { Fragment, useEffect } from 'react';
import StoreCard from './StoreCard.component';

function TrendingStoresContainer() {
  var sliderContainer, childWidth;

  const randomString = () => {
    var length = 10;
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  };

  const element_id = randomString();

  useEffect(() => {
    var containerHeight = document.getElementById(`slider-container-${element_id}`).offsetHeight;
    var controlElement = document.getElementsByClassName(`slider-control-${element_id}`);
    var controlHeight = controlElement[0].offsetHeight;
    var height = containerHeight / 2 + controlHeight / 2;
    controlElement[0].style.marginTop = `-${height}px`;
    controlElement[1].style.marginTop = `-${height}px`;
  }, []);

  const handleScroll = string => {
    if (!sliderContainer || !childWidth) {
      sliderContainer = document.getElementById(`slider-container-${element_id}`);
      childWidth = sliderContainer.firstChild.offsetWidth;
    }
    if (string === 'left') {
      sliderContainer.scrollLeft -= 2 * childWidth;
    } else {
      sliderContainer.scrollLeft += 2 * childWidth;
    }
  };

  // To be removed
  const list = [];
  for (var i = 0; i < 10; i++) {
    list.push(i);
  }

  return (
    <Fragment>
      <div className='slider-container-heading'>
        <span className='material-icons'>storefront</span>
        <p>Trending Stores</p>
      </div>
      <div
        className='trending-stores-container slider-container'
        id={`slider-container-${element_id}`}
      >
        <StoreCard
          key={i}
          id={i}
          images={[
            'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/homedecor-1526358274.jpg',
            'https://katerinasgift.files.wordpress.com/2014/10/213.jpg',
            'https://www.woodenstreet.com/images/home-decor/mobile-banner.jpg'
          ]}
          productLinks={[
            'https://www.google.com',
            'https://www.amazon.com',
            'https://www.youtube.com'
          ]}
          storeLogo={''}
          storeName={'Hisonic Shenzen Bay Area Distributers Hisonic Shenzen Bay Area Distributers'}
          storeLink={'https://www.google.com'}
          rating={'4.5'}
          categoryList={['Electronics', 'Audio']}
          categoryCode={Math.floor(Math.random() * 13)}
        />
        {list.map(i => (
          <StoreCard
            key={i}
            id={i}
            images={[
              'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/homedecor-1526358274.jpg',
              'https://katerinasgift.files.wordpress.com/2014/10/213.jpg',
              'https://www.woodenstreet.com/images/home-decor/mobile-banner.jpg'
            ]}
            productLinks={[
              'https://www.google.com',
              'https://www.amazon.com',
              'https://www.youtube.com'
            ]}
            storeLogo={
              'https://image.freepik.com/free-vector/organic-store-logo-design-inspiration_18099-270.jpg'
            }
            storeName={'Brooklyn Home Decor & Design Store'}
            storeLink={'https://www.google.com'}
            rating={'4.5'}
            categoryList={['Home Decor', 'Lifestyle', 'Furniture']}
            categoryCode={Math.floor(Math.random() * 13)}
          />
        ))}
      </div>

      <div className={`slider-control control-left slider-control-${element_id}`}>
        <i className='fas fa-chevron-left' onClick={() => handleScroll('left')}></i>
      </div>
      <div className={`slider-control control-right slider-control-${element_id}`}>
        <i className='fas fa-chevron-right' onClick={() => handleScroll('right')}></i>
      </div>
    </Fragment>
  );
}

export default TrendingStoresContainer;
