import { typePaginationButtonProps } from "./Pagination.types";
import React from "react";
import classes from "./PaginationButton.styles.module.css";

const PaginationButton: React.FC<typePaginationButtonProps> = ({
  title,
  onRedirect,
  isActive,
}) => {
  return (
    <button
      onClick={onRedirect}
      className={`${classes.button}${isActive ? " " + classes.active : ""}`}
    >
      {title}
    </button>
  );
};

export default PaginationButton;
