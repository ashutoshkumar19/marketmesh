import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import "./styles/App.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/main-content/LandingPage";
import NotFound from "./components/layouts/NotFound.component";
import ProductsPage from "./components/main-content/ProductsPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
