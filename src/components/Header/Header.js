import "./header.scss";
import logo2 from "../../assets/logo/InStock-Logo_2x.png";
import { useState } from "react";
import SearchHeading from "../SearchHeading/SearchHeading";
import { Link } from "react-router-dom";

const Header = (setCurrent) => {
  const [activeTab, setActiveTab] = useState("warehouse");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo2} alt="InStock-Logo"></img>
      </div>
      <div className="nav">
        <div className="nav_container">
          <Link to="/" className="nav__link">
            <h3
              className={`warehouseTab ${
                activeTab === "warehouse" ? `active` : ""
              }`}
              onClick={() => handleTabClick("warehouse")}
            >
              Warehouses
            </h3>
          </Link>
          <Link to="/inventory" className="nav__link">
            <h3
              className={`inventoryTab ${
                activeTab === "inventory" ? "active" : ""
              }`}
              onClick={() => handleTabClick("inventory")}
            >
              Inventory
            </h3>
          </Link>
        </div>
      </div>
      <div>
        <SearchHeading activity={activeTab} />
      </div>
    </div>
  );
};

export default Header;
