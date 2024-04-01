import { test, expect } from "@jest/globals"
import breadthFirstSearch from "./breadthFirstSearch"

test('Find developer in people', () => {
  const peopleRelationGraph = {
    'Guts': ['Griffith', 'Casca', 'Farnese'],
    'Casca': ['Judeau'],
    'Judeau': ['Pippin'],
    'Pippin': ['Corkus', 'Rickert'],
    'Corkus': ['Charlotte', 'Me'],
  }

  const start = 'Guts'
  const isFinish = (name) => name == 'Me'
  expect(breadthFirstSearch(start , peopleRelationGraph, isFinish)).toBe('Me')
})

test('Find developer in people with circle relation', () => {
  const peopleRelationGraph = {
    'Guts': ['Griffith', 'Judeau', 'Casca', 'Farnese'],
    'Casca': ['Judeau', 'Guts'],
    'Judeau': ['Pippin', 'Casca'],
    'Pippin': ['Corkus', 'Rickert'],
    'Corkus': ['Charlotte'],
  }

  const start = 'Guts'
  const isFinish = (name) => name == 'Me'
  expect(breadthFirstSearch(start , peopleRelationGraph, isFinish)).toBe(null)
})
