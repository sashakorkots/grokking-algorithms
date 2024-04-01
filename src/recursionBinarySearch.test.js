import binarySearch from "./recursionBinarySearch";
import { test, expect } from "@jest/globals"

test('should find element', () => {
  expect(binarySearch(30, [10, 15, 16, 30, 84, 95])).toBe(true)
})

test('should not find element', () => {
  expect(binarySearch(100, [10, 15, 16, 30, 84, 95])).toBe(false)
})

