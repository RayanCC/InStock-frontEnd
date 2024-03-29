import React from "react";
import { useEffect, useState } from "react";
import "./warehouseT.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchHeading from "../SearchHeading/SearchHeading";

const WarehouseT = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/instock/warehouse")
      .then((response) => {
        setWarehouses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);

  return (
    <>
      <SearchHeading activity="Warehouse" />
      <div className="container">
        <div className="containerHeader">
          <h4 className="containerHeader__warehouse">
            WAREHOUSE
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                fill="#5C667E"
              />
            </svg>
          </h4>
          <h4 className="containerHeader__address">
            ADDRESS
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                fill="#5C667E"
              />
            </svg>
          </h4>
          <h4 className="containerHeader__contactName">
            CONTACT NAME
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                fill="#5C667E"
              />
            </svg>
          </h4>
          <h4 className="containerHeader__contactInfo">
            CONTACT INFORMATION
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                fill="#5C667E"
              />
            </svg>
          </h4>
          <h4>ACTIONS</h4>
        </div>

        <ul className="warehouseContainerT">
          {warehouses.map((warehouse) => (
            <li className="warehouseTabletContainer" key={warehouse.id}>
              <div className="warehouseNameContainerT">
                <Link to={`/details/${warehouse.id}`}>
                  <h3 className="warehouseNameT">
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
                </Link>
              </div>

              <div className="warehouseAddressT">
                <p>
                  {warehouse.address}, {warehouse.city}, {warehouse.country}
                </p>
              </div>

              <div className="contactNameT">
                <p>{warehouse.contact_name}</p>
              </div>

              <div className="contactPhoneEmailT">
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>

              <div className="warehouseIcon">
                <div className="warehouseIcon__deleteT">
                  <Link to={`/delete/${warehouse.id}`}>
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
                  </Link>
                </div>

                <div>
                  <Link to={`/edit/${warehouse.id}`}>
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
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WarehouseT;
