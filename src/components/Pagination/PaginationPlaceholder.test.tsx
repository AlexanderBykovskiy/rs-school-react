import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationPlaceholder from "./PaginationPlaceholder";

describe("Testing Loader component", () => {
  let placeholder: undefined | HTMLElement;

  beforeEach(() => {
    render(<PaginationPlaceholder />);
    placeholder = screen.getByTestId("pagination-placeholder");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(placeholder).toBeInTheDocument();
    expect(placeholder?.textContent).toEqual("...");
  });
});
