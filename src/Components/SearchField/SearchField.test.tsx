import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchField from "./SearchField";
import SearchFieldContextProvider from "../SearchFieldContextProvider/SearchFieldContextProvider";
import { typeSearchFieldContext } from "../SearchFieldContextProvider/SearchFieldContextProvider.types";
import { userEvent } from "@testing-library/user-event";

describe("Testing Loader component", () => {
  let searchForm: undefined | HTMLElement;
  let searchInput: undefined | HTMLElement;
  let searchButton: undefined | HTMLElement;

  const onChange = vi.fn();
  const onSearch = vi.fn();

  const mockData: typeSearchFieldContext = {
    searchValue: "test",
    onChangeValue: onChange,
    onSearch: onSearch,
  };

  beforeEach(() => {
    render(
      <SearchFieldContextProvider contextValue={mockData}>
        <SearchField />
      </SearchFieldContextProvider>,
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

  test("testing on change", async () => {
    if (searchInput) await userEvent.type(searchInput, "test1");
    expect(onChange).toBeCalledWith("test1");
  });

  test("testing on search", async () => {
    if (searchButton) await userEvent.click(searchButton);
    expect(onSearch).toBeCalled();
  });
});
