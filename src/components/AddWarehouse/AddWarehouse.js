import React from "react";
import "./addwarehouse.scss";
import axios from "axios";
const WarehouseForm = () => {
  function handleSubmit(event) {
    event.preventDefault();

    const warehouseName = document.getElementById("warehouseName").value;
    const warehouseAddress = document.getElementById("warehouseAddress").value;
    const warehouseCity = document.getElementById("warehouseCity").value;
    const warehouseCountry = document.getElementById("warehouseCountry").value;
    const contactName = document.getElementById("contactName").value;
    const contactPosition = document.getElementById("contactPosition").value;
    const contactPhone = document.getElementById("contactPhone").value;
    const contactEmail = document.getElementById("contactEmail").value;

    const warehouseData = {
      warehouse_name: warehouseName,
      warehouse_address: warehouseAddress,
      city: warehouseCity,
      country: warehouseCountry,
      contac_name: contactName,
      contact_position: contactPosition,
      contact_phone: contactPhone,
      contact_email: contactEmail,
    };

    axios
      .post("http://localhost:5050/instock/warehouse", warehouseData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="content__container">
      <div>
        <h1>Add New Warehouse</h1>
      </div>
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
              <label className="contact__details--label">Contact Name</label>
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
                id="contactPosition"
              />
            </div>
            <div>
              <label className="contact__details--label">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                id="contactPhone"
                className="contact__details--input"
              />
            </div>
            <div>
              <label className="contact__details--label">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="contact__details--input"
                id="contactEmail"
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
          <button className="action__btn" onClick={handleSubmit}>
            + Add New Warehouse
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseForm;
