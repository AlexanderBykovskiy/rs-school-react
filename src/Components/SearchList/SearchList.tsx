import React, { useEffect } from "react";
import classes from "./SearchList.styles.module.css";
import Loader from "../Loader/Loader";
import { SearchListItem } from "./SearchListItem";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { useAppSelector } from "../store/store";
import { typeSearchListProps } from "./SearchListItem.types";

const SearchList: React.FC<typeSearchListProps> = ({ getMovieListData }) => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);

  const movieList = useAppSelector((state) => state.movie.movieList);
  const pagination = useAppSelector((state) => state.movie.pagination);
  const isLoading = useAppSelector((state) => state.movie.isLoading);
  const searchValue = useAppSelector((state) => state.search.searchValue);

  useEffect(() => {
    getMovieListData(page, searchValue).then();
  }, []);

  return (
    <div className={classes.container} data-testid="search-list">
      {movieList !== null && movieList?.length === 0 && (
        <div data-testid="search-list-empty">
          Поиск не дал результатов. Попробуйте еще раз.
        </div>
      )}
      <div className={classes.wrapper} data-testid="search-list-not-empty">
        {movieList &&
          movieList.map((item) => {
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

      {movieList && pagination?.totalPages && pagination.totalPages > 1 && (
        <Pagination getMovieListData={getMovieListData} {...pagination} />
      )}

      {isLoading && <Loader />}
    </div>
  );
};

export default SearchList;
