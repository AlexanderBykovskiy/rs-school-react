import { store } from "./store";

export type typeRootState = ReturnType<typeof store.getState>;
export type typeAppDispatch = typeof store.dispatch;

export enum genderList {
  male = "man",
  female = "woman",
}

export interface typeResult {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  accept: boolean;
  image: string;
  country: string;
}

export interface typeAppState {
  results: typeResultListState;
  countries: string[];
}

export interface typeResultListState {
  resultList: typeResult[];
}

export interface typeCountriesState {
  countryList: string[];
}
