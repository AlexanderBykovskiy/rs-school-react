import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Links } from "../Links/Links.tsx";
import classes from "./MainPage.style.module.css";

const MainPage: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className="links">
        <Links />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainPage;
