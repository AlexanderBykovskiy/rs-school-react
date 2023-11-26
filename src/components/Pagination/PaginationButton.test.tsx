import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationButton from "./PaginationButton";
import { typePaginationButtonProps } from "./Pagination.types";
import { userEvent } from "@testing-library/user-event";

describe("Testing PaginationButton component", () => {
  let button: undefined | HTMLButtonElement;
  const onClick = vi.fn();

  describe("testing active component", () => {
    const mockData: typePaginationButtonProps = {
      title: "7",
      onRedirect: onClick,
      isActive: true,
    };

    beforeEach(() => {
      render(
        <PaginationButton
          title={mockData.title}
          onRedirect={onClick}
          isActive={mockData.isActive}
        />,
      );
      button = screen.getByTestId("pagination-button") as HTMLButtonElement;
    });

    afterEach(() => {});

    test("is exist", () => {
      expect(button).toBeInTheDocument();
    });

    test("is correct value", () => {
      expect(button?.textContent).toEqual(mockData.title);
    });

    test("is clicked", async () => {
      if (button) await userEvent.click(button);
      expect(onClick).toBeCalled();
    });

    test("added isActive classes", () => {
      expect(button?.className).toContain("active");
    });
  });

  describe("testing inactive component", () => {
    const mockData: typePaginationButtonProps = {
      title: "7",
      onRedirect: onClick,
      isActive: false,
    };

    beforeEach(() => {
      render(
        <PaginationButton
          title={mockData.title}
          onRedirect={onClick}
          isActive={mockData.isActive}
        />,
      );
      button = screen.getByTestId("pagination-button") as HTMLButtonElement;
    });

    afterEach(() => {});

    test("added isActive classes", () => {
      expect(button?.className).not.toContain("active");
    });
  });
});
