import counter from "./recursionCounter";
import { test, expect } from "@jest/globals"

test('should sort array', () => {
  let inputArray = [10, 9, 43, 2];

  expect(counter(inputArray)).toBe(4)
})

