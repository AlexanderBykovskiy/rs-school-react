import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ThrowError from "./ThrowError";

describe("Testing ThrowError component", () => {
  let button: undefined | HTMLElement;

  beforeEach(() => {
    render(<ThrowError />);
    button = screen.getByTestId("throw-error-button");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(button).toBeInTheDocument;
  });
});
