import React from "react";
import "./deletemodal.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const DeleteModal = ({ name }) => {
  const { wid } = useParams();
  console.log(wid);

  const [namee, setNamee] = useState("");
  const url = `http://localhost:5050/instock/warehouse/`;
  useEffect(() => {
    if (wid) {
      axios
        .get(url)
        .then((res) => {
          setNamee(res.data[wid - 1].warehouse_name);
          console.log(res.data[0].warehouse_name);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("no Ids found");
    }
  }, [wid]);

  console.log(namee);
  if (namee) {
    name = namee;
  }

  return (
    <div className="modal__container">
      <div className="modal__container--div-one">
        <Link to={`/`}>
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
        </Link>
      </div>
      <div className="modal__container--div-two">
        <h1 className="modal__container--title">Delete {name} warehouse?</h1>
        <p className="modal__container--body">
          Please confirm that you'd like to delete the {name} warehouse from the
          list of warehouses. You won't be able to undo this action.
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
