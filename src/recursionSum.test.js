import sum from "./recursionSum";
import { test, expect } from "@jest/globals"

test('should sort array', () => {
  let inputArray = [10, 9, 43, 2];

  expect(sum(inputArray)).toBe(64)
})

