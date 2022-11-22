//using if, else if and else statements

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;

let runnerAge = 11;
runnerAge > 18 && registeredEarly ? raceNumber += 1000 : 0;

if (runnerAge > 18 && registeredEarly) {
  console.log(`${raceNumber}, you'll race at 9:30am`)
} else if (runnerAge > 18) {
  console.log(`${raceNumber}, you'll race at 11:00am`)
} else if (runnerAge < 18) {
  console.log(`${raceNumber}, you'll race at 12:30pm`)
} else {
  console.log(`${raceNumber}, you'll have to check the registration desk`)
};
