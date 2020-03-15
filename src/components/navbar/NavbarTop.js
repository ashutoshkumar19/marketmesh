import React from 'react';

function NavbarTop() {
  return (
    <div className='navbar-top'>
      <div className='navbar-top-container'>
        <ul>
          <li>
            <a href='#!'>Sell With Us</a>
          </li>
          <span className='separator'>|</span>
          <li>
            <a href='#!'>Help</a>
          </li>
          <span className='separator'>|</span>
          <li>
            <a href='#!'>Contact</a>
          </li>
          <span className='separator'>|</span>
          <li>
            <i className='fas fa-mobile-alt'></i> Download App
            <ul className='dropdown-item-container'>
              <li className='dropdown-item'>
                <a className='dropdown-item-link' href='#!'>
                  <img
                    src='https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_960_720.png'
                    alt=''
                  />
                  <p>Android</p>
                </a>
              </li>
              <li className='dropdown-item'>
                <a className='dropdown-item-link' href='#!'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
                    alt=''
                  />
                  <p>iOS</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarTop;
