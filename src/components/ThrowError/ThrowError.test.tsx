import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ThrowError from "./ThrowError";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { userEvent } from "@testing-library/user-event";

describe("Testing ThrowError component", () => {
  let button: undefined | HTMLElement;

  beforeEach(() => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );
    button = screen.getByTestId("throw-error-button");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(button).toBeInTheDocument;
  });

  test("throw error", async () => {
    if (button) await userEvent.click(button);
    expect(screen.getByTestId("error-boundary-component")).toBeInTheDocument;
  });
});
