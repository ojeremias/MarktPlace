import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MarketPlace from '../MarketPlace';
import TecnologiaComponent from './TecnologiaComponent';

function PageComponent() {
  return (
    <Routes>
      <Route path="/" element={<MarketPlace />} />
      <Route path="tecnologia" element={<TecnologiaComponent />} />
      <Link to="tecnologia">Clique</Link>
    </Routes>
  );
}

export default PageComponent;