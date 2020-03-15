import React, { useEffect } from 'react';
import $ from 'jquery';

function ProductCard(props) {
  useEffect(() => {
    let timer;
    $('.slideshow-container').hover(
      function() {
        var element = $(this);

        var dots_container = $(this)
          .parents('.card-middle')
          .siblings('.card-top')
          .find('.dots-container');

        dots_container.css({ opacity: '1' });

        timer = setInterval(function() {
          var current = element.find('.active');
          var current_dot = dots_container.find('.active');
          current.removeClass('active');
          current_dot.removeClass('active');

          if (current.prev().length > 0) {
            current.prev().addClass('active');
            current_dot.prev().addClass('active');
          } else {
            element.find(':last-child').addClass('active');
            dots_container.find(':last-child').addClass('active');
          }
        }, 2500);
      },
      function() {
        clearInterval(timer);

        var element = $(this);

        var dots_container = $(this)
          .parents('.card-middle')
          .siblings('.card-top')
          .find('.dots-container');

        dots_container.css({ opacity: '0' });

        element.children().removeClass('active');
        element.find(':first-child').addClass('active');
        dots_container.children().removeClass('active');
        dots_container.find(':first-child').addClass('active');
      }
    );
  }, []);

  return (
    <div className='card-product'>
      <div className='card-top'>
        <div className='dots-container'>
          {props.images.map((image, index) =>
            index === 0 ? (
              <span className='dot active' key={index}></span>
            ) : (
              <span className='dot' key={index}></span>
            )
          )}
        </div>
        <div className='wishlist-icon-container' title='Add to wishlist'>
          <span className='fas fa-heart wishlist-icon'></span>
        </div>
      </div>
      <div className='card-middle'>
        <a href='#!' target='_blank'>
          <div className='slideshow-container'>
            {props.images.map((image, index) =>
              index === 0 ? (
                <div className='slide active' key={index}>
                  <img src={image} alt='' />
                </div>
              ) : (
                <div className='slide' key={index}>
                  <img src={image} alt='' />
                </div>
              )
            )}
          </div>
        </a>
      </div>

      <div className='card-bottom'>
        <div className='item-name' title={props.title}>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            {props.title}
          </a>
        </div>

        <div className='price-container'>
          <div className='price'>
            <span className='cur'>{props.currency}</span>
            <span className='value'>{props.price}</span>
          </div>

          {props.oldPrice && (
            <div className='price-slash'>
              <span className='cur'>{props.currency}</span>
              <span className='value'>{props.oldPrice}</span>
            </div>
          )}

          {props.discount && (
            <span className='discount'>
              <span className='value'>{props.discount}</span>
              <span>% Off</span>
            </span>
          )}
        </div>

        <div className='item-statistics'>
          <div className='star-ratings'>
            <span className='star fas fa-star'></span>
            <span className='rating'>{props.rating}</span>
          </div>

          {props.soldCount && (
            <div className='sold-count'>
              <span className='value'>{props.soldCount}</span>
              Sold
            </div>
          )}
        </div>

        {props.storeName && (
          <div className='store-name'>
            <a href='#!' target='_blank'>
              {props.storeName}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
