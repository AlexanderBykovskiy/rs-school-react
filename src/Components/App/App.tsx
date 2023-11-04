import React, { useEffect, useState } from "react";
import { typeUserItem } from "./App.types";
import ThrowError from "../ThrowError/ThrowError";
import SearchField from "../SearchField/SearchField";
import SearchList from "../SearchList/SearchList";
import { getSearchUserList, getUserList } from "./api";
import classes from "./App.style.module.css";

const App: React.FC = () => {
  const [searchFieldValue, setSearchFieldValue] = useState<string>("");
  const [searchList, setSearchList] = useState<null | typeUserItem[]>(null);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  const onSearchValue = (newValue: string) => {
    if (newValue.trim() === "") {
      localStorage.removeItem("phrase");
      getData().then();
    }
    setSearchFieldValue(newValue);
  };

  const onSearchClick = async () => {
    const phrase: string = searchFieldValue.trim();
    await getData(phrase);
    localStorage.setItem("phrase", phrase);
  };

  const getData = async (phrase?: string | null) => {
    setIsFetchingData(true);

    const responseData: typeUserItem[] | null = phrase
      ? await getSearchUserList(phrase)
      : await getUserList();

    if (responseData) {
      setSearchList(responseData);
    }

    setIsFetchingData(false);
  };

  useEffect(() => {
    const phrase = localStorage.getItem("phrase");
    setSearchFieldValue(phrase ?? "");
    getData(phrase).then();
  }, []);

  return (
    <main>
      <ThrowError />
      <div className={classes.wrapper}>
        <SearchField
          searchValue={searchFieldValue}
          onChangeValue={onSearchValue}
          onSearch={onSearchClick}
        />
        <SearchList searchList={searchList} isLoading={isFetchingData} />
      </div>
    </main>
  );
};

export default App;
