import React from "react";
import classes from "./SearchList.styles.module.css";
import { SearchListItem } from "./SearchListItem";
import {typeSearchListProps} from "@/components/SearchList/SearchListItem.types";
import {typePaginationProps} from "@/components/Pagination/Pagination.types";
import Pagination from "../Pagination/Pagination";
import {paramsCreator} from "@/utils/paramsCreator";

const SearchList: React.FC<typeSearchListProps> = ({ data, searchPhrase }) => {

    const pagination: typePaginationProps | null = data
    ? {
        pageNumber: data.page,
        itemsPerPage: 20,
        totalElements: data.total_results,
        totalPages: data.total_pages,
    }
    : null

    const params = paramsCreator(
        pagination?.pageNumber ? String(pagination.pageNumber) : null,
        pagination?.itemsPerPage ? String(pagination.itemsPerPage) : null,
        searchPhrase ? searchPhrase : null
        )

  return (
    <div className={classes.container} data-testid="search-list">
      {data !== null && data.results?.length === 0 && (
        <div data-testid="search-list-empty">
          Поиск не дал результатов. Попробуйте еще раз.
        </div>
      )}
      <div className={classes.wrapper} data-testid="search-list-not-empty">
        {data?.results &&
            data.results.map((item) => {
            const releaseData = new Date(item.release_date);
            return (
              <SearchListItem
                id={item.id}
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                releaseData={releaseData}
                searchParams={params}
              />
            );
          })}
      </div>

      {data?.results && pagination?.totalPages && pagination.totalPages > 1 && (
        <Pagination {...pagination} />
      )}

      {/*isLoading && <Loader />*/}
    </div>
  );
};

export default SearchList;
