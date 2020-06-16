var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  // array = [element, ...array]
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, 'twix'))