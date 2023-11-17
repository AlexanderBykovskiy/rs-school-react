import React, { useEffect } from "react";
import SearchField from "../SearchField/SearchField";
import classes from "./App.style.module.css";
import { Outlet } from "react-router-dom";
import {
  useLazyGetPopularListQuery,
  useLazyGetSearchListQuery,
} from "../API/rtkApi";
import SearchList from "../SearchList/SearchList";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  setMovieList,
  setMovieLoading,
  setPagination,
} from "../store/movieListReducer";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state) => state.search.searchValue);

  const [getMovieList, { isFetching: isMovieListLoading }] =
    useLazyGetPopularListQuery();
  const [getSearchMovieList, { isFetching: isSearchMovieListLoading }] =
    useLazyGetSearchListQuery();

  const getMovieListData = async (pageNumber: number, searchPhrase: string) => {
    const response = searchValue
      ? await getSearchMovieList({ pageNumber, searchPhrase }).unwrap()
      : await getMovieList(pageNumber).unwrap();

    if (response?.results) {
      dispatch(setMovieList(response.results));
      dispatch(
        setPagination({
          itemsPerPage: 20,
          pageNumber: response.page,
          totalElements: response.total_results,
          totalPages: response.total_pages,
        }),
      );
    }
  };

  useEffect(() => {
    if (isMovieListLoading || isSearchMovieListLoading) {
      dispatch(setMovieLoading(true));
    } else {
      dispatch(setMovieLoading(false));
    }
  }, [isMovieListLoading, isSearchMovieListLoading]);

  return (
    <main data-testid="main-tag">
      <div className={classes.wrapper}>
        <div className={classes.leftSide}>
          <SearchField getMovieListData={getMovieListData} />
          <div className={classes.contentContainer}>
            <SearchList getMovieListData={getMovieListData} />
          </div>
        </div>
        <div className={classes.rightSide}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
