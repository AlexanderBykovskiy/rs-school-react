import React from "react";
import classes from "./Pagination.styles.module.css";
import PaginationButton from "./PaginationButton";
import PaginationPlaceholder from "./PaginationPlaceholder";
import { typePaginationProps } from "./Pagination.types";
import { useAppSelector } from "../store/store";
import { useSearchParams } from "react-router-dom";

const Pagination: React.FC<typePaginationProps> = ({
  pageNumber,
  totalPages,
  getMovieListData,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = useAppSelector((state) => state.search.searchValue);

  const onGoToPage = async (pageNumber: number) => {
    if (pageNumber === 1) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ page: String(pageNumber) });
    }
    await getMovieListData(pageNumber, searchValue);
  };

  return (
    <div className={classes.wrapper} data-testid="pagination">
      <div className={classes.pagination}>
        <div className={classes.paginationContainer}>
          {pageNumber !== 1 && (
            <PaginationButton
              onRedirect={() => onGoToPage(pageNumber - 1)}
              title="&lsaquo;"
              data-testid="pagination-first"
            />
          )}

          {pageNumber > 3 && (
            <PaginationPlaceholder data-testid="pagination-placeholder-start" />
          )}

          {pageNumber > 2 && (
            <PaginationButton
              onRedirect={() => onGoToPage(pageNumber - 2)}
              title={(pageNumber - 2).toString()}
              data-testid="pagination-second"
            />
          )}

          {pageNumber > 1 && (
            <PaginationButton
              onRedirect={() => onGoToPage(pageNumber - 1)}
              title={(pageNumber - 1).toString()}
              data-testid="pagination-third"
            />
          )}

          <PaginationButton
            onRedirect={() => onGoToPage(pageNumber)}
            title={pageNumber.toString()}
            isActive={true}
            data-testid="pagination-active"
          />

          {pageNumber < totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(pageNumber + 1)}
              title={(pageNumber + 1).toString()}
              data-testid="pagination-pre-penult"
            />
          )}

          {pageNumber + 1 < totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(pageNumber + 2)}
              title={(pageNumber + 2).toString()}
              data-testid="pagination-penult"
            />
          )}

          {pageNumber + 2 < totalPages && (
            <PaginationPlaceholder data-testid="pagination-placeholder-end" />
          )}

          {pageNumber !== totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(pageNumber + 1)}
              title="&rsaquo;"
              data-testid="pagination-last"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
