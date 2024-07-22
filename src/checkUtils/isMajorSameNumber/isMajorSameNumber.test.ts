import { describe, expect, test } from "@jest/globals";
import { isMajorSameNumber } from "./isMajorSameNumber";

describe("isMajorSameNumber suite tests", () => {
  test("return true", () => {
    expect(isMajorSameNumber(5, 5)).toBe(true);
  });

  test("return false", () => {
    expect(isMajorSameNumber(2, 7)).toBe(false);
  });
});
