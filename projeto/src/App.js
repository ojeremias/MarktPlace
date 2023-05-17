import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from "./components/routes/Navbar";
import Marketplace from "./components/MarketPlace/MarketPlace";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Marketplace />
    </div>
  );
}

export default App;

