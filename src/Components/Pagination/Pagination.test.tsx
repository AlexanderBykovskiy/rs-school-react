import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import AppContextProvider from "../AppContextProvider/AppContextProvider";
import { defaultContext } from "../AppContextProvider/AppContextProvider.constants";
import { typeAppContext } from "../AppContextProvider/AppContextProvider.types";
import { userEvent } from "@testing-library/user-event";

describe("Testing Pagination component", () => {
  let pagination: undefined | HTMLElement;
  let buttonList: HTMLElement[];
  let placeholder: HTMLElement[];
  const getData = vi.fn();

  const paginationRender = (mockContext: typeAppContext) => {
    render(
      <AppContextProvider contextValue={mockContext}>
        <Pagination />
      </AppContextProvider>,
      { wrapper: BrowserRouter },
    );
    return {
      pagination: screen.getByTestId("pagination"),
      buttonList: screen.getAllByTestId("pagination-button"),
      placeholder: screen.getAllByTestId("pagination-placeholder"),
    };
  };

  describe("test with set 1", () => {
    const mockContext: typeAppContext = {
      ...defaultContext,
      pagination: {
        pageNumber: 1,
        totalPages: 10,
        itemsPerPage: 10,
        totalElements: 60,
      },
      getData: getData,
    };

    beforeEach(() => {
      const renderData = paginationRender(mockContext);
      pagination = renderData.pagination;
      buttonList = renderData.buttonList;
      placeholder = renderData.placeholder;
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
      if (buttonList.length && buttonList[0])
        await userEvent.click(buttonList[0]);
      expect(getData).toBeCalled();
    });
  });

  describe("test with set 2", () => {
    const mockContext: typeAppContext = {
      ...defaultContext,
      pagination: {
        pageNumber: 10,
        totalPages: 10,
        itemsPerPage: 10,
        totalElements: 100,
      },
      getData: getData,
    };

    beforeEach(() => {
      const renderData = paginationRender(mockContext);
      pagination = renderData.pagination;
      buttonList = renderData.buttonList;
      placeholder = renderData.placeholder;
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
    const mockContext: typeAppContext = {
      ...defaultContext,
      pagination: {
        pageNumber: 5,
        totalPages: 20,
        itemsPerPage: 10,
        totalElements: 100,
      },
      getData: getData,
    };

    beforeEach(() => {
      const renderData = paginationRender(mockContext);
      pagination = renderData.pagination;
      buttonList = renderData.buttonList;
      placeholder = renderData.placeholder;
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
