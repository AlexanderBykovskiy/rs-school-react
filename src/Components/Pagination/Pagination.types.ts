export interface typePaginationObj {
  itemsPerPage: number;
  pageNumber: number;
  totalElements: number;
  totalPages: number;
}

export interface typePaginationProps {
  paginationObj: typePaginationObj;
  getData: (page: number, perPage: number, phrase?: string) => Promise<void>;
}

export interface typePaginationButtonProps {
  title: string;
  onRedirect: () => void;
  isActive?: boolean;
}
