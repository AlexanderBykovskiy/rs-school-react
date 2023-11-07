import React from "react";
import {
  typeAppContext,
  typeContextProviderProps,
} from "./AppContextProvider.types";
import { defaultContext } from "./AppContextProvider.constants";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export const AppContext: React.Context<typeAppContext> =
  React.createContext(defaultContext);

const AppContextProvider: React.FC<typeContextProviderProps> = ({
  children,
  contextValue,
}) => {
  return (
    <ErrorBoundary>
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    </ErrorBoundary>
  );
};

export default AppContextProvider;
