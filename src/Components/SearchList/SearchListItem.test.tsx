import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchListItem } from "./SearchListItem";
import { typeSearchListItemProps } from "./SearchListItem.types";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { IMG_URL } from "../API/api.constants";

describe("Testing SearchListItem component", () => {
  let card: undefined | HTMLElement;
  let image: undefined | HTMLImageElement;
  let title: undefined | HTMLElement;
  let date: undefined | HTMLElement;

  const mockData: typeSearchListItemProps = {
    id: 1,
    title: "Test title",
    releaseData: new Date("2023-10-01"),
  };
  const imageUrl = "photo.jpg";
  const outputDate = "2023";

  describe("testing without photo", () => {
    beforeEach(() => {
      render(
        <SearchListItem
          id={mockData.id}
          title={mockData.title}
          releaseData={mockData.releaseData}
        />,
        { wrapper: BrowserRouter },
      );
      card = screen.getByTestId("search-list-item");
      image = screen.getByTestId("search-list-item-image") as HTMLImageElement;
      title = screen.getByTestId("search-list-item-title");
      date = screen.getByTestId("search-list-item-release");
    });

    afterEach(() => {});

    test("is exist card", () => {
      expect(card).toBeInTheDocument();
    });

    test("is exist correct empty image", () => {
      expect(image).toBeInTheDocument();
      expect(image?.src).toContain("no-image.jpg");
    });

    test("is exist correct title", () => {
      expect(title).toBeInTheDocument();
      expect(title?.textContent).toEqual(mockData.title);
    });

    test("is exist correct date", () => {
      expect(date).toBeInTheDocument();
      expect(date?.textContent).toEqual(outputDate);
    });
  });

  describe("testing with photo", () => {
    test("is exist correct image", () => {
      render(
        <SearchListItem
          id={mockData.id}
          poster_path={imageUrl}
          title={mockData.title}
          releaseData={mockData.releaseData}
        />,
        { wrapper: BrowserRouter },
      );

      card = screen.getByTestId("search-list-item");
      image = screen.getByTestId("search-list-item-image") as HTMLImageElement;
      title = screen.getByTestId("search-list-item-title");
      date = screen.getByTestId("search-list-item-release");

      expect(image).toBeInTheDocument();
      expect(image?.src).toContain(IMG_URL);
      expect(image?.src).toContain(imageUrl);
    });
  });
});
