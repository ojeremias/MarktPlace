import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import FinalizarCompra from './components/ComponentFinalizarCompra/FinalizarCompra';
import { BrowserRouter, Switch, Routes ,Route, Link } from "react-router-dom";

function App() {
    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>}></Route>
        <Route path="finalizarcompra" element={<FinalizarCompra/>}></Route>
      </Routes>

  );
}
export default App;
