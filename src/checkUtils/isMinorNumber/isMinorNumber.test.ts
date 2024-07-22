import { describe, expect, test } from "@jest/globals";
import { isMinorNumber } from "./isMinorNumber";

describe("isMinorNumber suite tests", () => {
  test("return true", () => {
    expect(isMinorNumber(1, 3)).toBe(true);
  });

  test("return false", () => {
    expect(isMinorNumber(9, 7)).toBe(false);
  });
});
