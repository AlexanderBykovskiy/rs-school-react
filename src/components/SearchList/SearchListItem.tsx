import React from "react";
import classes from "./SearchList.styles.module.css";
import { typeSearchListItemProps } from "./SearchListItem.types";
import Link from "next/link";
import { IMG_URL } from "@/api/api.constants";
import Image from "next/image";

export const SearchListItem: React.FC<typeSearchListItemProps> = ({
  id,
  title,
  releaseData,
  poster_path,
  searchParams,
}) => {
  return (
    <Link
      href={`/${id.toString()}` + searchParams}
      key={id}
      className={classes.itemWrapper}
      data-testid="search-list-item"
    >
      <div className={classes.posterWrapper}>
        <Image
          src={poster_path ? `${IMG_URL}${poster_path}` : "/no-image.jpg"}
          alt={title}
          width={185}
          height={278}
          priority={true}
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
