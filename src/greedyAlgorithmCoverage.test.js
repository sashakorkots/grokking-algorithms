import greedyAlgorithmCoverage from "./greedyAlgorithmCoverage"
import { test, expect } from "@jest/globals"

test('should found best sequence for graph', () => { 
  const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
  const stations = {
    "kone": new Set(["id", "nv", "ut"]),
    "ktwo": new Set(["wa", "id", "mt"]),
    "kthree": new Set(["or", "nv", "ca"]),
    "kfour": new Set(["nv", "ut"]),
    "kfive": new Set(["ca", "az"])
  }

  expect(greedyAlgorithmCoverage(statesNeeded, stations)).toStrictEqual(new Set(["kone", "ktwo", "kthree", "kfive"]))
})

test('should found best sequence for graph if stations didn*t covere all states', () => { 
  const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
  const stations = {
    "kone": new Set(["id", "nv", "ut"]),
    "ktwo": new Set(["wa", "id", "mt"]),
    "kthree": new Set(["or", "nv", "ca"]),
    "kfour": new Set(["nv", "ut"])
  }

  expect(greedyAlgorithmCoverage(statesNeeded, stations)).toStrictEqual(new Set(["kone", "ktwo", "kthree"]))
})