import React from "react";
import classes from "./RouterError.style.module.css";

const RouterError: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div>404 Not Found</div>
    </div>
  );
};

export default RouterError;
