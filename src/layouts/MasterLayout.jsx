import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";

export default function MasterLayout() {
  return (
    <>
      <Navbar />
      <div className="container my-3 my-md-5">
        <Outlet />
      </div>
    </>
  );
}
