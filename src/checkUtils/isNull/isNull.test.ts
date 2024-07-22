import { describe, expect, test } from "@jest/globals";
import { isNull } from "./isNull";

describe("isNull suite tests", () => {
  test("return true", () => { 
    expect(isNull<null>(null)).toBe(true);
  });

  test("return false", () => {
    expect(isNull<number>(4)).toBe(false);
  });
});
