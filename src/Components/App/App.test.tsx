import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import createFetchMock from "vitest-fetch-mock";
import { store } from "../store/store";
import React from "react";
import { Provider } from "react-redux";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe("Testing Loader component", () => {
  let searchList: undefined | HTMLElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    searchList = screen.getByTestId("search-list");
  });

  afterEach(() => {});

  test("is exist list of movie", () => {
    expect(searchList).toBeInTheDocument();
  });
});
