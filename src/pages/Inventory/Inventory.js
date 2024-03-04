import React from "react";
import InventoreyLayOut from "../../components/InventoryLayOut/InventoryLayOut";
import Header from "../../components/Header/Header";

const Inventory = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <InventoreyLayOut />
      </main>
    </>
  );
};

export default Inventory;
