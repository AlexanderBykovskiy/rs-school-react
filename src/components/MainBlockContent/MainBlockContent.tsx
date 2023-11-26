import React from "react";
import classes from "./MainBlockContent.style.module.css";
import SearchField from "@/components/SearchField/SearchField";
import { typeMainBlockContentProps } from "@/components/MainBlockContent/MainBlockContent.types";
import SearchList from "@/components/SearchList/SearchList";

const MainBlockContent: React.FC<typeMainBlockContentProps> = ({
  data,
  searchPhrase,
}) => {
  return (
    <div className={`${classes.leftSide}`}>
      <SearchField searchPhrase={searchPhrase} />
      <div className={classes.contentContainer}>
        <SearchList data={data} />
      </div>
    </div>
  );
};

export default MainBlockContent;
