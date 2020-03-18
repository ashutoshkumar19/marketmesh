import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import './styles/App.scss';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LandingPage from './components/main-content/LandingPage';
import NotFound from './components/layouts/NotFound.component';
import ProductsPage from './components/main-content/ProductsPage';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className='main-content'>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/products' component={ProductsPage} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
