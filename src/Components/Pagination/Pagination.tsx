import React, { useContext } from "react";
import classes from "./Pagination.styles.module.css";
import PaginationButton from "./PaginationButton";
import PaginationPlaceholder from "./PaginationPlaceholder";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../AppContextProvider/AppContextProvider";
import { typeAppContext } from "../AppContextProvider/AppContextProvider.types";

const Pagination: React.FC = () => {
  const { pagination: paginationObj, getData } = useContext(
    AppContext,
  ) as typeAppContext;

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");
  const perPage = searchParams.get("per_page");

  const onGoToPage = async (pageNumber: number) => {
    const newSearchParamsObj: {
      query?: string;
      page?: string;
      per_page?: string;
    } = {};
    if (query) newSearchParamsObj.query = query;
    if (perPage) newSearchParamsObj.per_page = perPage;
    newSearchParamsObj.page = String(pageNumber);
    await getData(pageNumber, Number(perPage) ?? 20, query ?? undefined);
    setSearchParams(newSearchParamsObj);
  };

  return (
    <div className={classes.wrapper} data-testid="pagination">
      <div className={classes.pagination}>
        <div className={classes.paginationContainer}>
          {paginationObj.pageNumber !== 1 && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber - 1)}
              title="&lsaquo;"
              data-testid="pagination-first"
            />
          )}

          {paginationObj.pageNumber > 3 && (
            <PaginationPlaceholder data-testid="pagination-placeholder-start" />
          )}

          {paginationObj.pageNumber > 2 && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber - 2)}
              title={(paginationObj.pageNumber - 2).toString()}
              data-testid="pagination-second"
            />
          )}

          {paginationObj.pageNumber > 1 && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber - 1)}
              title={(paginationObj.pageNumber - 1).toString()}
              data-testid="pagination-third"
            />
          )}

          <PaginationButton
            onRedirect={() => onGoToPage(paginationObj.pageNumber)}
            title={paginationObj.pageNumber.toString()}
            isActive={true}
            data-testid="pagination-active"
          />

          {paginationObj.pageNumber < paginationObj.totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber + 1)}
              title={(paginationObj.pageNumber + 1).toString()}
              data-testid="pagination-pre-penult"
            />
          )}

          {paginationObj.pageNumber + 1 < paginationObj.totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber + 2)}
              title={(paginationObj.pageNumber + 2).toString()}
              data-testid="pagination-penult"
            />
          )}

          {paginationObj.pageNumber + 2 < paginationObj.totalPages && (
            <PaginationPlaceholder data-testid="pagination-placeholder-end" />
          )}

          {paginationObj.pageNumber !== paginationObj.totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber + 1)}
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
