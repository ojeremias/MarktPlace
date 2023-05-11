import { Route, Routes } from 'react-router-dom';
import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import BrinquedosPageComponent from './components/ComponentBrinquedo/BrinquedosPageComponent.jsx';

function App() {

    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>}></Route>
        <Route path="/brinquedos" element={<BrinquedosPageComponent/>}></Route>
      </Routes>
      
  );
}
export default App;
