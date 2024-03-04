import React from "react";
import "./addNewInventoryItem.scss";
import { useState, useEffect} from "react";
import axios from "axios";

function AddNewInventoryItem() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showQuantityInput, setShowQuantityInput] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const handleOptionchange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "instock") {
      setShowQuantityInput(true);
    } else {
      setShowQuantityInput(false);
    }
  };


  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
    warehouse_id: ""
  });
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    // Fetch inventory data
    axios
      .get("http://localhost:5050/instock/inventory")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data)
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
console.log(warehouses)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5050/instock/inventory", formData)
      .then((response) => {
        console.log("Item added successfully:", response.data);
       
      })
      .catch((error) => {
        console.error("Error adding item:", error);
       
      });
  };





  return (
    <div className="pageContainer">
      <div className="addInventoryHeader">
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
        <h1>Add New Inventory Item</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
                      className="addItemName"
                      type="text"
                      name="name"
                      placeholder="Item Name"
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
                      className="addItemDesc"
                      type="text"
                      name="description"
                      placeholder="Please enter a brief item description..."
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
              <select className="inventoryDropDownList__item"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
               <option value="">Please Select</option>
               {categories.map((category) => (
                <option key={category.id}>
                    {category.category}
                </option>
               ))}
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
                    onChange={(event) => setQuantity(event.target.value)}
                    className="itemQuantity__input"
                    value={quantity}
                  />
                </label>
              </div>
            )}

            <div className="itemAvailabilityLocation">
              <div>
                <h3>Warehouse</h3>
              </div>
              <div>
                <select className="inventoryDropDownList__item inventoryDropDownList__item--availability"
                name="warehouse_id"
                value={formData.warehouse_id}
                onChange={handleInputChange}
                >
                        <option value="">Please select</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.warehouse_id}>
                                {warehouses[category.warehouse_id]}
                            </option>
                        ))}
               
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
              + Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewInventoryItem;
