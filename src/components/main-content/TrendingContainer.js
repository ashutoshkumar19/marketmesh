import React, { Fragment } from 'react';
import TrendingCard from './TrendingCard.component';

function TrendingCardContainer() {
  var content, cardWidth;

  const handleScroll = string => {
    if (!content || !cardWidth) {
      content = document.getElementById('trending-card-container');
      cardWidth = document.getElementsByClassName('card-trending')[0].offsetWidth;
    }
    if (string === 'left') {
      content.scrollLeft -= 2 * cardWidth;
    } else {
      content.scrollLeft += 2 * cardWidth;
    }
  };

  return (
    <Fragment>
      <div className='trending-card-container' id='trending-card-container'>
        <TrendingCard
          key={0}
          image={
            'https://cdn.shopify.com/s/files/1/0014/1479/1215/products/product-image-779569914_grande.jpg?v=1575510122'
          }
          link={'https://www.google.com'}
          title={'Stylish Sneakers Brand New Offer Sale'}
          currency={'₹'}
          minPrice={49999}
          maxPrice={59999}
          totalStock={5000}
          soldStock={1200}
        />
        <TrendingCard
          key={1}
          image={
            'https://durston.com/wp-content/uploads/2019/06/Heat-Resistant-Safety-Gloves-1935-min.jpg'
          }
          link={'https://www.google.com'}
          title={'Heat Resistant Safety Gloves'}
          currency={'₹'}
          minPrice={499}
          totalStock={500}
          soldStock={420}
        />
        <TrendingCard
          key={2}
          image={
            'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwba35b8d1/images/large/Hand-Sanitizer-Spray/hand_sani_all_scents_large_lifestyle.jpg?sw=2000&sh=2000&sm=fit'
          }
          link={'https://www.google.com'}
          title={'Hand Sanitizer Spray'}
          currency={'₹'}
          price={199}
          totalStock={2500}
          soldStock={1500}
        />
        <TrendingCard
          key={3}
          image={'https://4.imimg.com/data4/VB/FW/ANDROID-40342193/product-500x500.jpeg'}
          link={'https://www.google.com'}
          title={'Mobile Skins'}
          currency={'₹'}
          minPrice={699}
          totalStock={100}
          soldStock={100}
        />
        <TrendingCard
          key={4}
          image={
            'https://cdn.shopify.com/s/files/1/0014/1479/1215/products/product-image-779569914_grande.jpg?v=1575510122'
          }
          link={'https://www.google.com'}
          title={'Stylish Sneakers'}
          currency={'₹'}
          minPrice={999}
          maxPrice={1999}
          totalStock={1000}
          soldStock={800}
        />
        <TrendingCard
          key={5}
          image={
            'https://cdn.shopify.com/s/files/1/0014/1479/1215/products/product-image-779569914_grande.jpg?v=1575510122'
          }
          link={'https://www.google.com'}
          title={'Stylish Sneakers'}
          currency={'₹'}
          minPrice={999}
          maxPrice={1999}
          totalStock={5000}
          soldStock={1200}
        />
        <TrendingCard
          key={6}
          image={
            'https://cdn.shopify.com/s/files/1/0014/1479/1215/products/product-image-779569914_grande.jpg?v=1575510122'
          }
          link={'https://www.google.com'}
          title={'Stylish Sneakers'}
          currency={'₹'}
          minPrice={999}
          maxPrice={1999}
          totalStock={5000}
          soldStock={1200}
        />
        <TrendingCard
          key={7}
          image={
            'https://cdn.shopify.com/s/files/1/0014/1479/1215/products/product-image-779569914_grande.jpg?v=1575510122'
          }
          link={'https://www.google.com'}
          title={'Stylish Sneakers'}
          currency={'₹'}
          minPrice={999}
          maxPrice={1999}
          totalStock={5000}
          soldStock={1200}
        />
      </div>

      <div className='trending-scroll-control control-left'>
        <i className='fas fa-chevron-left' onClick={() => handleScroll('left')}></i>
      </div>
      <div className='trending-scroll-control control-right'>
        <i className='fas fa-chevron-right' onClick={() => handleScroll('right')}></i>
      </div>
    </Fragment>
  );
}

export default TrendingCardContainer;
