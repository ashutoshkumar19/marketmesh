import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import facebook_icon from '../../images/facebook.svg';
import google_icon from '../../images/google.svg';
import twitter_icon from '../../images/twitter.svg';
import linkedin_icon from '../../images/linkedin.svg';
import instagram_icon from '../../images/instagram.svg';

import { showLoginSignupModal, hideLoginSignupModal } from '../../actions/modal.action';
import { login, register } from '../../actions/auth.action';

const LoginSignupModal = ({
  showLoginSignupModal,
  hideLoginSignupModal,
  modal: { isModalVisible, showLoginTab, showSignupTab },
  login,
  register,
  isAuthenticated
}) => {
  const initialLoginState = {
    login_email: '',
    login_password: ''
  };
  const initialSignupState = {
    signup_email: '',
    signup_password: '',
    signup_password2: ''
  };

  const [loginFormData, setLoginFormData] = useState(initialLoginState);
  const [signupFormData, setSignupFormData] = useState(initialSignupState);

  const { login_email, login_password } = loginFormData;
  const { signup_email, signup_password, signup_password2 } = signupFormData;

  const clearState = () => {
    setLoginFormData({ ...initialLoginState });
    setSignupFormData({ ...initialSignupState });
  };

  const onLoginChange = e => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const onSignupChange = e => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  const onLoginSubmit = e => {
    e.preventDefault();
    login({ login_email, login_password }).then(clearState());
  };

  const onSignupSubmit = e => {
    e.preventDefault();
    if (signup_password !== signup_password2) {
      alert('Passwords do not match...!');
      setSignupFormData({ ...signupFormData, signup_password2: '' });
    } else {
      register({ signup_email, signup_password }).then(clearState());
    }
  };

  return (
    <Fragment>
      {isModalVisible && !isAuthenticated && (
        <div className='modal-container login-signup-modal-container'>
          <div className='modal login-signup-modal'>
            <i
              className='material-icons close-icon'
              onClick={() => {
                clearState();
                hideLoginSignupModal();
              }}
            >
              close
            </i>

            <div className='modal-header'>
              <p className='header'>MarketMesh</p>
            </div>

            <div className='modal-body'>
              <div className='tabs'>
                <button
                  className={`tab-btn tab-login ${showLoginTab ? 'active' : ''}`}
                  onClick={e => showLoginSignupModal('login')}
                >
                  Login
                </button>
                <button
                  className={`tab-btn tab-signup ${showSignupTab ? 'active' : ''}`}
                  onClick={e => showLoginSignupModal('signup')}
                >
                  Register
                </button>
              </div>

              <div className='content-container'>
                <div className={`content login-content ${showLoginTab ? 'active' : ''}`}>
                  <form onSubmit={e => onLoginSubmit(e)}>
                    <label for='login_email'>Email</label>
                    <input
                      type='email'
                      name='login_email'
                      placeholder='Enter your email id'
                      required
                      value={login_email}
                      onChange={e => onLoginChange(e)}
                    />

                    <label for='login_password'>Password</label>
                    <input
                      type='password'
                      name='login_password'
                      placeholder='Enter your password'
                      required
                      value={login_password}
                      onChange={e => onLoginChange(e)}
                    />
                    <button className='btn btn-primary' type='submit'>
                      Login
                    </button>
                  </form>
                  <a className='forgot-psw-link' href='#!'>
                    Forgot Password?
                  </a>
                </div>

                <div className={`content signup-content ${showSignupTab ? 'active' : ''}`}>
                  <form onSubmit={e => onSignupSubmit(e)}>
                    <label for='signup_email'>
                      Email<span>*</span>
                    </label>
                    <input
                      type='email'
                      name='signup_email'
                      placeholder='Enter your email id'
                      required
                      value={signup_email}
                      onChange={e => onSignupChange(e)}
                    />

                    <label for='signup_password'>
                      Password<span>*</span>
                    </label>
                    <input
                      type='password'
                      name='signup_password'
                      placeholder='Enter your password'
                      required
                      value={signup_password}
                      onChange={e => onSignupChange(e)}
                    />

                    <label for='signup_password2'>
                      Verify Password<span>*</span>
                    </label>
                    <input
                      type='password'
                      name='signup_password2'
                      placeholder='Enter your password again'
                      required
                      value={signup_password2}
                      onChange={e => onSignupChange(e)}
                    />
                    <button className='btn btn-primary' type='submit'>
                      signup
                    </button>
                  </form>
                  <p className='agreement-text'>
                    By creating an account, you agree to our
                    <span>
                      <a href='#!'>User Agreement</a>
                    </span>{' '}
                    and
                    <span>
                      <a href='#!'>Privacy Policy</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
              <p className='footer-text'>Social Login</p>
              <ul className='social-links'>
                <li>
                  <a href='#!' title='Facebook'>
                    <img src={facebook_icon} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!' title='Google'>
                    <img src={google_icon} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!' title='Twitter'>
                    <img src={twitter_icon} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!' title='Linkedin'>
                    <img src={linkedin_icon} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!' title='Instagram'>
                    <img src={instagram_icon} alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

LoginSignupModal.propTypes = {
  showLoginSignupModal: PropTypes.func.isRequired,
  hideLoginSignupModal: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  modal: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  modal: state.modal,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  showLoginSignupModal,
  hideLoginSignupModal,
  login,
  register
})(LoginSignupModal);
