import React from "react";
import classes from "./Loader.styles.module.css";

const Loader: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div>Loading...</div>
    </div>
  );
};

export default Loader;
