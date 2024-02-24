import React from "react";

const Warehouse = () => {
  return (
    <div className="warehouse__container">
      <h1>Warehouses</h1>
      <div>
        <input type="text" placeholder="Search..." />
        <button>+ Add New Warehouse</button>
      </div>
    </div>
  );
};

export default Warehouse;
