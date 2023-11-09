import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Testing Loader component", () => {
  let loader: undefined | HTMLElement;
  let message: undefined | HTMLElement;

  beforeEach(() => {
    render(<Loader />);
    loader = screen.getByTestId("loader");
    message = screen.getByTestId("loader-message");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(loader?.className).include("wrapper");
  });

  test("contain Loading... message", () => {
    expect(message?.innerHTML).toEqual("Loading...");
  });
});
