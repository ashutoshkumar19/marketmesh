import React from 'react';
import { Link } from 'react-router-dom';

import BrandLogo from '../../images/logo_white.jpg';
import AppleStore from '../../images/app-store.svg';
import GooglePlay from '../../images/google-play.svg';

import TrustBadges from '../../images/trust-badges.png';
import VisaIcon from '../../images/visa.png';
import MastercardIcon from '../../images/mastercard.png';
import MaestroIcon from '../../images/maestro.png';
import RupayIcon from '../../images/rupay.png';
import PaypalIcon from '../../images/paypal.png';
import DiscoverIcon from '../../images/discover.png';
import NetbankingIcon from '../../images/netbanking.png';
import CODIcon from '../../images/cod.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='row row-1'>
          <div className='r1-c1'>
            <div className='brand-logo-container'>
              <Link to='/'>
                <img src={BrandLogo} alt='MarketMESH' className='brand-logo' />
              </Link>
            </div>
            <div className='address'>
              <p className='heading'>ADDRESS</p>
              <p className='item'>Times Tower M.G. Road, Gurugram, Haryana, India</p>
              <p className='item'>Pincode - 122002</p>
            </div>
            <div className='phone'>
              <p className='heading'>PHONE</p>
              <p className='item'>1800-204-0202</p>
            </div>
            <div className='email'>
              <p className='heading'>EMAIL</p>
              <p className='item'>
                <a href='#!' target='_blank'>
                  support@example.com
                </a>
              </p>
            </div>
          </div>

          <div className='r1-c2'>
            <ul>
              <p className='heading'>About</p>
              <li className='item'>
                <a href='#!' target='_blank'>
                  About Us
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Contact Us
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Careers
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Stories
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Blog
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Press Release
                </a>
              </li>
            </ul>
          </div>

          <div className='r1-c3'>
            <ul>
              <p className='heading'>Help</p>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Payments
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Shipping
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Cancellation &amp; Returns
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  FAQ
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Buyer Protection
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Report IPR infringement
                </a>
              </li>
            </ul>
          </div>

          <div className='r1-c4'>
            <ul>
              <p className='heading'>Collaborate</p>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Sell on Marketmesh
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Affiliate Program
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Advertise
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          <div className='r1-c5'>
            <ul>
              <p className='heading'>Policy</p>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Return Policy
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Terms Of Service
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Privacy
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className='r1-c6'>
            <ul>
              <p className='heading'>Apps</p>
              <li className='item'>
                <a href='#!' target='_blank'>
                  <img src={AppleStore} alt='App Store' />
                </a>
              </li>
              <li className='item'>
                <a href='#!' target='_blank'>
                  <img src={GooglePlay} alt='Google Play' />
                </a>
              </li>
            </ul>
            <div className='social'>
              <p className='heading social-heading'>Social</p>
              <ul className='social-btn-container'>
                <li className='item'>
                  <a href='#!' target='_blank' title='Facebook'>
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li className='item'>
                  <a href='#!' target='_blank' title='Youtube'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li className='item'>
                  <a href='#!' target='_blank' title='Twitter'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li className='item'>
                  <a href='#!' target='_blank' title='Instagram'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className='row row-2'>
          <div className='r2-c1'>
            <p className='company-name'>©2020-2025 Marketmesh.com. All Rights Reserved</p>
          </div>

          <div className='r2-c2'>
            <img src={TrustBadges} alt='Trust Badges' className='trust-badges' />
          </div>

          <div className='r2-c3'>
            <div className='payment-provider' title='COD'>
              <img src={CODIcon} alt='COD' />
            </div>
            <div className='payment-provider' title='NetBanking'>
              <img src={NetbankingIcon} alt='NetBanking' />
            </div>
            <div className='payment-provider' title='Discover'>
              <img src={DiscoverIcon} alt='Discover' />
            </div>
            <div className='payment-provider' title='PayPal'>
              <img src={PaypalIcon} alt='Paypal' />
            </div>
            <div className='payment-provider' title='RuPay'>
              <img src={RupayIcon} alt='RuPay' />
            </div>
            <div className='payment-provider' title='Maestro'>
              <img src={MaestroIcon} alt='Maestro' />
            </div>
            <div className='payment-provider' title='MasterCard'>
              <img src={MastercardIcon} alt='MasterCard' />
            </div>
            <div className='payment-provider' title='Visa'>
              <img src={VisaIcon} alt='Visa' />
            </div>
            {/* <img
              src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_2dd397.svg'
              alt=''
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
