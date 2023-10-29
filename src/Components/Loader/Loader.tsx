import React from "react";
import classes from "./Loader.styles.module.css";

class Loader extends React.Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div>Loading...</div>
      </div>
    );
  }
}

export default Loader;
