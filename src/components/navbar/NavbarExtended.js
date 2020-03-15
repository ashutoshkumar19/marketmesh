import React from 'react';

function NavbarExtended() {
  return (
    <div className='navbar-extended'>
      <div className='navbar-extended-container'>
        <div className='navbar-extended-item-container navbar-extended-left'></div>
        <ul className='navbar-extended-item-container navbar-extended-center'>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              Best Sellers
            </a>
          </li>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              Gift Ideas
            </a>
          </li>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              New Releases
            </a>
          </li>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              Today's Deals
            </a>
          </li>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              Hot Deals
            </a>
          </li>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              Coupons
            </a>
          </li>
          <li className='navbar-extended-item'>
            <a className='navbar-extended-item-link' href='#!'>
              Mesh Pay
            </a>
          </li>
        </ul>
        <div className='navbar-extended-item-container navbar-extended-right'></div>
      </div>
    </div>
  );
}

export default NavbarExtended;
