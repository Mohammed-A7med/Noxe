import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";
import FacebookIcon from "../Icons/FacebookIcon";
import SpotifyIcon from "../Icons/SpotifyIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import IconLink from "../Ui/IconLink";

export default function Navbar({ userData, Logout }) {
  return (
    <nav className={`navbar navbar-expand-lg ${Styles.bgColor} sticky-top`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bolder" to="/">
          NOXE
        </NavLink>
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
          {userData && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? Styles.active : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Movies"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? Styles.active : ""}`
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Tvshows"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? Styles.active : ""}`
                  }
                >
                  Tv show
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/People"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? Styles.active : ""}`
                  }
                >
                  People
                </NavLink>
              </li>
            </ul>
          )}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <IconLink label="Facebook">
              <FacebookIcon />
            </IconLink>
            <IconLink label="Spotify">
              <SpotifyIcon />
            </IconLink>
            <IconLink label="Instagram">
              <InstagramIcon />
            </IconLink>
            <IconLink label="YouTube">
              <YoutubeIcon />
            </IconLink>
            {userData && (
              <li className="nav-item">
                <button onClick={Logout} className="nav-link">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
