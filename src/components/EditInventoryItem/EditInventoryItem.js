import React, { useEffect } from "react";
import "./editInventoryItem.scss";
import { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function EditInventoryItem() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showQuantityInput, setShowQuantityInput] = useState(false);
  const handleOptionchange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "instock") {
      setShowQuantityInput(true);
    } else {
      setShowQuantityInput(false);
    }
  };

  const { iid } = useParams();

  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5050/instock/inventory/${iid}`)
      .then((response) => {
        console.log(response.data[0]);
        setItem(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log("I am done");
      });
  }, [iid]);

  console.log(item);

  const setValues = () => {
    document.getElementById("name").value = item.item_name;
    document.getElementById("description").value = item.description;
    document.getElementById("category").value = item.category;
  };

  console.log(item.item_name);
  useEffect(() => {
    setValues();
  }, [item, selectedOption]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="pageContainer">
          <div className="editInventoryHeader">
            <Link to="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="editInventoryHeader__icon"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#2E66E6"
                />
              </svg>
            </Link>
            <h1>Edit Inventory Item</h1>
          </div>
          <form>
            <div className="breakpointContainer">
              <div className="itemDetailsContainer">
                <div className="itemDetailsHeader">
                  <h2>Item Details</h2>
                </div>
                <div className="itemDetailsName">
                  <h3>Item Name</h3>
                  <div>
                    <div>
                      <label>
                        <textarea
                          className="textFiledName"
                          type="text"
                          name="name"
                          placeholder="123"
                          id="name"
                        ></textarea>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="itemDetailsDes">
                  <div>
                    <h3>Description</h3>
                  </div>

                  <div>
                    <div>
                      <label>
                        <textarea
                          className="textFiledDes"
                          type="text"
                          name="description"
                          placeholder="456"
                          id="description"
                        ></textarea>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <h3>Category</h3>
                  </div>
                  <div className="inventoryDropDownList"></div>
                  <select className="inventoryDropDownList__item" id="">
                    <option value="option1" id="category">
                      Option 1
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>

              <div className="itemAvailabilityContainer">
                <div className="itemAvailabilityHeader">
                  <h2>Item Availability</h2>
                </div>

                <div className="itemStatus">
                  <div>
                    <h3>Status</h3>
                  </div>

                  <div className="statusButton">
                    <label className="statusInstock">
                      <input
                        type="radio"
                        value="instock"
                        checked={selectedOption === "instock"}
                        onChange={handleOptionchange}
                      />
                      <p>In stock</p>
                    </label>
                    <label className="statusOutOfStock">
                      <input
                        type="radio"
                        value="Out of stock"
                        checked={selectedOption === "Out of stock"}
                        onChange={handleOptionchange}
                      />
                      <p>Out of stock</p>
                    </label>
                  </div>
                </div>
                {showQuantityInput && (
                  <div className="itemQuantity">
                    <label>
                      <h3>Quantity</h3>
                      <input
                        type="number"
                        onChange={(event) => console.log(event.target.value)}
                        className="itemQuantity__input"
                        id="quantity"
                      />
                    </label>
                  </div>
                )}

                <div className="itemAvailabilityLocation">
                  <div>
                    <h3>Warehouse</h3>
                  </div>
                  <div>
                    <select className="inventoryDropDownList__item inventoryDropDownList__item--availability">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemDetailsButton">
              <div className="itemDetailsButton__cancel">
                <button className="ctaSecondary" type="button">
                  Cancel
                </button>
              </div>

              <div className="itemDetailsButton__save">
                <button className="ctaPrimary" type="button">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default EditInventoryItem;
