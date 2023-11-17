import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe("Testing Loader component", () => {
  let searchList: undefined | HTMLElement;

  beforeEach(() => {
    render(<App />, { wrapper: BrowserRouter });
    searchList = screen.getByTestId("search-list");
  });

  afterEach(() => {});

  test("is exist list of movie", () => {
    expect(searchList).toBeInTheDocument();
  });
});
