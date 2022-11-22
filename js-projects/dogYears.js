//how old would you be if you were a dog? People often say time moves quickly for dogs

const myAge = 19; //setting my age to calculate how old would I be as a german sherpherd

let earlyYears = 2; //the first two years of a dog's life count as 10.5 dog years each
earlyYears *= 10.5;

let laterYears = (myAge - 2); //taking two years from early years

laterYears *= 4; //each year following the first two equates to 4 dog years

let myAgeInDogYears = (earlyYears + laterYears);

let myName = "Renato Serrano";
myName = myName.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
