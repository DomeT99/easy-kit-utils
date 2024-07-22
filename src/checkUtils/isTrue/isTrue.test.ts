import { describe, expect, test } from "@jest/globals";
import { isTrue } from "./isTrue";

describe("isTrue suite tests", () => {
  test("return true", () => {
    expect(isTrue(true)).toBe(true);
  });

  test("return false", () => {
    expect(isTrue(false)).toBe(false);
  });
});
