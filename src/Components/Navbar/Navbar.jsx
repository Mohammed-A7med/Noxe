import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import SpotifyIcon from "../Icons/SpotifyIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import IconLink from "../Ui/IconLink";
import Styles from "./Navbar.module.css";
import { useToken } from "../../store/Store";
import UseLogout from "../../hooks/UseLogout";

// Constants defined outside component (created once, not on every render)
const MOBILE_BREAKPOINT = 768;
const BASE_PATH = "/dashboard";

const NAV_LINKS = [
  { to: `${BASE_PATH}/home`, label: "Home" },
  { to: `${BASE_PATH}/movies`, label: "Movies" },
  { to: `${BASE_PATH}/tvshows`, label: "TV Shows" },
  { to: `${BASE_PATH}/people`, label: "People" },
];

// Store icon components (not JSX elements) to avoid recreating on every render
const SOCIAL_LINKS = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Spotify", icon: SpotifyIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "YouTube", icon: YoutubeIcon },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );
  const { userToken } = useToken();
  const logout = UseLogout();

  // Track window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      // Auto-close menu when switching to desktop
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Memoized close function
  const closeNavbar = useCallback(() => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${Styles["bg-color-nav"]} sticky-top`}
    >
      <div className="container-fluid">
        <NavLink
          className={`${Styles["navbar-brand"]} navbar-brand fw-bolder`}
          to="/dashboard"
          onClick={closeNavbar}
        >
          NOXE
        </NavLink>

        {/* Toggler button for mobile (manual control) */}
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          {/* Render main navigation links only if user is logged in */}
          {userToken && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={label} className="nav-item">
                  <NavLink
                    onClick={closeNavbar}
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
            {SOCIAL_LINKS.map(({ label, icon }) => (
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
