import React, { Fragment, useEffect } from 'react';
import FlashDealsCard from './FlashDealsCard.component';

function FlashDealsContainer() {
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

  return (
    <Fragment>
      <div className='slider-container-heading'>
        <span class='material-icons'>offline_bolt</span>
        <p>Flash Deals</p>
      </div>

      <div className='flash-deals-container slider-container' id={`slider-container-${element_id}`}>
        <FlashDealsCard
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
        <FlashDealsCard
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
        <FlashDealsCard
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
        <FlashDealsCard
          key={3}
          image={'https://4.imimg.com/data4/VB/FW/ANDROID-40342193/product-500x500.jpeg'}
          link={'https://www.google.com'}
          title={'Mobile Skins'}
          currency={'₹'}
          minPrice={699}
          totalStock={100}
          soldStock={100}
        />
        <FlashDealsCard
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
        <FlashDealsCard
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
        <FlashDealsCard
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
        <FlashDealsCard
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

      <div className={`slider-control control-left slider-control-${element_id}`}>
        <i className='fas fa-chevron-left' onClick={() => handleScroll('left')}></i>
      </div>
      <div className={`slider-control control-right slider-control-${element_id}`}>
        <i className='fas fa-chevron-right' onClick={() => handleScroll('right')}></i>
      </div>
    </Fragment>
  );
}

export default FlashDealsContainer;
