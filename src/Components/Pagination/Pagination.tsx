import React from "react";
import { typePaginationProps } from "./Pagination.types";
import classes from "./Pagination.styles.module.css";
import PaginationButton from "./PaginationButton";
import PaginationPlaceholder from "./PaginationPlaceholder";
import { useSearchParams } from "react-router-dom";

const Pagination: React.FC<typePaginationProps> = ({
  paginationObj,
  getData,
}) => {
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
    <div className={classes.wrapper}>
      <div className={classes.pagination}>
        <div className={classes.paginationContainer}>
          {paginationObj.pageNumber !== 1 && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber - 1)}
              title="&lsaquo;"
            />
          )}

          {paginationObj.pageNumber > 2 && <PaginationPlaceholder />}

          {paginationObj.pageNumber > 1 && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber - 1)}
              title={(paginationObj.pageNumber - 1).toString()}
            />
          )}

          <PaginationButton
            onRedirect={() => onGoToPage(paginationObj.pageNumber)}
            title={paginationObj.pageNumber.toString()}
            isActive={true}
          />

          {paginationObj.pageNumber < paginationObj.totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber + 1)}
              title={(paginationObj.pageNumber + 1).toString()}
            />
          )}

          {paginationObj.pageNumber + 2 < paginationObj.totalPages && (
            <PaginationPlaceholder />
          )}

          {paginationObj.pageNumber !== paginationObj.totalPages && (
            <PaginationButton
              onRedirect={() => onGoToPage(paginationObj.pageNumber + 1)}
              title="&rsaquo;"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
