import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { userEvent } from "@testing-library/user-event";
import { store } from "../store/store";
import { Provider } from "react-redux";

describe("Testing Pagination component", () => {
  let pagination: undefined | HTMLElement;
  let buttonList: HTMLElement[];
  let placeholder: HTMLElement[];
  const getMovieListData = vi.fn();

  describe("test with set 1", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Pagination
            pageNumber={1}
            itemsPerPage={10}
            totalPages={10}
            totalElements={60}
            getMovieListData={getMovieListData}
          />
        </Provider>,
        { wrapper: BrowserRouter },
      );
      pagination = screen.getByTestId("pagination");
      buttonList = screen.queryAllByTestId("pagination-button");
      placeholder = screen.queryAllByTestId("pagination-placeholder");
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(pagination).toBeInTheDocument();
    });

    test("is exist another buttons", () => {
      expect(buttonList.length).toBe(4);
      expect(placeholder.length).toBe(1);
    });

    test("click button", async () => {
      if (buttonList.length && buttonList[1])
        await userEvent.click(buttonList[1]);
      expect(getMovieListData).toBeCalled();
      expect(location.search.includes("page=2")).toBeTruthy();
    });
  });

  describe("test with set 2", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Pagination
            pageNumber={10}
            itemsPerPage={10}
            totalPages={10}
            totalElements={100}
            getMovieListData={getMovieListData}
          />
        </Provider>,
        { wrapper: BrowserRouter },
      );
      pagination = screen.getByTestId("pagination");
      buttonList = screen.queryAllByTestId("pagination-button");
      placeholder = screen.queryAllByTestId("pagination-placeholder");
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(pagination).toBeInTheDocument();
    });

    test("is exist another buttons", () => {
      expect(buttonList.length).toBe(4);
      expect(placeholder.length).toBe(1);
    });
  });

  describe("test with set 3", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Pagination
            pageNumber={5}
            itemsPerPage={20}
            totalPages={10}
            totalElements={100}
            getMovieListData={getMovieListData}
          />
        </Provider>,
        { wrapper: BrowserRouter },
      );
      pagination = screen.getByTestId("pagination");
      buttonList = screen.queryAllByTestId("pagination-button");
      placeholder = screen.queryAllByTestId("pagination-placeholder");
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(pagination).toBeInTheDocument();
    });

    test("is exist another buttons", () => {
      expect(buttonList.length).toBe(7);
      expect(placeholder.length).toBe(2);
    });
  });
});
