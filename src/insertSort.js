function insertSort(inputArray) {
  let sortedArray = [];

  while (inputArray.length != 0) {
    let maxElement = {
      index: 0,
      value: inputArray[0]
    };
    for (let j = 0; j < inputArray.length; j++) {
      const currentElement = {
        index: j,
        value: inputArray[j]
      };
      
      if (currentElement.value > maxElement.value) maxElement = currentElement;
    }
    sortedArray.unshift(maxElement.value);
    inputArray.splice(maxElement.index, 1);
  }

  return sortedArray
}

export default insertSort;