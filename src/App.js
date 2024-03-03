import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";
import WarehouseDetails from "./components/warehouse_detail/WarehouseDetails";
import WarehouseForm from "./components/WarehouseForm/WarehouseForm";
import DeleteModal from "./components/DeleteModal/DeleteModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/details/:wid" element={<WarehouseDetails />} />
        <Route path="/edit/:wid" element={<WarehouseForm />} />
        <Route path="/add" element={<WarehouseForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
