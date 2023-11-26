import React from "react";
import classes from "./NotFound.style.module.css";
import {font} from "@/styles/fonts";

const NotFound: React.FC = () => {
  return (
    <div className={`${classes.wrapper} ${font.className}`} data-testid="not-found-page">
      <div>404 Not Found</div>
    </div>
  );
};

export default NotFound;
