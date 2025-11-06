import { Toaster } from "react-hot-toast";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { toastStyles } from "../src/constant/ToastStyles.js";

import Login from "../src/Components/Auth/Login/Login.jsx";
import Register from "../src/Components/Auth/Register/Register.jsx";
import Details from "../src/pages/Details/Details";
import Home from "../src/pages/Home/Home.jsx";
import Movies from "../src/pages/Movies/Movies.jsx";
import NotFound from "../src/pages/NotFound/NotFound.jsx";
import People from "../src/pages/People/People.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import Tvshows from "../src/pages/Tvshows/Tvshows.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MasterLayout from "./layouts/MasterLayout";

function App() {
  const routes = createHashRouter([
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
        { path: "details", element: <Details /> },
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