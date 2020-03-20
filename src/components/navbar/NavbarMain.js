import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchForm from './SearchForm.component';
import { showLoginSignupModal } from '../../actions/modal.action';
import { logout } from '../../actions/auth.action';

const NavbarMain = ({ showLoginSignupModal, logout, auth: { isAuthenticated, user } }) => {
  const initialState = {
    cartItems: '2'
  };
  const [state, setstate] = useState(initialState);

  const { cartItems } = state;

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
            <a className='nav-item-link' href='#!'>
              <i className='fa fa-user symbol'></i> Account
            </a>
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

          <li className={cartItems > 0 ? 'nav-item highlight' : 'nav-item'}>
            <a className='nav-item-link' href='#!'>
              <i className='fas fa-cart-plus symbol'></i> Cart
            </a>
            {cartItems > 0 && (
              <div className='badge'>
                <p>{cartItems}</p>
              </div>
            )}
          </li>

          <li className='nav-item nav-item-cur'>
            <a className='nav-item-link' href='#!'>
              <i className='fas fa-rupee-sign symbol'></i> INR{' '}
              <i className='fas fa-caret-down caret'></i>
            </a>
            <ul className='nav-dropdown-item-container'>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  <i className='fas fa-rupee-sign symbol'></i> INR
                  <i className='fas fa-caret-down caret'></i>
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  <i className='fas fa-pound-sign symbol'></i> GBP
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  <i className='fas fa-dollar-sign symbol'></i> USD
                </a>
              </li>
            </ul>
          </li>

          <li className='nav-item nav-item-lang'>
            <a className='nav-item-link' href='#!'>
              <i className='fas fa-globe symbol'></i> English{' '}
              <i className='fas fa-caret-down caret'></i>
            </a>
            <ul className='nav-dropdown-item-container'>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  <i className='fas fa-globe symbol'></i> English
                  <i className='fas fa-caret-down caret'></i>
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  हिन्दी
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  বাংলা{' '}
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  தமிழ்
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  తెలుగు
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  ಕನ್ನಡ
                </a>
              </li>
              <li className='nav-dropdown-item'>
                <a className='nav-dropdown-item-link' href='#!'>
                  മലയാളം
                </a>
              </li>
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { showLoginSignupModal, logout })(NavbarMain);
