import React, { Fragment } from 'react';
import ProductCard from './ProductCard.component';

function TrendingProductsContainer() {
  var content, cardWidth;

  const handleScroll = string => {
    if (!content || !cardWidth) {
      content = document.getElementById('trending-products-container');
      cardWidth = document.getElementsByClassName('card-product')[0].offsetWidth;
    }
    if (string === 'left') {
      content.scrollLeft -= 2 * cardWidth;
    } else {
      content.scrollLeft += 2 * cardWidth;
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
        <span class='material-icons'>trending_up</span>
        <p>Trending Products</p>
      </div>
      <div
        className='trending-products-container slider-container'
        id='trending-products-container'
      >
        <ProductCard
          images={[
            'https://cdn.newday.mk/uploads/2018/08/395142931-1.jpg',
            'https://www.atsshopping.com/images/products/1551089542.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEyTmpTYLSyB9xNE7LYkVWDCU6xIG2R8T4Ed_lsGe6Jb6gtGm3',
            'https://5.imimg.com/data5/VT/DA/MY-15780217/troops-tp-7040-extra-bass-headphone-500x500.jpg'
          ]}
          id={'id'}
          title={'Hisonic 400 Super Extra Bass Bluetooth Headset with microphone'}
          link={'#!'}
          currency={'₹'}
          price={'1499 - 1999'}
          rating={'4.5'}
          soldCount={'2463'}
          storeName={'Hisonic Store'}
          timer={3000}
        />
        {list.map(i => (
          <ProductCard
            images={[
              'https://cdn.newday.mk/uploads/2018/08/395142931-1.jpg',
              'https://www.atsshopping.com/images/products/1551089542.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEyTmpTYLSyB9xNE7LYkVWDCU6xIG2R8T4Ed_lsGe6Jb6gtGm3',
              'https://5.imimg.com/data5/VT/DA/MY-15780217/troops-tp-7040-extra-bass-headphone-500x500.jpg'
            ]}
            id={'id'}
            title={'Hisonic 400 Super Extra Bass Bluetooth Headset with microphone'}
            link={'#!'}
            currency={'₹'}
            price={'1499 - 1999'}
            oldPrice={'2500'}
            discount={'50'}
            rating={'4.5'}
            soldCount={'2463'}
            storeName={'Hisonic Store'}
            timer={3000}
          />
        ))}
      </div>

      <div className='trending-products-scroll-control slider-control control-left'>
        <i className='fas fa-chevron-left' onClick={() => handleScroll('left')}></i>
      </div>
      <div className='trending-products-scroll-control slider-control control-right'>
        <i className='fas fa-chevron-right' onClick={() => handleScroll('right')}></i>
      </div>
    </Fragment>
  );
}

export default TrendingProductsContainer;
