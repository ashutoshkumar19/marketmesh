import React, { Fragment, useEffect } from 'react';
import BrandCard from './BrandCard.component';

function FeaturedBrandsContainer() {
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
        <p>Featured Brands</p>
      </div>
      <div
        className='featured-brands-container slider-container'
        id={`slider-container-${element_id}`}
      >
        <BrandCard
          key={i}
          id={i}
          backgroundImage={
            'https://cdn.awsind0-fusion.fds.api.mi-img.com/b2c-i18n-bbs-in/db171c4485.png?thumb=1&w=776&h=392'
          }
          productImages={[
            'https://smartmove254.com/wp-content/uploads/2019/12/Redmi-A3.jpg',
            'https://www.gizmochina.com/wp-content/uploads/2020/03/Xiaomi-Redmi-Note-9-Pro-Max-500x500.jpg',
            'https://www.91-img.com/pictures/131776-v3-xiaomi-mi-mix-3-5g-mobile-phone-large-1.jpg'
          ]}
          productLinks={[
            'https://www.google.com',
            'https://www.amazon.com',
            'https://www.youtube.com'
          ]}
          brandLogo={''}
          brandName={'Xiaomiers Hisonic Shenzen Bay Area Distributers'}
          brandLink={'https://www.google.com'}
        />
        {list.map(i => (
          <BrandCard
            key={i}
            id={i}
            backgroundImage={'https://i.ytimg.com/vi/kQqGusro7fM/maxresdefault.jpg'}
            productImages={[
              'https://smartmove254.com/wp-content/uploads/2019/12/Redmi-A3.jpg',
              'https://www.gizmochina.com/wp-content/uploads/2020/03/Xiaomi-Redmi-Note-9-Pro-Max-500x500.jpg',
              'https://www.91-img.com/pictures/131776-v3-xiaomi-mi-mix-3-5g-mobile-phone-large-1.jpg'
            ]}
            productLinks={[
              'https://www.google.com',
              'https://www.amazon.com',
              'https://www.youtube.com'
            ]}
            brandLogo={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1024px-Xiaomi_logo.svg.png'
            }
            brandName={'Xiaomi'}
            brandLink={'https://www.google.com'}
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

export default FeaturedBrandsContainer;
