function max(array) {
  const currentElement = array[0];
  if (array.length < 2)
    return currentElement;
  
  array.shift();
  const currentMax = max(array);

  if (currentElement > currentMax)
    return currentElement;  
  return currentMax;
}

export default max;