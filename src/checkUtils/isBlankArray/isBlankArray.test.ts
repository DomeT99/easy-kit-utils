import { describe, expect, test } from "@jest/globals";
import { isBlankArray } from "./isBlankArray";

describe("isBlankArray suite tests", () => {
  test("return true", () => {
    expect(isBlankArray<number>([1, 2, 3])).toBe(false);
  });

  test("return false", () => {
    expect(isBlankArray<number>([])).toBe(true);
  });
});
