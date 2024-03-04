import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./inventoryLayOutT.scss";

const IventoryLayoutT = () => {
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
    <table>
      <tr className="inventoryHeader">
        <th>
          INVENTORY ITEM
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="headerIcon"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </th>
        <th>
          CATEGORY
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="headerIcon"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </th>
        <th>
          STATUS
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="headerIcon"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </th>
        <th>
          QTY
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="headerIcon"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </th>
        <th>
          WAREHOUSE
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="headerIcon"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </th>
        <th>ACTIONS</th>
      </tr>
      {inventory.map((item) => (
        <tr key={item.id}
        className="inventorySection">
          <td className="itemName">
            {item.item_name}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="itemNameIcon"
            >
              <path
                d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                fill="#2E66E6"
              />
            </svg>
          </td>
          <td>{item.category}</td>
          <td className={getStatusColor(item.status)}>{item.status}</td>
          <td>{item.quantity}</td>
          <td>{warehouses[item.warehouse_id]}</td>
          <td className="inventorybutton">
            <div className="inventorybutton__delete">
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
          </td>
        </tr>
      ))}
    </table>
  );
};

export default IventoryLayoutT;
