import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
