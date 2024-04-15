function defineIntersaction() {
  Set.prototype.intersection = function(otherSet) {
    let intersectionSet = new Set();
    for (let elem of otherSet) {
        if (this.has(elem)) {
            intersectionSet.add(elem);
        }
    }
    return intersectionSet;
  };
}

function defineDifference() {
  Set.prototype.difference = function(otherSet) {
    let intersectionSet = new Set();
    for (let elem of this) {
        if (!otherSet.has(elem)) {
            intersectionSet.add(elem);
        }
    }
    return intersectionSet;
  };
}

function defineUnion() {
  Set.prototype.union = function(otherSet) {
    return new Set([...this, ...otherSet]);
  };
}

function greedyAlgorithmCoverage(states, stationRelations) {
  defineIntersaction()
  defineDifference()
  defineUnion()
  let coveredStates = new Set()
  const usedStations = new Set()
  const notUsedStations = new Map(Object.entries(stationRelations)) 

  while (coveredStates.size !== states.size && notUsedStations.size > 0) {
    const notCoveredStates = states.difference(coveredStates)
    const station = getMaxUsefulStation(notUsedStations, notCoveredStates)
    if (!station)
      break 
    usedStations.add(station)
    notUsedStations.delete(station)
    coveredStates = coveredStates.union(stationRelations[station])
  }

  return usedStations
}

function getMaxUsefulStation(notUsedStations, notCoveredStates) {
  let maxUsefulStation = ""
  let maxUsefulIntersection = new Set()
  for (const [station, states] of notUsedStations) {
    const currentUsefulIntersaction = notCoveredStates.intersection(states)
    if (maxUsefulIntersection.size < currentUsefulIntersaction.size) {
      maxUsefulStation = station
      maxUsefulIntersection = currentUsefulIntersaction
    }
  }

  return maxUsefulStation
}

export default greedyAlgorithmCoverage