import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseB from "./components/Warehouse/WarehouseB";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetail from "./components/warehouse_detail/WarehouseDetails";
import "./styles/global.scss";
import { InventoryDetails } from "./components/InventoryDetails/InventoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WarehouseDetail warehouseId="1" />
      <InventoryDetails inventoryId="1" />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <WarehouseB />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
