//In JavaScript, arrays are iterated using loops just like for loop. Nevertheless, arrays have built-in methods, like forEach() that can be used to iterate over the array. The forEach() method takes a callback function as an argument and executes the callback function for each element in the array. The callback function takes three arguments: the current element, the index of the current element, and the array object itself. The forEach() method does not return anything. It simply executes the callback function for each element in the array.

// Another built-in method is .map() which is used to iterate over an array and return a new array. The .map() method takes a callback function as an argument and executes the callback function for each element in the array. The callback function takes three arguments: the current element, the index of the current element, and the array object itself. The .map() method returns a new array with the elements modified by the callback function. The main difference between .forEach() and .map() is that .forEach() does not return anything while .map() returns a new array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(firstChar => firstChar[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number/100;
});

console.log(smallNumbers);