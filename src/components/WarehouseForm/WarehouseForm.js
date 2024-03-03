import React from "react";
import "./warehouseform.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import TitleHeading from "../TitleHeading/TitleHeading";
import Header from "../Header/Header";

const WarehouseForm = ({
  wname,
  address,
  city,
  country,
  cname,
  position,
  number,
  email,
}) => {
  const { wid } = useParams();
  const [selectedWarehouse, setSelectedWarehouse] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/instock/warehouse/${wid}`
        );
        setSelectedWarehouse(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    if (wid) {
      fetchData();
    } else {
      console.log("No Ids found");
    }
  }, [wid]);

  const setInitialValues = () => {
    document.getElementById("warehouseName").value =
      selectedWarehouse.warehouse_name;
    document.getElementById("warehouseAddress").value =
      selectedWarehouse.address;
    document.getElementById("warehouseCity").value = selectedWarehouse.city;
    document.getElementById("warehouseCountry").value =
      selectedWarehouse.country;
    document.getElementById("contactName").value =
      selectedWarehouse.contact_name;
    document.getElementById("position").value =
      selectedWarehouse.contact_position;
    document.getElementById("phoneNumber").value =
      selectedWarehouse.contact_phone;
    document.getElementById("email").value = selectedWarehouse.contact_email;
  };

  useEffect(() => {
    setInitialValues();
  }, [selectedWarehouse]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <TitleHeading activity="Edit Warehouse" />
        <div className="content__container">
          <div className="flex__container">
            <div className="warehouse__details">
              <h2 className="warehouse__details--title">Warehouse Details</h2>
              <div>
                <div>
                  <label className="warehouse__details--label">
                    Warehouse Name
                  </label>
                  <input
                    type="text"
                    placeholder="Warehouse Name"
                    className="warehouse__details--input"
                    id="warehouseName"
                  />
                </div>
                <div>
                  <label className="warehouse__details--label">
                    Warehouse Address
                  </label>
                  <input
                    type="text"
                    placeholder="Warehouse Address"
                    className="warehouse__details--input"
                    id="warehouseAddress"
                  />
                </div>
                <div>
                  <label className="warehouse__details--label">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    className="warehouse__details--input"
                    id="warehouseCity"
                  />
                </div>
                <div>
                  <label className="warehouse__details--label">Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="warehouse__details--input"
                    id="warehouseCountry"
                  />
                </div>
              </div>
            </div>
            <div className="contact__details">
              <h2 className="contact__details--title">Contact Details</h2>
              <div>
                <div>
                  <label className="contact__details--label">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Name"
                    className="contact__details--input"
                    id="contactName"
                  />
                </div>
                <div>
                  <label className="contact__details--label">Position</label>
                  <input
                    type="text"
                    placeholder="Position"
                    className="contact__details--input"
                    id="position"
                  />
                </div>
                <div>
                  <label className="contact__details--label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="contact__details--input"
                    id="phoneNumber"
                  />
                </div>
                <div>
                  <label className="contact__details--label">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="contact__details--input"
                    id="email"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="action__container">
            <div>
              <button className="cancel__btn">Cancel</button>
            </div>
            <div>
              <button className="action__btn">Save</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WarehouseForm;
