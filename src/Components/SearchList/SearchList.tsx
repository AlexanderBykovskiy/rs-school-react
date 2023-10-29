import React from "react";
import { typeProps, typeState } from "./SearchList.types";
import classes from "./SearchList.styles.module.css";
import Loader from "../Loader/Loader";

class SearchList extends React.Component<typeProps, typeState> {
  render() {
    return (
      <div className={classes.wrapper}>
        {this.props.searchList !== null ? (
          this.props.searchList.length ? (
            this.props.searchList.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })
          ) : (
            <div>The search has not given any results</div>
          )
        ) : undefined}
        {this.props.isLoading && <Loader />}
      </div>
    );
  }
}

export default SearchList;
