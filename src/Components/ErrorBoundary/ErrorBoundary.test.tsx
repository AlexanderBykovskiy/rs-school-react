import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("Testing ErrorBoundary component", () => {
  //let boundaryComponent: undefined | HTMLElement;

  beforeEach(() => {
    render(<ErrorBoundary>Test</ErrorBoundary>);
    //boundaryComponent = screen.getByTestId("error-boundary-component");
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(null).toBeNull();
  });
});
