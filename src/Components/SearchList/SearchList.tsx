import React from "react";
import { typeProps } from "./SearchList.types";
import classes from "./SearchList.styles.module.css";
import Loader from "../Loader/Loader";
import { IMG_URL } from "../API/api.constants";
import noImagePath from "../../assets/images/no-image.jpg";
import Pagination from "../Pagination/Pagination";
import { Link, useLocation } from "react-router-dom";

const SearchList: React.FC<typeProps> = ({
  searchList,
  pagination,
  isLoading,
  getData,
}) => {
  const location = useLocation();

  return (
    <div>
      {searchList && searchList.length === 0 && (
        <div>The search has not given any results</div>
      )}
      <div className={classes.wrapper}>
        {searchList &&
          searchList.length > 0 &&
          searchList.map((item) => {
            const releaseData = new Date(item.release_date);

            return (
              <Link
                to={"/" + item.id.toString() + location.search}
                key={item.id}
                className={classes.itemWrapper}
              >
                <div className={classes.posterWrapper}>
                  <img
                    src={
                      item.poster_path
                        ? `${IMG_URL}/${item.poster_path}`
                        : noImagePath
                    }
                    alt={item.title}
                  />
                </div>
                <div className={classes.textBlock}>
                  <div>{item.title}</div>
                  <div className={classes.itemCountry}>
                    {releaseData.toLocaleDateString(undefined, {
                      year: "numeric",
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      {searchList && pagination.totalPages > 1 && (
        <Pagination paginationObj={pagination} getData={getData} />
      )}

      {isLoading && <Loader />}
    </div>
  );
};

export default SearchList;
