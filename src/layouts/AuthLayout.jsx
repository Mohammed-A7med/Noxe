import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
