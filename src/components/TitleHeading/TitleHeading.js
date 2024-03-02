import React from "react";
import "./titleheading.scss";

const TitleHeading = ({ activity }) => {
  return (
    <div className="flex__container">
      <button className="flex__container--btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#2E66E6"
          />
        </svg>
      </button>
      <h1 className="flex__container--title">Edit Warehouse</h1>
    </div>
  );
};

export default TitleHeading;
