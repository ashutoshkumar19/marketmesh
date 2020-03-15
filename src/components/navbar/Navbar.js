import React, { Fragment } from 'react';
import NavbarTop from './NavbarTop';
import NavbarMain from './NavbarMain';
import NavbarExtended from './NavbarExtended';
import LoginSignupModal from '../modals/LoginSignupModal';

const Navbar = () => {
  return (
    <Fragment>
      <NavbarTop />
      <NavbarMain />
      <NavbarExtended />
      <LoginSignupModal />
    </Fragment>
  );
};

export default Navbar;
