var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  // array = [element, ...array]
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}


function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}


console.log(destructivelyAddElementToEndOfArray(chocolateBars, 'twix'))



function accessElementInArray(array, index) {
  return array[index]
}

console.log(accessElementInArray(chocolateBars, 2))

