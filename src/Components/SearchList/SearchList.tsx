import React, { useContext } from "react";
import classes from "./SearchList.styles.module.css";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { AppContext } from "../AppContextProvider/AppContextProvider";
import { SearchListItem } from "./SearchListItem";

const SearchList: React.FC = () => {
  const {
    isFetchingData,
    movieList: searchList,
    pagination,
  } = useContext(AppContext);

  return (
    <div className={classes.container}>
      {searchList && searchList.length === 0 && (
        <div>Поиск не дал результатов. Попробуйте еще раз.</div>
      )}
      <div className={classes.wrapper}>
        {searchList &&
          searchList.length > 0 &&
          searchList.map((item) => {
            const releaseData = new Date(item.release_date);
            return (
              <SearchListItem
                id={item.id}
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                releaseData={releaseData}
              />
            );
          })}
      </div>

      {searchList && pagination.totalPages > 1 && <Pagination />}

      {isFetchingData && <Loader />}
    </div>
  );
};

export default SearchList;
