import React, { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";
import SearchList from "../SearchList/SearchList";
import { getSearchMovieList, getMovieList } from "../API/api";
import classes from "./App.style.module.css";
import { typeMovieItem, typeMovieResponse } from "../API/api.types";
import { defaultPagination } from "../Pagination/Pagination.constants";
import { typePaginationObj } from "../Pagination/Pagination.types";
import { Outlet, useSearchParams } from "react-router-dom";
import AppContextProvider from "../AppContextProvider/AppContextProvider";
import SearchFieldContextProvider from "../SearchFieldContextProvider/SearchFieldContextProvider";

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get("per_page"));

  const [searchFieldValue, setSearchFieldValue] = useState<string>("");
  const [searchList, setSearchList] = useState<null | typeMovieItem[]>(null);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
  const [pagination, setPagination] =
    useState<typePaginationObj>(defaultPagination);

  const onSearchValue = (newValue: string) => {
    if (newValue.trim() === "") {
      searchParams.delete("query");
      searchParams.delete("page");
      getData(1, perPage ?? 20).then();
      setSearchParams(searchParams);
    }
    setSearchFieldValue(newValue);
  };

  const onSearchClick = async () => {
    const phrase: string = searchFieldValue.trim();
    await getData(1, perPage ?? 20, phrase);
    const newSearchParams: {
      query?: string;
      page?: string;
      per_page?: string;
    } = {
      page: "1",
      per_page: perPage ? String(perPage) : "20",
      query: phrase,
    };
    setSearchParams(newSearchParams);
  };

  const getData = async (
    page: number = 1,
    perPage: number,
    phrase?: string | null,
  ): Promise<void> => {
    setIsFetchingData(true);

    const responseData: typeMovieResponse | null = phrase
      ? await getSearchMovieList(phrase, page, perPage ?? 20)
      : await getMovieList(page, perPage ?? 20);

    if (responseData) {
      setSearchList(responseData.results);
      setPagination({
        ...pagination,
        pageNumber: responseData.page,
        totalElements: responseData.total_results,
        totalPages: responseData.total_pages,
      });
    }

    setIsFetchingData(false);
  };

  useEffect(() => {
    const phrase = searchParams.get("query");
    const page = Number(searchParams.get("page"));
    setSearchFieldValue(phrase ?? "");
    getData(page ? page : 1, perPage ?? 20, phrase).then();
  }, []);

  return (
    <AppContextProvider
      contextValue={{
        movieList: searchList,
        isFetchingData: isFetchingData,
        pagination: pagination,
        getData: getData,
      }}
    >
      <main data-testid="main-tag">
        <div className={classes.wrapper}>
          <div className={classes.leftSide}>
            <SearchFieldContextProvider
              contextValue={{
                searchValue: searchFieldValue,
                onChangeValue: onSearchValue,
                onSearch: onSearchClick,
              }}
            >
              <SearchField />
            </SearchFieldContextProvider>
            <div className={classes.contentContainer}>
              <SearchList />
            </div>
          </div>
          <div className={classes.rightSide}>
            <Outlet />
          </div>
        </div>
      </main>
    </AppContextProvider>
  );
};

export default App;
