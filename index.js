function findMinAndRemove(array){
  array.sort()
  //return array[0]
  let smallest = array[0]
  array.shift()
  return smallest
}

function insertionSort(array){
  findMinAndRemove(array)
}
