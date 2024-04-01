import insertSort from "./insertSort";
import { test, expect } from "@jest/globals"

test('should sort array', () => {
  let inputArray = [10, 9, 43, 2];

  expect(insertSort(inputArray)).toStrictEqual([2, 9, 10, 43])
})

