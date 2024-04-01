import { expect, test } from "@jest/globals"
import quickSort from "./quickSort"

test('Sort array', () => {
  const array = [10, 9, 43, 2];
  
  expect(quickSort(array)).toStrictEqual([2, 9, 10, 43])
})

test('Sort array of non distict values', () => {
  const array = [10, 9, 43, 43, 2];
  
  expect(quickSort(array)).toStrictEqual([2, 9, 10, 43, 43])
})
