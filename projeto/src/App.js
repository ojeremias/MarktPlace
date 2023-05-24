import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import FinalizarCompra from './components/ComponentFinalizarCompra/FinalizarCompra';
import VisualizarProduto from './components/ComponentVisualizar/VisualizarProduto'
import { BrowserRouter, Switch, Routes ,Route, Link } from "react-router-dom";

function App() {
    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>}></Route>
        <Route path="finalizarcompra" element={<FinalizarCompra/>}></Route>
        <Route path="visualizarproduto" element={<VisualizarProduto/>}></Route>
      </Routes>

  );
}
export default App;
