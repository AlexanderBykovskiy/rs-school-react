import { typeSearchFieldContext } from "./SearchFieldContextProvider.types";

export const defaultContext: typeSearchFieldContext = {
  searchValue: "",
  onChangeValue: () => console.log("onChange Search field"),
  onSearch: () => new Promise(() => console.log("onChange Search field")),
};
