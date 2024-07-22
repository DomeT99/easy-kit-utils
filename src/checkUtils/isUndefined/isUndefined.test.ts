import { describe, expect, test } from "@jest/globals";
import { isUndefined } from "./isUndefined";

describe("isUndefined suite tests", () => {
  test("return true", () => {
    expect(isUndefined<string>(undefined)).toBe(true);
  });

  test("return false", () => {
    expect(isUndefined<string>("Hello from suite test!")).toBe(false);
  });
});
