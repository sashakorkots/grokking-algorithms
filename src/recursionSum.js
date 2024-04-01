function sum(array) {
  const clonedArray = [...array];
  return _sum(clonedArray);

  function _sum(array) {
    const currentElement = array[0];
    if (array.length < 2)
      return currentElement;
    
    array.shift();
    return currentElement + sum(array);
  }
}

export default sum;