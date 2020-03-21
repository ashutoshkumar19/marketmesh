import React from 'react';

function FlashDealsCard(props) {
  const offerText = props.price
    ? `${props.currency} ${props.price}`
    : props.maxPrice
    ? `${props.currency} ${props.minPrice} - ${props.currency} ${props.maxPrice}`
    : `From ${props.currency} ${props.minPrice}`;

  let itemSold,
    itemRemainingText,
    isOutOfStock = false;

  if (props.totalStock > 0 && props.soldStock > 0 && props.soldStock < props.totalStock) {
    itemSold = (props.soldStock * 100) / props.totalStock;
    itemRemainingText = `${itemSold}% Sold, ${props.totalStock - props.soldStock} Left`;
  } else if (props.soldStock >= props.totalStock) {
    itemSold = 100;
    itemRemainingText = 'Out of Stock';
    isOutOfStock = true;
  }

  return (
    <div className='card-flash-deals'>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <div className='card-header'></div>
        <div className='card-body '>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='card-footer'>
          <p className='title' title={props.title}>
            {props.title}
          </p>
          <p className='offer' title={offerText}>
            {offerText}
          </p>
          {itemSold && (
            <div className='item-remaining-bar'>
              <div className='item-remaining' style={{ width: itemSold + '%' }}></div>
            </div>
          )}

          <p
            className='item-remaining-text'
            title={itemRemainingText}
            style={isOutOfStock ? { color: 'red', fontSize: '14px' } : { color: 'unset' }}
          >
            {itemRemainingText}
          </p>
        </div>
      </a>
    </div>
  );
}

export default FlashDealsCard;
