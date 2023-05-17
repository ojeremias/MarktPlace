import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorPage from "./components/routes/ErrorPage";
import Category from "./components/routes/Category";
import MarketPlace from './components/MarketPlace/MarketPlace';
import BrinquedosPageComponent from './components/ComponentBrinquedo/BrinquedosPageComponent';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/brinquedos" element={<BrinquedosPageComponent />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
