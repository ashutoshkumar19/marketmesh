import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationBox from './NotificationBox.component';

import SearchForm from './SearchForm.component';
import { showLoginSignupModal } from '../../actions/modal.action';
import { logout } from '../../actions/auth.action';
import { getAllNotifications } from '../../actions/notification.action';
import { getCartItems } from '../../actions/cart.action';

const NavbarMain = ({
  showLoginSignupModal,
  logout,
  auth: { isAuthenticated, user },
  getAllNotifications,
  notification: { notification, loading },
  getCartItems,
  cart: { cart }
}) => {
  useEffect(() => {
    getAllNotifications();
  }, [getAllNotifications]);

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <ul className='nav-item-container nav-left'>
          <li className='nav-item brand'>
            <a className='nav-item-link' href='#!'>
              MarketMesh
            </a>
          </li>
        </ul>

        <ul className='nav-item-container nav-center'>
          <div className='nav-item'>
            <SearchForm />
          </div>
        </ul>

        <ul className='nav-item-container nav-right'>
          <li className='nav-item nav-item-account'>
            <div className='nav-item-link'>
              <i className='fa fa-user symbol'></i>
              <span className='text'>Account</span>
            </div>
            <div className='triangle'></div>
            <div className='nav-dropdown-item-container account-nav-box-container'>
              {isAuthenticated ? (
                <div className='top-container loggedin'>
                  <div className='avatar-container'>
                    <img
                      src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
                      alt=''
                    />
                  </div>
                  <div className='username'>Ashutosh Kumar</div>
                </div>
              ) : (
                <div className='top-container'>
                  <div className='btn-container'>
                    <button
                      className='button login-btn'
                      onClick={e => showLoginSignupModal('login')}
                    >
                      Login
                    </button>
                    <button
                      className='button register-btn'
                      onClick={e => showLoginSignupModal('signup')}
                    >
                      Register
                    </button>
                  </div>
                </div>
              )}

              <ul className='account-nav-list text-left'>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-clipboard-list'></i>My Orders
                  </a>
                </li>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-share'></i>My Returns
                  </a>
                </li>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-heart'></i>Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-donate'></i>My Coupons
                  </a>
                </li>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-comments'></i>Message Center
                  </a>
                </li>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-comment-dots'></i>Reviews &amp; Feedbacks
                  </a>
                </li>
                <li>
                  <a
                    href='#!'
                    onClick={!isAuthenticated ? e => showLoginSignupModal('login') : null}
                  >
                    <i className='fas fa-bookmark'></i>My Favourite Stores
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <i className='fas fa-phone'></i>Help &amp; Support
                  </a>
                </li>
                {isAuthenticated && (
                  <li>
                    <a href='#!' onClick={e => logout(e)}>
                      <i className='fas fa-sign-out-alt'></i>Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </li>

          <li className={`nav-item ${cart.length > 0 && 'highlight'} `}>
            <div className='nav-item-link'>
              <i className='fas fa-cart-plus symbol'></i>
              <span className='text'>Cart</span>
            </div>
            {cart.length > 0 && (
              <div className='badge'>
                <p>{cart.length}</p>
              </div>
            )}
          </li>

          <li
            className={`nav-item symbol-only nav-item-notifications ${notification.length > 0 &&
              'highlight'} `}
          >
            <div className='nav-item-link'>
              <i className='fas fa-bell symbol'></i>
            </div>
            <NotificationBox initialNotificationState={notification} />
          </li>

          <li className='nav-item nav-item-cur'>
            <div className='nav-item-link'>
              <i className='fas fa-rupee-sign symbol'></i>
              <span className='text'>INR </span>
              <i className='fas fa-caret-down caret'></i>
            </div>
            <ul className='nav-dropdown-item-container'>
              <li className='nav-dropdown-item nav-dropdown-item-link'>
                <i className='fas fa-rupee-sign symbol'></i>
                <span className='text'>INR</span>
                <i className='fas fa-caret-down caret'></i>
              </li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>
                <i className='fas fa-pound-sign symbol'></i>
                <span className='text'>GBP</span>
              </li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>
                <i className='fas fa-dollar-sign symbol'></i>
                <span className='text'>USD</span>
              </li>
            </ul>
          </li>

          <li className='nav-item nav-item-lang'>
            <div className='nav-item-link'>
              <i className='fas fa-globe symbol'></i>
              <span className='text'>English </span>
              <i className='fas fa-caret-down caret'></i>
            </div>
            <ul className='nav-dropdown-item-container'>
              <li className='nav-dropdown-item nav-dropdown-item-link'>
                <i className='fas fa-globe symbol'></i>
                <span className='text'>English</span>
                <i className='fas fa-caret-down caret'></i>
              </li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>हिन्दी</li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>বাংলা </li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>தமிழ்</li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>తెలుగు</li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>ಕನ್ನಡ</li>
              <li className='nav-dropdown-item nav-dropdown-item-link'>മലയാളം</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

NavbarMain.propTypes = {
  showLoginSignupModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getAllNotifications: PropTypes.func.isRequired,
  notification: PropTypes.object.isRequired,
  getCartItems: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  notification: state.notification,
  cart: state.cart
});

export default connect(mapStateToProps, {
  showLoginSignupModal,
  getAllNotifications,
  getCartItems,
  logout
})(NavbarMain);
