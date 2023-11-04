import React from "react";
import { typeProps } from "./SearchList.types";
import classes from "./SearchList.styles.module.css";
import Loader from "../Loader/Loader";

const SearchList: React.FC<typeProps> = ({ searchList, isLoading }) => {
  return (
    <div className={classes.wrapper}>
      {searchList && searchList.length === 0 && (
        <div>The search has not given any results</div>
      )}

      {searchList &&
        searchList.length > 0 &&
        searchList.map((item) => {
          return (
            <div key={item.id} className={classes.itemWrapper}>
              <img
                src={item.avatarUrl}
                alt={item.name}
                className={classes.itemImage}
              />
              {item.name}
            </div>
          );
        })}

      {isLoading && <Loader />}
    </div>
  );
};

export default SearchList;
