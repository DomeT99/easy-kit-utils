import { describe, expect, test } from "@jest/globals";
import { isArray } from "./isArray";

describe("isArray suite tests", () => {
  test("return true", () => {
    expect(isArray<number[]>([1, 2, 3])).toBe(true);
  });

  test("return false", () => {
    expect(isArray<number>(2)).toBe(false);
  });
});
