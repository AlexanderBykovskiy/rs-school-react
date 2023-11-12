import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SearchList from "./SearchList";
import { defaultContext } from "../AppContextProvider/AppContextProvider.constants";
import { typeAppContext } from "../AppContextProvider/AppContextProvider.types";
import { AppContext } from "../AppContextProvider/AppContextProvider";
import { BrowserRouter } from "react-router-dom";
describe("Testing SearchList component", () => {
  let searchList: undefined | HTMLElement;
  let searchListEmpty: undefined | HTMLElement;
  let searchListNoEmpty: undefined | HTMLElement;
  let pagination: undefined | HTMLElement;
  let loader: undefined | HTMLElement;

  describe("testing without results", () => {
    beforeEach(() => {
      const mockData: typeAppContext = { ...defaultContext, movieList: [] };

      render(
        <AppContext.Provider value={mockData}>
          <SearchList />
        </AppContext.Provider>,
      );

      searchList = screen.getByTestId("search-list");
      searchListEmpty = screen.getByTestId("search-list-empty");
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(searchList).toBeInTheDocument();
    });

    test("is exist message", () => {
      expect(searchListEmpty).toBeInTheDocument();
      expect(searchListEmpty?.textContent).toContain(
        "Поиск не дал результатов. Попробуйте еще раз.",
      );
    });
  });

  describe("testing with results", () => {
    beforeEach(() => {
      const mockData: typeAppContext = {
        ...defaultContext,
        pagination: {
          itemsPerPage: 20,
          pageNumber: 1,
          totalElements: 22,
          totalPages: 2,
        },
        movieList: [
          {
            id: 1,
            title: "Title 1",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 2,
            title: "Title 2",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 3,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 4,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 5,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 6,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 7,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 8,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 9,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 10,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 11,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 12,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 13,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 14,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 15,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 16,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 17,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 18,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 18,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
          {
            id: 20,
            title: "Title 3",
            adult: false,
            original_title: "Origin title",
            popularity: 10,
            original_language: "en",
            vote_average: 10,
            vote_count: 10,
            release_date: "2023-10-10",
          },
        ],
      };

      render(
        <AppContext.Provider value={mockData}>
          <SearchList />
        </AppContext.Provider>,
        { wrapper: BrowserRouter },
      );

      searchList = screen.getByTestId("search-list");
      searchListNoEmpty = screen.getByTestId("search-list-not-empty");
      pagination = screen.getByTestId("pagination");
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(searchList).toBeInTheDocument();
    });

    test("is exist message", () => {
      expect(searchListNoEmpty).toBeInTheDocument();
      expect(screen.queryAllByTestId("search-list-item").length).toEqual(20);
    });

    test("is exist pagination", () => {
      expect(pagination).toBeInTheDocument();
    });
  });

  describe("testing loader", () => {
    beforeEach(() => {
      const mockData: typeAppContext = {
        ...defaultContext,
        movieList: [],
        isFetchingData: true,
      };

      render(
        <AppContext.Provider value={mockData}>
          <SearchList />
        </AppContext.Provider>,
      );

      loader = screen.getByTestId("loader");
    });

    afterEach(() => {});

    test("is exist loader", () => {
      expect(loader).toBeInTheDocument();
    });
  });
});
