var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  var array1 = ["foo", 1]
  return array1.unshift("object0")
}

function removeElementFromBeginningOfArray() {
  var removeElementFromBeginningOfArray = [1, 2, 3]
  removeElementFromBeginningOfArray = removeElementFromBeginningOfArray.slice(1)
  removeElementFromBeginningOfArray
}


function destructivelyRemoveElementFromEndOfArray() {
  var destructivelyRemoveElementFromEndOfArray = [1, 2, 3]
  destructivelyRemoveElementFromEndOfArray.pop()
  return destructivelyRemoveElementFromEndOfArray
}

function removeElementFromEndOfArray () {
  var removeElementFromEndOfArray = [1, 2, 3]
  removeElementFromEndOfArray.slice(0, 2)
  removeElementFromEndOfArray
}
