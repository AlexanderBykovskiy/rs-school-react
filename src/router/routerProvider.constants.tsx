import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage.tsx";
import NotFound from "../components/NotFound/NotFound.tsx";
import { ResultList } from "../components/ResultList/ResultList.tsx";
import { Uncontrolled } from "../components/Uncontrolled/Uncontrolled.tsx";
import { Controlled } from "../components/Controlled/Controlled.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <ResultList />,
      },
      {
        path: "uncontrolled-form",
        element: <Uncontrolled />,
      },
      {
        path: "controlled-form",
        element: <Controlled />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
