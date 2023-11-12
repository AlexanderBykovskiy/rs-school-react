import React from "react";
import classes from "./SearchList.styles.module.css";
import { IMG_URL } from "../API/api.constants";
import noImagePath from "../../assets/images/no-image.jpg";
import { Link, useLocation } from "react-router-dom";
import { typeSearchListItemProps } from "./SearchListItem.types";

export const SearchListItem: React.FC<typeSearchListItemProps> = ({
  id,
  title,
  releaseData,
  poster_path,
}) => {
  const location = useLocation();

  return (
    <Link
      to={"/" + id.toString() + location.search}
      key={id}
      className={classes.itemWrapper}
      data-testid="search-list-item"
    >
      <div className={classes.posterWrapper}>
        <img
          src={poster_path ? `${IMG_URL}/${poster_path}` : noImagePath}
          alt={title}
          data-testid="search-list-item-image"
        />
      </div>
      <div className={classes.textBlock}>
        <div data-testid="search-list-item-title">{title}</div>
        <div
          className={classes.itemRelease}
          data-testid="search-list-item-release"
        >
          {releaseData.toLocaleDateString(undefined, {
            year: "numeric",
          })}
        </div>
      </div>
    </Link>
  );
};
