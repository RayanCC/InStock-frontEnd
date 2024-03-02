import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseB from "./components/Warehouse/WarehouseB";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetail from "./components/warehouse_detail/WarehouseDetails";
import InventoryLayOut from "./components/InventoryLayOut/InventoryLayOut";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WarehouseDetail warehouseId="1" />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <WarehouseB />
      <InventoryLayOut />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
