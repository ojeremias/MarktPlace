import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import { Routes, Route } from 'react-router-dom'; 
import InformaticaPagesComponent from './components/ComponentInformatica/informaticaPagesComponent';
import ErroPages from './components/ComponentInformatica/ErroPages';
import DetalheProdutoInformatica from './components/ComponentInformatica/DetalheProdutoInformatica';

function App() {

    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>}></Route>
        <Route path="informatica" element={<InformaticaPagesComponent/>}></Route>
        <Route path="/informatica/:id" element={<DetalheProdutoInformatica />} />
        <Route path="*" element={<ErroPages />} />
      </Routes>
  );
}
export default App;
