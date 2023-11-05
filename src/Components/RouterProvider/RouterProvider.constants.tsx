import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import React from "react";
import NotFound from "../NotFound/NotFound";
import RouterError from "../RouterError/RouterError";
import Details from "../Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouterError />,
    children: [
      {
        path: ":movieId",
        element: <Details />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
