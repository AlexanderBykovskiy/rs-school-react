import { describe, expect, test } from "vitest";
import { sum } from "./sum";

describe("Testing Utils", (): void => {
  test("Adds 1 + 2 to equal 3", (): void => {
    expect(sum(1, 2)).toBe(3);
  });
});
