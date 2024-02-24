import React from "react";
import "./warehouse.scss";

const Warehouse = ({
  warehouse,
  address_line_1,
  address_line_2,
  contact,
  number,
  email,
}) => {
  return (
    <div className="warehouse__container">
      <div className="warehouse__container--grid">
        <div className="warehouse__container--grid-warehouse">
          <div className="warehouse__container--warehouse">
            <div className="warehouse__container--flex">
              <div>
                <h4 className="warehouse__container--title">Warehouse</h4>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="warehouse__container--icon sort mobile-hidden"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </div>
            </div>
            <div className="warehouse__container--flex">
              <div>
                <button className="warehouse__container--btn">
                  {warehouse}
                </button>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="warehouse__container--icon sort mobile-hidden"
                >
                  <path
                    d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                    fill="#2E66E6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="warehouse__container--address">
            <div className="warehouse__container--flex">
              <div>
                <h4 className="warehouse__container--title">Address</h4>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="warehouse__container--icon sort mobile-hidden"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </div>
            </div>
            <div className="warehouse__container--">
              <p className="warehouse__container--text">{address_line_1}</p>
              <p className="warehouse__container--text">{address_line_2}</p>
            </div>
          </div>
        </div>

        <div className="warehouse__container--grid-info">
          <div className="warehouse__container--contact">
            <div className="warehouse__container--flex">
              <div>
                <h4 className="warehouse__container--title">Contact Name</h4>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="warehouse__container--icon sort mobile-hidden"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="warehouse__container--text">{contact}</p>
            </div>
          </div>

          <div className="warehouse__container--contact">
            <div className="warehouse__container--flex">
              <div>
                <h4 className="warehouse__container--title">
                  Contact Information
                </h4>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="warehouse__container--icon sort mobile-hidden"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="warehouse__container--text">{number}</p>
              <p className="warehouse__container--text">{email}</p>
            </div>
          </div>
        </div>

        <div className="warehouse__container--grid icon">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="warehouse__container--icon delete"
            >
              <path
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                fill="#C94515"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="warehouse__container--icon edit"
            >
              <path
                d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                fill="#2E66E6"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="warehouse__container--grid icon">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="warehouse__container--icon delete"
          >
            <path
              d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
              fill="#C94515"
            />
          </svg>
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="warehouse__container--icon edit"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="#2E66E6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
