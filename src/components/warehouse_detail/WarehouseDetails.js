import "./warehouseDetails.scss";
import arrowBackIcon from "../../assets/icon/arrow_back-24px.svg";
import editIcon from "../../assets/icon/edit-24px.svg";
import deleteIcon from "../../assets/icon/delete_outline-24px.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import WarehouseInventory from "../WarehouseInventory/WarehouseInventory";
import Inventory from "../../pages/Inventory/Inventory";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const WarehouseDetails = () => {
  //const params=useParams();
  //const =params.warehouseId ? params.warehouseId : warehouseId;

  const { wid } = useParams();
  console.log(wid);

  const [selectedWarehouse, setSelectedWarehouse] = useState([]);
  const url = `http://localhost:5050/instock/warehouse/${wid}`;
  useEffect(() => {
    if (wid) {
      axios
        .get(url)
        .then((res) => {
          setSelectedWarehouse(res.data);
          console.log(res.data);
          console.log(warehouse);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("no Ids found");
    }
  }, [wid]);
  if (!selectedWarehouse || selectedWarehouse.length === 0) {
    return "";
  }
  const warehouse = selectedWarehouse[0];
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="detailsContainer">
          <section className="detailsContainer__headSection">
            <article className="detailsContainer__headSection-warehouseNameBox">
              <Link to="/">
                <img
                  className="detailsContainer__headSection-warehouseNameBox--arrow"
                  src={arrowBackIcon}
                  alt="arrow-back-icon"
                />
              </Link>
              <h1 className="detailsContainer__headSection-warehouseNameBox--name">
                {warehouse.warehouse_name}
              </h1>
              <div className="detailsContainer__headSection-warehouseNameBox-editbox">
                <Link to={`/edit/${wid}`}>
                  <img
                    className="detailsContainer__headSection-warehouseNameBox--edit"
                    src={editIcon}
                    alt="edit-icon"
                  />
                </Link>
              </div>
            </article>
            <section className="detailsContainer__headSection-warehouseDetails">
              <article className="detailsContainer__headSection-warehouseDetails-addressInfo">
                <h5 className="detailsContainer__headSection-warehouseDetails-info-lbl">
                  WAREHOUSE ADDRESS
                </h5>
                <span className="detailsContainer__headSection-warehouseDetails-addressInfo--address">
                  {warehouse.address},{" "}
                </span>
                <span className="detailsContainer__headSection-warehouseDetails-addressInfo--city">
                  {warehouse.city},{" "}
                </span>
                <span className="detailsContainer__headSection-warehouseDetails-addressInfo--country">
                  {warehouse.country}
                </span>
              </article>
              <article className="detailsContainer__headSection-warehouseDetails-contactInfoBox">
                <article className="detailsContainer__headSection-warehouseDetails-contactInfoBox-contactInfo">
                  <h5 className="detailsContainer__headSection-warehouseDetails-info-lbl">
                    CONTACT NAME
                  </h5>
                  <p className="detailsContainer__headSection-warehouseDetails-contactInfoBox-contactNameInfo--contactName">
                    {warehouse.contact_name}
                  </p>
                  <p className="detailsContainer__headSection-warehouseDetails-ContactInfoBox--city">
                    {warehouse.contact_position}
                  </p>
                </article>
                <article className="detailsContainer__headSection-warehouseDetails-contactInfoBox-contactInfo">
                  <h5 className="detailsContainer__headSection-warehouseDetails-info-lbl">
                    CONTACT INFORMATION
                  </h5>
                  <p className="detailsContainer__headSection-warehouseDetails-contactInfoBox--contact">
                    {warehouse.contact_phone}
                  </p>
                  <p className="detailsContainer__headSection-warehouseDetails-contactInfoBox--contact">
                    {warehouse.contact_email}
                  </p>
                </article>
              </article>
            </section>
          </section>
          <section className="detailsContainer__main-headingSection">
            <h5 className="detailsContainer__main-headingSection--heading">
              INVENTORY ITEMS
            </h5>
            <h5 className="detailsContainer__main-headingSection--heading">
              CATEGORY
            </h5>
            <h5 className="detailsContainer__main-headingSection--heading">
              STATUS
            </h5>
            <h5 className="detailsContainer__main-headingSection--heading">
              QUANTITY
            </h5>
            <h5 className="detailsContainer__main-headingSection--heading">
              ACTIONS
            </h5>
          </section>
          {selectedWarehouse.map((Inventory) => (
            <WarehouseInventory key={Inventory.id} Inventory={Inventory} />
          ))}
          {/* <WarehouseInventory selectedWarehouse={selectedWarehouse} /> */}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default WarehouseDetails;
