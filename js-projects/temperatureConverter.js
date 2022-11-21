//creating a temperature converter using JS

const kelvin = 950; //forecast today shows temperature is 293 Kelvin

const celsius = (kelvin - 273); //the conversion from kelvin to celsius degrees is made up by a simple subtraction 

let fahrenheit = ((celsius * (9/5)) + 32); //this is the conversion from celsius to fahrenheit

fahrenheit = Math.floor(fahrenheit); //rounding the value obtained

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// --------------------------------------------//

//converting temperatures from Celsius to Newton

let newton = (celsius * (33/100)); //conversion from celsius degrees to newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
