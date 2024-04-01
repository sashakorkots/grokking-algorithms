function quickSort(array) {
  if (array.length < 2)
    return array
  
  const targetIndex = Math.round((array.length - 1) / 2)
  const targetElement = array[targetIndex]

  let left = []  // array.filter(el => el < targetElement)
  let right = []  // array.filter(el => el > targetElement)
  let middle = []  // array.filter(el => el == targetElement)
  array.forEach((element) => {
    if (element == targetElement)
      return middle.push(element)
    if (element > targetElement)
      return right.push(element)
    if (element < targetElement)
      return left.push(element)
  });

  return [...quickSort(left), ...middle, ...quickSort(right)]
}

export default quickSort