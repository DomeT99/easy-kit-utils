import { describe, expect, test } from "@jest/globals";
import { isEmptyString } from "./isEmptyString";

describe("isEmptyString suite tests", () => {
  test("return true", () => {
    expect(isEmptyString("")).toBe(true);
  });

  test("return false", () => {
    expect(isEmptyString("Hi from suite test")).toBe(false);
  });
});
