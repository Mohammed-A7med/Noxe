import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Tvshows from "./Components/Tvshows/Tvshows.jsx";
import People from "./Components/People/People.jsx";
import Details from "./Components/Details/Details.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Login from "../src/Components/Auth/Login/Login.jsx";
import Register from "../src/Components/Auth/Register/Register.jsx";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  function saveUserData() {
    let emailUser = localStorage.getItem("userToken");
    setUserData(emailUser);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      saveUserData();
    }
  });

  function Logout() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/Login");
  }

  function ProtectedRoute(props) {
    if (localStorage.getItem("userToken") == null) {
      return <Navigate to="/Login" />;
    } else {
      return props.children;
    }
  }
  return (
    <>
      <Navbar userData={userData} Logout={Logout} />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="Home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="Movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="Tvshows"
            element={
              <ProtectedRoute>
                <Tvshows />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="People"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="Details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="Login"
            element={<Login saveUserData={saveUserData} />}
          ></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
          },
          success: {
            style: {
              background: "#00c896",
              color: "#fff",
            },
            iconTheme: {
              primary: "#00e0ac",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              background: "#ff4d4f",
              color: "#fff",
            },
            iconTheme: {
              primary: "#ff6b6d",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
