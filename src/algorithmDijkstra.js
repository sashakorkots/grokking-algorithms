function algorithmDijkstra(graph, start, end) {
  const parents = {}
  const bestWeight = {}
  const nodesPool = [start]
  
  while (nodesPool.length > 0) {
    const node = nodesPool.shift()
    const nodeNeighbours = graph[node] 

    for (const neighbour in nodeNeighbours) {
      const weight = nodeNeighbours[neighbour]
      if (bestWeight[neighbour] && bestWeight[neighbour] < weight)
        continue
      if (!bestWeight[neighbour])
        nodesPool.push(neighbour)

      bestWeight[neighbour] = weight
      parents[neighbour] = node
    }
  }

  if (!bestWeight[end])
    return null 
  return getSequence(end, parents)
}

function getSequence(target, allParents) {
  let targetParent = allParents[target]
  const sequence = [target]
  while (targetParent) {
    sequence.unshift(targetParent)
    targetParent = allParents[targetParent]
  }
  
  return sequence
}

export default algorithmDijkstra