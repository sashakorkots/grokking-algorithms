import algorithmDijkstra from "./algorithmDijkstra"
import { test, expect } from "@jest/globals"

test('should found best sequence for graph', () => { 
  const graph = {
    "A": {"B": 5, "C": 7},
    "B": {"D": 9},
    "C": {"D": 4},
    "D": {}
  }

  expect(algorithmDijkstra(graph, "A", "D")).toStrictEqual(["A", "C", "D"])
})

test('should not found sequence for graph', () => { 
  const graph = {
    "A": {"B": 5, "C": 7},
    "B": {"D": 9},
    "C": {"D": 4},
    "D": {},
    "E": {}
  }

  expect(algorithmDijkstra(graph, "A", "E")).toStrictEqual(null)
})

test('should found best sequence for graph from book', () => { 
  const graph = {
    "A": {"B": 5, "C": 0},
    "B": {"D": 15, "E": 20},
    "C": {"D": 30, "E": 35},
    "D": {"F": 20},
    "E": {"F": 10}
  }

  expect(algorithmDijkstra(graph, "A", "F")).toStrictEqual(["A", "B", "E", "F"])
})