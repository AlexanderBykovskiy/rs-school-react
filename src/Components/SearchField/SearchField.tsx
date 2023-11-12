import React, { useContext } from "react";
import classes from "./SearchField.style.module.css";
import ThrowError from "../ThrowError/ThrowError";
import { AppContext } from "../AppContextProvider/AppContextProvider";
import { SearchFieldContext } from "../SearchFieldContextProvider/SearchFieldContextProvider";

const SearchField: React.FC = () => {
  const { searchValue, onChangeValue, onSearch } =
    useContext(SearchFieldContext);

  const { isFetchingData } = useContext(AppContext);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={(e) => onSubmitForm(e)} className={classes.wrapper}>
      <input
        value={searchValue ?? ""}
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder="Название фильма"
        className={classes.inputField}
      />
      <button
        type="submit"
        disabled={isFetchingData}
        className={classes.submitButton}
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
