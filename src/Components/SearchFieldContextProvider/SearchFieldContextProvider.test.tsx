import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../Loader/Loader";
import SearchFieldContextProvider from "./SearchFieldContextProvider";
import { defaultContext } from "./SearchFieldContextProvider.constants";

describe("Testing AppContextProvider component", () => {
  let loader: undefined | HTMLElement;

  beforeEach(() => {
    render(
      <SearchFieldContextProvider contextValue={defaultContext}>
        <Loader />
      </SearchFieldContextProvider>,
    );
    loader = screen.getByTestId("loader");
  });

  afterEach(() => {});

  test("is exist children", () => {
    expect(loader).toBeInTheDocument();
  });
});
