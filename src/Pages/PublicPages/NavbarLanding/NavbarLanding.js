import React, { useEffect, useState } from "react";
import "./NavbarLanding.scss";
import { Link, useHistory } from "react-router-dom";

function NavbarLanding() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`col-sm-12 fixed-top ${show && "bg_nav_white"} `}>
      <nav className=" navbar  navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../images/logo.png" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active pt-4">
                <p className="nav-link font_height " href="#">
                  Seller <i className="fas fa-chevron-down"></i>{" "}
                  <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item active pt-4">
                <p className="nav-link font_height " href="#">
                  Buyer <i className="fas fa-chevron-down"></i>{" "}
                  <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item active pt-4">
                <p className="nav-link font_height " href="#">
                  Company <i className="fas fa-chevron-down"></i>{" "}
                  <span className="sr-only">(current)</span>
                </p>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <Link to="/login" className="text_dec nav-item active pt-4">
                <p className="nav-link font_height " href="#">
                  Login <span className="sr-only">(current)</span>
                </p>
              </Link>

              <a className="nav-item active">
                <button
                  className="btn btn-outline-gray button_join_border btn-lg fontSizejoin p-3 px-4"
                  type="submit"
                >
                  Join Now <i className="fas fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLanding;
