function breadthFirstSearch(start, graph, isFinish) {
  const nodePull = graph[start]
  const visitedNodes = {}

  while (nodePull.length > 0) {
    const currentNode = nodePull.shift()
    if (visitedNodes[currentNode])
      continue
    visitedNodes[currentNode] = true

    if (isFinish(currentNode))
      return currentNode
    
    if (graph[currentNode])
      nodePull.push(...graph[currentNode])
  }

  return null
}

export default breadthFirstSearch