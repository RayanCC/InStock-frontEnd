import React from "react";
import WarehouseB from "../../components/Warehouse/WarehouseB";
import SearchHeading from "../../components/SearchHeading/SearchHeading";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Warehouses = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <WarehouseB />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Warehouses;
