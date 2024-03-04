import React from "react";
import InventoreyLayOut from "../../components/InventoryLayOut/InventoryLayOut";
import Header from "../../components/Header/Header";
import SearchHeading from "../../components/SearchHeading/SearchHeading";
import Footer from "../../components/Footer/Footer";

const Inventory = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SearchHeading activity="Inventory" />
        <InventoreyLayOut />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Inventory;
