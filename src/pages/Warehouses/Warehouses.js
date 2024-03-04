import React from "react";
import WarehouseB from "../../components/Warehouse/WarehouseB";
import SearchHeading from "../../components/SearchHeading/SearchHeading";
import Header from "../../components/Header/Header";

const Warehouses = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <WarehouseB />
      </main>
    </>
  );
};

export default Warehouses;
