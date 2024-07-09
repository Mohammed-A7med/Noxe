import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${Styles.bgColor}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder" to="">
          NOXE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {props.userData ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Tvshows">
                  Tv show
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="People">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Networks">
                  Networks
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="navbar-icons d-flex align-items-center">
              <i className="fa-brands mx-2 fa-facebook"></i>
              <i className="fa-brands mx-2 fa-spotify"></i>
              <i className="fa-brands mx-2 fa-instagram"></i>
              <i className="fa-brands mx-2 fa-youtube"></i>
            </div>
            {props.userData ? (
              <li className="nav-item">
                <a onClick={props.Logout} className="nav-link" >
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="Login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
