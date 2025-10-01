import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "../src/Components/Auth/Login/Login.jsx";
import Register from "../src/Components/Auth/Register/Register.jsx";
import "./App.css";
import { toastStyles } from "./Components/Constant/ToastStyles.js";
import Details from "./Components/Details/Details.jsx";
import Home from "./Components/Home/Home.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import People from "./Components/People/People.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import Tvshows from "./Components/Tvshows/Tvshows.jsx";
import AuthLayout from "./Components/Layouts/AuthLayout.jsx";
import MasterLayout from "./Components/Layouts/MasterLayout.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <MasterLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "movies", element: <Movies /> },
        { path: "tvshows", element: <Tvshows /> },
        { path: "people", element: <People /> },
        { path: "details/:id", element: <Details /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position="top-right" toastOptions={toastStyles} />
    </>
  );
}

export default App;
