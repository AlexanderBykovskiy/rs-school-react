import React from "react";
import classes from "./NotFound.style.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div>404 Not Found</div>
    </div>
  );
};

export default NotFound;
