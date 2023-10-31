import { typeUserItem } from "../App/App.types";

export interface typeState {}

export interface typeProps {
  searchList: typeUserItem[] | null;
  isLoading: boolean;
}
