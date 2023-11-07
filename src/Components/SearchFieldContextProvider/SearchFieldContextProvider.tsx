import React from "react";
import { defaultContext } from "./SearchFieldContextProvider.constants";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {
  typeSearchFieldContext,
  typeSearchFieldContextProviderProps,
} from "./SearchFieldContextProvider.types";

export const SearchFieldContext: React.Context<typeSearchFieldContext> =
  React.createContext(defaultContext);

const SearchFieldContextProvider: React.FC<
  typeSearchFieldContextProviderProps
> = ({ children, contextValue }) => {
  return (
    <ErrorBoundary>
      <SearchFieldContext.Provider value={contextValue}>
        {children}
      </SearchFieldContext.Provider>
    </ErrorBoundary>
  );
};

export default SearchFieldContextProvider;
