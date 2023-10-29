import React from "react";
import { typeProps, typeState } from "./SearchField.types";

class SearchField extends React.Component<typeProps, typeState> {
  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch();
  };

  render() {
    return (
      <form onSubmit={(e) => this.onSubmitForm(e)}>
        <input
          value={this.props.searchValue}
          onChange={(e) => this.props.onChangeValue(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
    );
  }
}

export default SearchField;
