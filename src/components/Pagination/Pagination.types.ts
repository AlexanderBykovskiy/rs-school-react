export interface typePaginationObj {
  itemsPerPage: number;
  pageNumber: number;
  totalElements: number;
  totalPages: number;
}

export type typePaginationProps = typePaginationObj;

export interface typePaginationButtonProps {
  title: string;
  onRedirect: () => void;
  isActive?: boolean;
}
