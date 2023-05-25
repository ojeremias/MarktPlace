import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import { Link, Route, Routes } from 'react-router-dom';
import BrinquedosPageComponent from './components/ComponentBrinquedo/BrinquedosPageComponent';
import TecnologiaComponent from './components/ComponentTecnologia/TecnologiaComponent';

function App() {

    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>} />
        <Route path="/brinquedos" element={<BrinquedosPageComponent/>} />
        <Route path="/tecnologia" element={<TecnologiaComponent/>} />
      </Routes>
  );
}

export default App;

