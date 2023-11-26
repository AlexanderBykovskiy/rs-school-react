import React from "react";
import classes from "./Loader.styles.module.css";

const Loader: React.FC = () => {
  return (
    <div data-testid="loader" className={classes.wrapper}>
      <div data-testid="loader-message">Loading...</div>
    </div>
  );
};

export default Loader;
