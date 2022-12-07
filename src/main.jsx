import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/Root";

import "./index.css";
import ErrorPage from "./ErrorPage";
import ContactUs from "./routes/ContactUs";
import AboutUs from "./routes/AboutUs";
import Services from "./routes/Services";
import Involvement from "./routes/Involvement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/",
    element: <ContactUs />,
  },
  {
    path: "about/",
    element: <AboutUs />,
  },
  {
    path: "services/",
    element: <Services />,
  },
  {
    path: "involvement/",
    element: <Involvement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
