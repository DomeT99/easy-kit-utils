import { describe, expect, test } from "@jest/globals";
import { isMajorNumber } from "./isMajorNumber";

describe("isMajorNumber suite tests", () => {
  test("return true", () => {
    expect(isMajorNumber(5, 3)).toBe(true);
  });

  test("return false", () => {
    expect(isMajorNumber(2, 7)).toBe(false);
  });
});
