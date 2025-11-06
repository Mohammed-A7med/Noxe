import { NavLink } from "react-router-dom";

import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import SpotifyIcon from "../Icons/SpotifyIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import IconLink from "../Ui/IconLink";
import Styles from "./Navbar.module.css";
import { useToken } from "../../store/Store";
import UseLogout from "../../hooks/UseLogout";

export default function Navbar() {
  const { userToken } = useToken();
  const logout = UseLogout();

  const basePath = "/dashboard";

  const navLinks = [
    { to: `${basePath}/home`, label: "Home" },
    { to: `${basePath}/movies`, label: "Movies" },
    { to: `${basePath}/tvshows`, label: "TV Shows" },
    { to: `${basePath}/people`, label: "People" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: <FacebookIcon /> },
    { label: "Spotify", icon: <SpotifyIcon /> },
    { label: "Instagram", icon: <InstagramIcon /> },
    { label: "YouTube", icon: <YoutubeIcon /> },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg ${Styles["bg-color-nav"]} sticky-top`}
    >
      <div className="container-fluid">
        <NavLink
          className={`${Styles["navbar-brand"]} navbar-brand fw-bolder`}
          to="/dashboard"
        >
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
          {userToken && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map(({ to, label }) => (
                <li key={label} className="nav-item">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `nav-link ${Styles["nav-link"]} ${
                        isActive ? Styles.active : ""
                      }`
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
            {userToken && (
              <li className="nav-item">
                <button
                  onClick={logout}
                  className={`${Styles["nav-link"]} nav-link`}
                >
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
