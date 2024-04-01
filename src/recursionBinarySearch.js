function binarySearch(expectedValue, array) {
  return searchBetween(0, array.length - 1);

  function searchBetween(start, end) {
    const middle = start + Math.round((end - start) / 2);
    const middleValue = array[middle];

    if (start + 1 != end)
      return middleValue == expectedValue;
  
    if (expectedValue < middleValue)
      return searchBetween(start, middle);
    else if (expectedValue > middleValue)
      return searchBetween(middle, end);

    return true;
  }
}

export default binarySearch;
