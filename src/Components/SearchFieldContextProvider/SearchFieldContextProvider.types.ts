import { PropsWithChildren } from "react";

export interface typeSearchFieldContext {
  searchValue: string | null;
  onChangeValue: (newValue: string) => void;
  onSearch: () => Promise<void>;
}

export interface typeSearchFieldContextProviderProps extends PropsWithChildren {
  contextValue: typeSearchFieldContext;
}
