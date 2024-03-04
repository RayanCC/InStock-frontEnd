import React from "react";
import WarehouseT from "../../components/Warehouse/WarehouseT";
import SearchHeading from "../../components/SearchHeading/SearchHeading";
import Header from "../../components/Header/Header";

const Warehouses = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <WarehouseT />
      </main>
    </>
  );
};

export default Warehouses;
