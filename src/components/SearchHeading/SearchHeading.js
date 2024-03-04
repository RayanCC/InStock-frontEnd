import React from "react";
import "./searchheading.scss";
import searchLogo from "../../assets/icon/search-24px.svg";
import { Link } from "react-router-dom";

const SearchHeading = ({ activity }) => {
  return (
    <div className="search__container">
      <div className="flex__container_one">
        <div className="search__container--title-div">
          <h1 className="search__container--title">{activity}</h1>
        </div>
      </div>

      <div className="flex__container_two">
        <div className="search__container--search">
          <div className="search__container--search-bar-div">
            <input
              type="text"
              placeholder="Search..."
              className="search__container--input"
            />
            <button>
              <img
                src={searchLogo}
                alt="search icon"
                className="search__container--search-icon"
              />
            </button>
          </div>

          <div className="search__container--search-icon-div"></div>
        </div>

        <div className="search__container--btn-div">
          <Link to="/addwarehouse">
            <button className="search__container--btn">+ Add {activity}</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchHeading;
