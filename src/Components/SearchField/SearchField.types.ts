export interface typeProps {
  dataIsLoading: boolean;
  searchValue: string;
  onChangeValue: (value: string) => void;
  onSearch: () => void;
}
