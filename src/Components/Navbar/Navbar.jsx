import { NavLink } from "react-router-dom";

import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import SpotifyIcon from "../Icons/SpotifyIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import IconLink from "../Ui/IconLink";
import Styles from "./Navbar.module.css";

export default function Navbar({ userData, Logout }) {
  const navLinks = [
    { to: "/Home", label: "Home" },
    { to: "/Movies", label: "Movies" },
    { to: "/Tvshows", label: "TV Shows" },
    { to: "/People", label: "People" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: <FacebookIcon /> },
    { label: "Spotify", icon: <SpotifyIcon /> },
    { label: "Instagram", icon: <InstagramIcon /> },
    { label: "YouTube", icon: <YoutubeIcon /> },
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${Styles.bgColor} sticky-top`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bolder" to="/">
          NOXE
        </NavLink>
        {/* Toggler button for mobile */}
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
          {/* Render main navigation links only if user is logged in */}
          {userData && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map(({ to, label }) => (
                <li key={label} className="nav-item">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? Styles.active : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
          {/* Social icons and logout button */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-2 gap-md-0">
            {socialLinks.map(({ label, icon }) => (
              <IconLink key={label} label={label}>
                {icon}
              </IconLink>
            ))}
            {userData && (
              <li className="nav-item">
                <button onClick={Logout} className="nav-link">
                  Logout
                </button>
              </li>
            ) }
          </ul>
        </div>
      </div>
    </nav>
  );
}
