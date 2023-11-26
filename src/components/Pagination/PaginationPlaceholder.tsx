import React from "react";
import classes from "./PaginationPlaceholder.styles.module.css";

const PaginationPlaceholder: React.FC = () => {
  return (
    <div className={classes.placeholder} data-testid="pagination-placeholder">
      ...
    </div>
  );
};

export default PaginationPlaceholder;
