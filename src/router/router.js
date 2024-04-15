import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../errorpage";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
    ],
  },
]);
