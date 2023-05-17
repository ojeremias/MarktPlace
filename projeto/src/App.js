import './App.css';
import MarketPlace from './components/MarketPlace/MarketPlace';
import { Routes, Route } from 'react-router-dom'; 
import InformaticaPagesComponent from './components/ComponentInformatica/InformaticaPagesComponent';


function App() {

    return (
      <Routes>
        <Route path="/" element={<MarketPlace/>}></Route>
        <Route path="informatica" element={<InformaticaPagesComponent/>}></Route>
      </Routes>
  );
}
export default App;
