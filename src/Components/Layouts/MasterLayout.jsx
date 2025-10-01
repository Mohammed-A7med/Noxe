import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

export default function MasterLayout() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Outlet />
      </div>
    </>
  );
}
