import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const mod =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );
  return {
    ...mod,
    useParams: vi
      .fn()
      .mockReturnValue({ per_page: "10", query: "test", page: "1" }),
  };
});

describe("Testing Loader component", () => {
  let main: undefined | HTMLElement;

  beforeEach(() => {
    render(<App />, { wrapper: BrowserRouter });
    main = screen.getByTestId("main-tag");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(main).toBeInTheDocument();
  });
});
