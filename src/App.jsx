import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Tvshows from "./Components/Tvshows/Tvshows.jsx";
import People from "./Components/People/People.jsx";
import About from "./Components/About/About.jsx";
import Details from "./Components/Details/Details.jsx";
import Networks from "./Components/Networks/Networks.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TrendingContextProvider from "./Components/Context/Store.js";

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
        <TrendingContextProvider>
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
            <Route path="About" element={<About />}></Route>
            <Route
              path="Networks"
              element={
                <ProtectedRoute>
                  <Networks />
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
        </TrendingContextProvider>
      </div>
    </>
  );
}

export default App;
