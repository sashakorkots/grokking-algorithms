import max from "./recursionMax";
import { test, expect } from "@jest/globals"

test('should sort array', () => {
  let inputArray = [10, 9, 43, 2];

  expect(max(inputArray)).toBe(43)
})

