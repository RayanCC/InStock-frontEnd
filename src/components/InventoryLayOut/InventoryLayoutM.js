import axios from "axios";
import React, { useEffect, useState } from "react";
import "./inventoryLayoutM.scss";

const InventoryLayoutM = () => {
  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState({});

  useEffect(() => {
    // Fetch inventory data
    axios
      .get("http://localhost:5050/instock/inventory")
      .then((response) => {
        setInventory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory", error);
      });

    // Fetch warehouse data
    axios
      .get("http://localhost:5050/instock/warehouse")
      .then((response) => {
        // Create a map of warehouse IDs to warehouse names
        const warehouseMap = {};
        response.data.forEach((warehouse) => {
          warehouseMap[warehouse.id] = warehouse.warehouse_name;
        });
        setWarehouses(warehouseMap);
      })
      .catch((error) => {
        console.error("Error fetching warehouses", error);
      });
  }, []);

  const getStatusColor = (status) => {
    return status === 'In Stock' ? 'instockColor' : 'outofstockColor';
  };


  return (
    <div>
      <ul className="inventoryContainer">
        {inventory.map((item) => (
          <li key={item.id}>
            <div className="inventoryTop">
              <div className="inventoryItem">
                <h4>INVENTORY ITEM</h4>
                <p className="inventoryItem__name">
                  {item.item_name}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                      fill="#2E66E6"
                    />
                  </svg>
                </p>
              </div>

              <div>
              <h4>Status</h4>
              <p className={getStatusColor(item.status)}>{item.status}</p>
              </div>
            </div>

            <div className="inventoryMid">
              <div className="inventoryMid__category">
                <h4>CATEGORY</h4>
                <p>{item.category}</p>
              </div>

              <div>
                <h4>QTY</h4>
                <p>{item.quantity}</p>
              </div>
            </div>

            <div className="inventoryBottom">
              <div className="filler"></div>
              <div className="inventoryLocation">
                <h4>WAREHOUSE</h4>
                <p>{warehouses[item.warehouse_id]}</p>
              </div>
            </div>

            <div className="inventoryIcon">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                    fill="#C94515"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                    fill="#2E66E6"
                  />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryLayoutM;
