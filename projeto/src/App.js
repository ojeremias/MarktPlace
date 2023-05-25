import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import { Route, Routes } from 'react-router-dom';
import BrinquedosPageComponent from './components/ComponentBrinquedo/BrinquedosPageComponent';
import TecnologiaComponent from './components/ComponentTecnologia/TecnologiaComponent';
import BrinquedoDetalhesPage from './components/ComponentBrinquedo/BrinquedoDetalhesPage';

function App() {

    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>} />
        <Route path="/brinquedos" element={<BrinquedosPageComponent/>} />
        <Route path="/tecnologia" element={<TecnologiaComponent/>} />
        <Route path="/brinquedos/:id" element={<BrinquedoDetalhesPage/>} />
      </Routes>
  );
}

export default App;

