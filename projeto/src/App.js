import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import BrinquedosPageComponent from './components/ComponentBrinquedo/BrinquedosPageComponent.jsx';
import TecnologiaComponent from './components/ComponentTecnologia/TecnologiaComponent';

function App() {

    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>}></Route>
        <Route path="" element={<BrinquedosPageComponent/>}></Route>
        <Route path="/tecnologia" element={<TecnologiaComponent/>}></Route>


      </Routes>
      
  );
}
export default App;
