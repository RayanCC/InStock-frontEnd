import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Header from "./components/Header/Header.js";
import Footer from "./components/footer/Footer.js";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
