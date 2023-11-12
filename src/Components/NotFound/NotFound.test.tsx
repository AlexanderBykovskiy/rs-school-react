import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "./NotFound";

describe("Testing NotFound component", () => {
  let notFound: undefined | HTMLElement;

  beforeEach(() => {
    render(<NotFound />);
    notFound = screen.getByTestId("not-found-page");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(notFound).toBeInTheDocument();
  });
});
