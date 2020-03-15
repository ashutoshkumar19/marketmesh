import React from 'react';
import ProductCard from './ProductCard.component';

function ProductsPage() {
  const list = [];
  for (var i = 0; i < 50; i++) {
    list.push(i);
  }
  return (
    <div className='products-page-body'>
      <div className='products-page-container'>
        <div className='sidebar-filter box-container'></div>

        <div className='products-container box-container'>
          {list.map(i => (
            <ProductCard
              images={[
                'https://cdn.newday.mk/uploads/2018/08/395142931-1.jpg',
                'https://www.atsshopping.com/images/products/1551089542.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEyTmpTYLSyB9xNE7LYkVWDCU6xIG2R8T4Ed_lsGe6Jb6gtGm3'
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
