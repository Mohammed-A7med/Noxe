import { NavLink } from "react-router-dom";

export default function IconLink({ label, children }) {
  return (
    <li className="nav-item">
      <NavLink
        href="/"
        className="nav-link text-white"
        aria-label={label}
        title={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </NavLink>
    </li>
  );
}
