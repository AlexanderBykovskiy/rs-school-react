import React from "react";
import classes from "./SearchField.style.module.css";
import ThrowError from "../ThrowError/ThrowError";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setValue } from "../store/searcReducer";
import { useSearchParams } from "react-router-dom";
import { typeSearchFieldProps } from "./SearchField.types";

const SearchField: React.FC<typeSearchFieldProps> = ({ getMovieListData }) => {
  const appDispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = useAppSelector((state) => state.search.searchValue);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    if (!newValue.trim()) {
      localStorage.removeItem("searchPhrase");
      searchParams.delete("page");
      setSearchParams(searchParams);
      getMovieListData(1).then();
    } else {
      localStorage.setItem("searchPhrase", searchValue);
      searchParams.delete("page");
      setSearchParams(searchParams);
      getMovieListData(1, newValue.trim());
    }
    appDispatch(setValue(newValue));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      localStorage.setItem("searchPhrase", searchValue);
    } else {
      localStorage.removeItem("searchPhrase");
    }

    searchParams.delete("page");
    setSearchParams(searchParams);

    await getMovieListData(1, searchValue.trim());
  };

  return (
    <form
      onSubmit={(e) => onSubmitForm(e)}
      className={classes.wrapper}
      data-testid="search-form"
    >
      <input
        value={searchValue ?? ""}
        onChange={(e) => onChangeValue(e)}
        placeholder="Название фильма"
        className={classes.inputField}
        data-testid="search-input"
      />
      <button
        type="submit"
        /*disabled={isFetchingData}*/
        className={classes.submitButton}
        data-testid="search-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.submitIcon}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
        <span>Поиск</span>
      </button>
      <ThrowError />
    </form>
  );
};

export default SearchField;
