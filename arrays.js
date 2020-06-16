var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  // array = [element, ...array]
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element)
  return 
}


function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function addElementToBeginningOfArray(array, element) {
  // array = [element, ...array]
  return [element, ...array]
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, 'twix'))