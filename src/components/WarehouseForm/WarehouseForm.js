import React from "react";
import "./warehouseform.scss";
const EditWarehouse = ({ activity }) => {
  return (
    <div className="content__container">
      <div>
        <h1>{activity}</h1>
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
              />
            </div>
            <div>
              <label className="warehouse__details--label">City</label>
              <input
                type="text"
                placeholder="City"
                className="warehouse__details--input"
              />
            </div>
            <div>
              <label className="warehouse__details--label">Country</label>
              <input
                type="text"
                placeholder="Country"
                className="warehouse__details--input"
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
              />
            </div>
            <div>
              <label className="contact__details--label">Position</label>
              <input
                type="text"
                placeholder="Position"
                className="contact__details--input"
              />
            </div>
            <div>
              <label className="contact__details--label">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="contact__details--input"
              />
            </div>
            <div>
              <label className="contact__details--label">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="contact__details--input"
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
          <button className="action__btn">{activity}</button>
        </div>
      </div>
    </div>
  );
};

export default EditWarehouse;
