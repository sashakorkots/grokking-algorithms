function binarySearch(input, array) {
  let start = 0;
  let end = array.length - 1; 

  while(start + 1 != end) {
    const middle = Math.floor((start + end) / 2);
    const middleValue = array[middle];

    if(middleValue > input) 
      end = middle;
    else if(middleValue < input) 
      start = middle;
    else
      return true;
  }

  return false;
}

export default binarySearch;
