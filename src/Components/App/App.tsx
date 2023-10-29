import React from "react";
import { typeAppProps, typeState, typeUserItem } from "./App.types";
import ThrowError from "../ThrowError/ThrowError";
import SearchField from "../SearchField/SearchField";
import SearchList from "../SearchList/SearchList";
import { getSearchUserList, getUserList } from "./api";

class App extends React.Component<typeAppProps, typeState> {
  constructor(props: typeAppProps) {
    super(props);
    // State of component
    this.state = {
      searchFieldValue: "",
      searchList: null,
      isFetchingData: false,
    };
  }

  // On change search field handler
  onSearchValue = (newValue: string) => {
    if (newValue.trim() === "") {
      localStorage.removeItem("phrase");
    }
    this.setState({ ...this.state, searchFieldValue: newValue });
  };

  // On click search button
  onSearchClick = async () => {
    const phrase = this.state.searchFieldValue.trim();
    await this.getData();
    localStorage.setItem("phrase", phrase);
  };

  // Function of get user data from server
  getData = async (phrase?: string | null) => {
    this.setState({ ...this.state, isFetchingData: true });

    const responseData: typeUserItem[] | null =
      phrase || this.state.searchFieldValue
        ? await getSearchUserList(phrase ?? this.state.searchFieldValue)
        : await getUserList();

    if (responseData) {
      this.setState({
        ...this.state,
        searchFieldValue: phrase ?? this.state.searchFieldValue,
        searchList: responseData,
        isFetchingData: false,
      });
    } else {
      this.setState({ ...this.state, isFetchingData: false });
    }
  };

  // Default user list
  componentDidMount() {
    const phrase = localStorage.getItem("phrase");
    this.getData(phrase).then();
  }

  // Clear user list
  componentDidUpdate(
    prevProps: Readonly<typeAppProps>,
    prevState: Readonly<typeState>,
  ) {
    if (
      prevState.searchFieldValue !== this.state.searchFieldValue &&
      prevState.searchFieldValue &&
      this.state.searchFieldValue === ""
    ) {
      this.getData().then();
    }
  }

  render(): React.ReactElement {
    return (
      <main>
        <ThrowError />
        <SearchField
          searchValue={this.state.searchFieldValue}
          onChangeValue={this.onSearchValue}
          onSearch={this.onSearchClick}
        />
        <SearchList
          searchList={this.state.searchList}
          isLoading={this.state.isFetchingData}
        />
      </main>
    );
  }
}

export default App;
