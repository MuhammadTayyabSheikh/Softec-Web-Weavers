import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, user } from "../../assets";
// import { Base_URL } from "../../url";
import { navLinks } from "../../constants";
import { Heart, HeartFill } from "react-bootstrap-icons";
// import { navLinks } from "../../Constants";

function Navbar(props) {
 

  return (
    <div className="sticky-top w-100 mx-auto">
      <nav className="py-3 navbar navbar-expand-lg navbar-light background-dark paddingX">
      
          {/* <div className="dropdown d-inline mr-4 d-lg-none">
            <Link
              className="dropdown-toggle"
              to="#"
              role="button"
              id="profile-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={``}
                alt=""
                width={"40px"}
                height={"40px"}
                style={{ borderRadius: "20px" }}
                className=""
              />
            </Link>
            <div className="dropdown-menu" aria-labelledby="profile-dropdown">
              <Link className="dropdown-item" to="/profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="#">
                My NFTs
              </Link>
              <button
                className="dropdown-item btn btn-sm background-secondary rounded-pill py-2 px-4"
                
              >
                Logout
              </button>
            </div>
          </div> */}
      
        <Link to={"/"}>
        <img
            src={logo}
            alt=""
            width={"200px"}
            className="img-fluid pulse d-none d-lg-inline"
          />
          <img
            src={logo}
            alt=""
            width={"150px"}
            className="img-fluid pulse d-inline d-lg-none"
          />
        
        </Link>
        {/* <h1 className="font-clash text-white">Digi-Corn</h1> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link, id) => (
              <li className="nav-item" key={id}>
                <Link
                  className="nav-link text-white mx-4 pulse"
                  to={`${link.link}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            

              {/* <li className="nav-item d-none d-lg-block">
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    id="profile-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={``}
                      alt=""
                      width={"40px"}
                      height={"40px"}
                      style={{ borderRadius: "20px" }}
                      className=""
                    />
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="profile-dropdown"
                  >
                    <Link className="dropdown-item" to="/profile">
                      My Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      My NFTS
                    </Link>
                    <button
                      className="dropdown-item btn btn-sm background-secondary rounded-pill py-2 px-4"
                      
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </li> */}
           
              <>
                <Link to={"/sign-up"}>
                  <button className="btn btn-sm background-secondary rounded-pill px-4 py-2 text-white mx-3 my-2 my-lg-0">
                    Sign Up
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className="btn btn-sm background-secondary rounded-pill px-4 py-2 text-white mx-3 my-2 my-lg-0">
                    Login
                  </button>
                </Link>
              </>
          
            <Link to={"/favorites"}>
              <button className="btn btn-sm background-gray rounded-pill px-4 py-2 text-white mx-3 my-2 my-lg-0">
                <HeartFill color="#FF5733" />
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;