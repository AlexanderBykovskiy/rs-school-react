import React from "react";
import { typeProps, typeState } from "./SearchField.types";
import classes from "./SearchField.style.module.css";

class SearchField extends React.Component<typeProps, typeState> {
  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch();
  };

  render() {
    return (
      <form onSubmit={(e) => this.onSubmitForm(e)} className={classes.wrapper}>
        <input
          value={this.props.searchValue}
          onChange={(e) => this.props.onChangeValue(e.target.value)}
          placeholder="Input phrase"
          className={classes.inputField}
        />
        <button type="submit" className={classes.submitButton}>
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
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchField;
