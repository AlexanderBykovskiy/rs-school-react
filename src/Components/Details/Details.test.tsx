import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Details from "./Details";
import { BrowserRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const mod =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );
  return {
    ...mod,
    useParams: vi.fn().mockReturnValue({ movieId: "1" }),
  };
});

describe("Testing Details component", () => {
  let details: undefined | HTMLElement;

  beforeEach(() => {
    render(<Details />, { wrapper: BrowserRouter });
    details = screen.getByTestId("details");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(details).toBeInTheDocument();
  });
});
