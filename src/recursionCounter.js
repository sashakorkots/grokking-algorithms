function counter(array) {
  const clonedArray = [...array];
  return _counter(clonedArray);

  function _counter(array) {
    if (array.length < 2)
      return 1;
    
    array.shift();
    return 1 + _counter(array);
  }
}

export default counter;