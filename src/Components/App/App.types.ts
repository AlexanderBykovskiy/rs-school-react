export interface typeUserItem {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface typeState {
  searchFieldValue: string;
  searchList: typeUserItem[] | null;
  isFetchingData: boolean;
}

export interface typeAppProps {}

export interface typeUserResponseItem {
  id: number;
  login: string;
  avatar_url: string;
}
