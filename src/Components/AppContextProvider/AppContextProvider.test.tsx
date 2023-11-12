import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppContextProvider from "./AppContextProvider";
import Loader from "../Loader/Loader";
import { defaultContext } from "./AppContextProvider.constants";

describe("Testing AppContextProvider component", () => {
  let loader: undefined | HTMLElement;

  beforeEach(() => {
    render(
      <AppContextProvider contextValue={defaultContext}>
        <Loader />
      </AppContextProvider>,
    );
    loader = screen.getByTestId("loader");
  });

  afterEach(() => {});

  test("is exist children", () => {
    expect(loader).toBeInTheDocument();
  });
});
