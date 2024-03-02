import React from "react";
import "./deletemodal.scss";

const DeleteModal = ({ warehouse_name, item }) => {
  return (
    <div className="modal__container">
      <div className="modal__container--div-one">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#13182C"
          />
        </svg>
      </div>
      <div className="modal__container--div-two">
        <h1 className="modal__container--title">
          Delete {warehouse_name} warehouse?
        </h1>
        <p className="modal__container--body">
          Please confirm that you'd like to delete the {warehouse_name}{" "}
          warehouse from the list of warehouses. You won't be able to undo this
          action.
        </p>
      </div>
      <div className="modal__container--div-three">
        <button className="modal__container--btn cancel-btn">Cancel</button>
        <button className="modal__container--btn delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;
