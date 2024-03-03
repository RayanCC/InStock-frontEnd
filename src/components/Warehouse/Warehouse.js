import React, { useEffect, useState } from "react";
import "./warehouse.scss";
import axios from "axios";

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/instock/warehouse")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);

  return (
    <div>
      <ul className="warehouseContainer">
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <div className="warehouseContainer_top">
              <div className="warehouseNameContainer">
                <h4>WAREHOUSE</h4>
                <h3 className="warehouseName">
                  {warehouse.warehouse_name}
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
                </h3>
              </div>
              <div>
                <h4>CONTACT NAME</h4>
                <p>{warehouse.contact_name}</p>
              </div>
            </div>

            <div className="warehouseContainer_mid">
              <div className="warehouseAddress">
                <h4>ADDRESS</h4>
                <p>
                  {warehouse.address}, {warehouse.city}, {warehouse.country}
                </p>
              </div>
              <div>
                <h4>CONTACT INFORMATION</h4>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
            </div>

            <div className="warehouseIcon">
              <div className="warehouseIcon__delete">
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

export default Warehouse;
