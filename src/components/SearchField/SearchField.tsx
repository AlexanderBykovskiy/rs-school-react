'use client'

import React, {useState} from "react";
import classes from "./SearchField.style.module.css";
import ThrowError from "../ThrowError/ThrowError";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import {paramsCreator} from "@/utils/paramsCreator";
import {typeSearchFieldProps} from "@/components/SearchField/SearchField.types";

const SearchField: React.FC<typeSearchFieldProps> = ({searchPhrase}) => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const perPage = searchParams.get('per_page');

  const [searchValue, setSearchValue] = useState(typeof(searchPhrase) === 'string' ?  searchPhrase : '');

  const onChangeValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!e.target.value.trim()) {
      setSearchValue('');
      await router.push('/' + paramsCreator(undefined, perPage));
    } else {
      setSearchValue(newValue);
    }

  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await router.push('/' + paramsCreator(undefined, perPage, searchValue));
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
