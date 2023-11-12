import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("Testing Pagination component", () => {
  let pagination: undefined | HTMLElement;
  let first: HTMLElement[];
  let placeholderStart: HTMLElement[];

  describe("test with set 1", () => {
    // const mockContext = {
    //     pagination: {
    //         pageNumber: 1,
    //         totalPages: 10,
    //     },
    //     getData: vi.fn(),
    // };

    beforeEach(() => {
      render(<Pagination />, { wrapper: BrowserRouter });
      pagination = screen.getByTestId("pagination");
      first = screen.queryAllByTestId("pagination-first");
      placeholderStart = screen.queryAllByTestId(
        "pagination-placeholder-start",
      );
      placeholderStart = screen.queryAllByTestId(
        "pagination-placeholder-start",
      );
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(pagination).toBeInTheDocument();
    });

    test("is not exist first", () => {
      expect(first.length).toBe(0);
    });

    test("is not exist start placeholder", () => {
      expect(placeholderStart.length).toBe(0);
    });
  });
});
