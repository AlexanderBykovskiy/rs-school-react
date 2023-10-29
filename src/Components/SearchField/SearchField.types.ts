export interface typeState {}

export interface typeProps {
  searchValue: string;
  onChangeValue: (value: string) => void;
  onSearch: () => void;
}
