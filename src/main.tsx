import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AOSWrapper from "./components/AOSWrapper.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

import "./style/index.css";
import "./style/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AOSWrapper>
      <RouterProvider router={router} />
    </AOSWrapper>
  </React.StrictMode>
);
