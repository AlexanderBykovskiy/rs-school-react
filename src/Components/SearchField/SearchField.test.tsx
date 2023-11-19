import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchField from "./SearchField";
import { userEvent } from "@testing-library/user-event";
import { store } from "../store/store";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Testing Loader component", () => {
  let searchForm: undefined | HTMLElement;
  let searchInput: undefined | HTMLElement;
  let searchButton: undefined | HTMLElement;

  const getMovieListData = vi.fn();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchField getMovieListData={getMovieListData} />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    searchForm = screen.getByTestId("search-form");
    searchInput = screen.getByTestId("search-input");
    searchButton = screen.getByTestId("search-button");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(searchForm).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("testing fetching data", async () => {
    if (searchInput && searchButton) {
      await userEvent.type(searchInput, "test1");
      await userEvent.click(searchButton);
      expect(getMovieListData).toBeCalled();
    }
  });
});
