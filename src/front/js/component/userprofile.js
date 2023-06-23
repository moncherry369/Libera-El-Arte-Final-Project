import React from "react";

const Userprofile = () => {

  return (
    <>
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="user-navbar-info">
          <img
            className="rounded-circle"
            src="https://placekitten.com/122"
            id="nav-profpic"
          />
        </div>

        <a className="navbar-dropdown-link">Your Atelier</a>
        <div className="navbar-dropdown">
          <a className="navbar-item dropdown-item" href="#">
            Your creations
          </a>
          <a className="navbar-item dropdown-item" href="#">
            Beloved Works
          </a>
          <a className="navbar-item dropdown-item" href="#">
            Settings
          </a>
        </div>
        <style>
            {`
            /* USER PROFILE CONTAINER */
            .user-navbar-info {
                display: block;
            }
            /* NAV PROFILE THUMBNAIL */
            #nav-profpic {
                width: 60px;
                height: 60px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
            }

            .navbar-dropdown-link {
                cursor: crosshair;
                color: rgb(252, 98, 56);
                text-decoration: none;
                font-size: small;
                width: 100px;
                align-items: center;
            }

            .navbar-item {
                cursor: cell;
                color: rgb(252, 98, 56);
                text-decoration: none;
                font-size: small;
                text-align: left;
            }

            .navbar-item:hover {
                color: rgb(11, 9, 9);
            }
            .dropdown-item {
                border-bottom: rgb(140, 137, 137) 1px solid;
                margin-left: 0px;
                padding: 3px;
              }
              
              .navbar-dropdown-link:hover {
                color: rgb(11, 9, 9);
              }
              
              .navbar-dropdown {
                display: none;
                position: absolute;
                background-color: rgba(253, 226, 158, 0.686);
                text-decoration: none;
                width: 40%;
                margin: auto;
                /* padding: 2px; */
                transform: translateX(-20%);
              }
              
              .has-dropdown:hover .navbar-dropdown {
                display: block;
                cursor: crosshair;
              }
            `}
        </style>
      </div>
    </>
  );
};

export default Userprofile;
