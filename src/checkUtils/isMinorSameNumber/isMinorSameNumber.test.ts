import { describe, expect, test } from "@jest/globals";
import { isMinorSameNumber } from "./isMinorSameNumber";

describe("isMinorSameNumber suite tests", () => {
  test("return true", () => {
    expect(isMinorSameNumber(3, 3)).toBe(true);
  });

  test("return false", () => {
    expect(isMinorSameNumber(9, 7)).toBe(false);
  });
});
