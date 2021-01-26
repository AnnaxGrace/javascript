// ***For all the exercises, be sure to log the output of the function to the console.***

/************************************************************************************/
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."
//your code...
function tekCamp() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("TEK");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("camp");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("TEKcamp");
    } else {
      console.log(i);
    }
  }
}
// tekCamp();

/************************************************************************************/
//Write a function that converts the current temperature from Fahrenheit to Celsius.

//your code...
function farenheitCelsius(farenheitTemp) {
  const celsiusTemp = (farenheitTemp - 32) / 1.8;
  console.log(celsiusTemp);
}

/************************************************************************************/
//Write a function that converts the Celsius temperature back to Fahrenheit.

//your code...
function celsiusFarenheit(celsiusTemp) {
  const farenheitTemp = (celsiusTemp * 9) / 5 + 32;
  console.log(farenheitTemp);
}

/************************************************************************************/
// Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

//your code...
function canVote(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

// console.log(canVote(22));

/************************************************************************************/
// Write a function that converts a string to an array. It should return an array.

//your code...
function strToArr(string) {
  const arr = string.split("");
  return arr;
}

// console.log(strToArr("Party"));

/************************************************************************************/
// Write a function that reverses your telephone number.  It should return the reversed telephone number.

//your code...
function reversePhone(number) {
  const numString = number.toString();
  const numArr = numString.split("");
  const reversedArr = [];
  for (let i = numArr.length - 1; i > -1; i--) {
    reversedArr.push(numArr[i]);
  }
  const reversedStr = reversedArr.join("");
  const reversedNumber = parseInt(reversedStr);
  return reversedNumber;
}

// console.log(reversePhone(8323306225));

/************************************************************************************/
// Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

//your code...

function yourCar(make, model, year, color) {
  const car = {
    // showing how the property can be one word if key and value are same
    make,
    model: model,
    year,
    color: color,
  };
  return car;
}

// console.log(yourCar("Hyundai", "Elantra", "2013", "red"))

/************************************************************************************/
// Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

//example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

//your code...

function oddOrEvenObject(...nums) {
  const numberObject = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      numberObject[nums[i]] = "even";
    } else {
      numberObject[nums[i]] = "odd";
    }
  }
  return numberObject;
}

console.log(oddOrEvenObject(10, 23, 3, 4));

/************************************************************************************/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

//your code...
for (let i = 0; i < numbers.length; i += 3) {
  console.log(numbers[i]);
}

/************************************************************************************/
const foodArray = [
  "potatoes",
  "tamales",
  "lemon",
  "strawberries",
  "chocolate",
  "pudding",
  { program: "TEKcamp" },
];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
const school = foodArray[foodArray.length - 1];
console.log(school);

const adjectiveArray = [
  "salty",
  "spicy",
  "sour",
  "sweet",
  "rich",
  "creamy",
  "amazing",
];
// Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
function printOut(valueCheck, indexItem, index) {
  if (valueCheck === "s") {
    console.log(indexItem + " are " + adjectiveArray[index]);
  } else {
    console.log(indexItem + " is " + adjectiveArray[index]);
  }
}

for (let i = 0; i < foodArray.length; i++) {
  if (typeof foodArray[i] === "object") {
    const objValue = foodArray[i][Object.keys(foodArray[i])[0]];
    printOut(objValue[objValue.length - 1], objValue, i);
  } else {
    printOut(foodArray[i][foodArray[i].length - 1], foodArray[i], i);
  }
}

/************************************************************* */
// Refactor the for() loop to be a while loop.

// for (let i = 0; i < 10; i++) {
//   console.log(" the value of i in the loop is : " + i);
// }

//your code...

let i = 0;
while (i < 10) {
  console.log(" the value of i in the loop is : " + i);
  i++;
}

/************************************************************* */
//Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

const firstNum = function () {
  return (30 + 2) * 20;
};

const secondNum = function (product) {
  return (product / 10) ^ 2;
};

console.log(secondNum(firstNum()));
/************************************************************* */
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values :

// ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

// 20
// 0
// "zero";
// const zero = 20; 
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!"); 
// 125
// undefined
// ""
// if (){
//     console.log(true);
// } else {
//     console.log(false)
// }
//ANNA
console.log(
  `${20} is truthy, because it is a number, and they are true in logical operations!`
);
console.log(
  0 + " is falsy, because the number zero is defined as one of the falsy values"
);
console.log(
  "'zero'" +
    " is truthy, because it is a string, and they are true in logical operations!"
);
console.log("const zero = 20 is an expression so it won't be returned truthy or falsey. The variable zero would be truthy since it is set to 20, and the number 20 is truthy")
console.log(
  null + " is falsy, because it is defined as one of the falsy values"
);
console.log(
  "'0'" +
    " is truthy, because it is a string, and they are true in logical operations!"
);
console.log(
  '!""' +
    " is truthy, because an empty string is falsey, so setting it with a bang (not) operator makes it true"
);
console.log(
  "{}" +
    " is truthy, because it is an empty object, and they are true in logical operations!"
);
console.log('() => {console.log("hello TEKcamp!"); returns an error so it is neither truthy or falsey.')
console.log(
  125 +
    " is truthy, because it is a number, and they are true in logical operations!"
);
console.log(
  undefined + " is falsy, because it is defined as one of the falsy values"
);
console.log(
  '""' + " is falsy, because it is defined as one of the falsy values"
);

/************************************************************* */
// Refactor the following code using a switch statement:

const day = "friday";

// if (day === "monday") {
//   console.log("we got a long week ahead of us...");
// } else if (day === "tuesday") {
//   console.log(
//     "tuesday's are still beterr than mondays, but LONG way to go still"
//   );
// } else if (day === "wednesday") {
//   console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//   console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//   console.log("TGIF.  Friday truly is the best day of the week!");
// } else {
//   console.log("It's a weekend!");
// }

switch (day) {
  case "monday":
    console.log("we got a long week ahead of us...");
    break;
  case "tuesday":
    console.log(
      "tuesday's are still beterr than mondays, but LONG way to go still"
    );
    break;
  case "wednesday":
    console.log("We are smack dab in the middle of the week");
    break;
  case "thursday":
    console.log("Thursday night... the mood is right");
    break;
  case "friday":
    console.log("TGIF.  Friday truly is the best day of the week!");
    break;
  default:
    console.log("It's a weekend!");
    break;
}

/************************************************************* */
// Refactor the following statements to use ternary expressions:

const age = 10;
// if (age > 21) console.log("adult");
// else {
//   console.log("minor");
// }

// if (age > 13 && age < 19) console.log("teen");
// else {
//   console.log("not a teenager");
// }

// if (age > 65) console.log("retired");
// else {
//   console.log("still working...");
// }

age > 21 ? console.log("adult") : console.log("minor");

age > 13 && age < 19 ? console.log("teen") : console.log("not a teenager");

age > 65 ? console.log("retired") : console.log("still working...");

/************************************************************* */
//Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
/*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

//your code...

const myInfo = {
  name: "Anna Grace Conover",
  age: 27,
  gender: "F",
  "healthy ? (yes or no)": "yes",
  hobbies: ["videogames", "boardgames", "reading"],
  profession: "web developer",
  education: "OU BA in drama, trilogy bootcamp",
  learn: function () {
    console.log(this.name + " is learning is Javascript");
  },
  yearsOld: function () {
    console.log("I am " + this.age + " years old!");
  },
};

// console.log(myInfo.yearsOld());
/************************************************************* */

{
  const year = 2021;
  const nums = [1, 2, 3, 4, 5];
  let sum = 0;
  let i = 0;
  const doubled = [];

  //Refactor the following statements into expressions

  // 1.
  year > 2000 && year < 2100 ? console.log("welcome to the 21st century") : ""
  // if (year > 2000 && year < 2100) {
  //   console.log("welcome to the 21st century");
  // }

  // 2.
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  // }
  // console.log(sum);

  sum = nums.reduce((a, b) => a + b, 0);
  console.log(sum);

  // 3.
  // while (i < nums.length) {
  //   doubled.push(nums[i] * 2);
  //   i++;
  // }

  // console.log(doubled);

  nums.forEach(x => doubled.push(x * 2));
  console.log(doubled);
}

/************************************************************* */
// Use array methods to solve the following problems.

const nums = [1, 2, 3, 4, 5];
// Square every number in the array.  Store the squares in a new array.

//your code...

const squaredNums = nums.map((x) => x * x);
console.log(squaredNums);

const fivePlus = [
  1,
  3,
  5,
  7,
  9,
  1,
  3,
  5,
  2,
  3,
  1,
  23,
  4,
  232,
  3,
  4,
  1,
  2,
  2,
  2,
  3,
  4,
  4,
  1,
  12,
  11,
  23,
  3,
  4,
  5,
];
//Remove all numbers that are less than 5.  Store the results in a new array.

//your code...
const lessThanFive = fivePlus.filter((x) => x > 5);
console.log(lessThanFive);

// Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

//your code...
const randomInts = [];
for (let i = 0; i < 20; i++) {
  let randomInt = Math.floor(Math.random() * 10 + 1);
  randomInts.push(randomInt);
}

console.log(randomInts.reduce((a, b) => a + b, 0));

const showNums = [12, 22, 33, 44, 55, 66, 77, 88, 99, 101];
//Print out the value of each number divided by 2.  There is no need to store the output in an array.
showNums.forEach((x) => console.log(x / 2));

/************************************************************* */
/* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
const chessPiecesTest = ["king", "queen", "pawn", "pawn", "pawn", "bishop"];

function chessCalc(pieces) {
  //your code here
  let points = 0;
  for (let i = 0; i < pieces.length; i++) {
    console.log("What?");
    switch (pieces[i]) {
      case "pawn":
        points++;
        break;
      case "rook":
        points += 5;
        break;
      case "bishop":
      case "knight":
        points += 3;
        break;
      case "queen":
        points += 9;
        break;
      default:
        break;
    }
  }
  return points;
}
console.log(chessCalc(chessPiecesTest));

/************************************************************* */

const ones = [
  1,
  11,
  111,
  1111,
  11111,
  111111,
  1111111,
  11111111,
  111111111,
  1111111111,
];
//reverse the array, without modifying / `mutating` the ones array.
const newArray = [];
for (let i = ones.length - 1; i > -1; i--) {
  newArray.push(ones[i]);
}
console.log(newArray);

/************************************************************* */
//create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

function performer(cb) {
  let anna = "This is my name"
  cb(anna)
}
console.log(performer);

/************************************************************* */
// For the given list of developers :
const devs = [
  {
    name: "Cameron",
    age: 23,
    gender: "m",
    tech_stack: ["html", "css", "js", "React"],
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    tech_stack: ["java", "spring-boot", "MySql"],
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    tech_stack: ["react", "express", "python"],
  },
  {
    name: "Rashid",
    age: 27,
    gender: "m",
    tech_stack: ["thymeleaf", "postgres", "js", "Angular"],
  },
  {
    name: "Annie",
    age: 30,
    gender: "F",
    tech_stack: ["html", "scss", "less", "DynamoDB", "GraphQL"],
  },
  {
    name: "Dr. Patel",
    age: 52,
    gender: "M",
    tech_stack: null,
  },
  {
    name: "Isaiah",
    age: 48,
    gender: "M",
    tech_stack: ["Java", "", "less", "DynamoDB", "GraphQL"],
  },
  {
    name: "Saima",
    age: 33,
    gender: "F",
    tech_stack: ["MongoDB", "Route53", "Jenkins", "Terraform", "Kubernetes"],
  },
  {
    name: "Omar",
    age: 33,
    gender: "m",
    tech_stack: ["c++"],
  },
  {
    name: "Mariam",
    age: 32,
    gender: "f",
    tech_stack: null,
  },
];

/************************** */
// Find all devs older than 24
//your code here...
const olderDevs = [];
for (let i = 0; i < devs.length; i++) {
  if (devs[i].age > 24) {
    olderDevs.push(devs[i]);
  }
}
console.log(olderDevs);

/************************** */
// Remove all people who are not developers (i.e. no tech stack)

//your code here...
const developers = devs.filter((x) => x.tech_stack !== null);
console.log(developers);

/************************** */
// Calculate the total age of all the devs

//your code here...
const totalAge = devs.reduce((a, b) => a + b.age, 0);
console.log(totalAge);
/************************** */
// Find all female devs

//your code here...
const femaleDevelopers = devs.filter(
  (x) => x.gender !== "m" && x.gender !== "M"
);
console.log(femaleDevelopers);

/************************** */
// lowercase the genders of every dev

//your code here...
for (let i = 0; i < devs.length; i++) {
  if (devs[i].gender === "M") {
    devs[i].gender = "m";
  } else if (devs[i].gender === "F") {
    devs[i].gender = "f";
  }
}
console.log(devs);
/************************** */
// Sort the developers by name

//your code here
const nameDevSort = devs.sort(function (a, b) {
  const nameA = a.name;
  const nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(nameDevSort);

/************************** */
// Sort the devs by age in descending order

//your code here

function ageSort(obj) {
  const ageDevSort = obj.sort(function (a, b) {
    const ageA = a.age;
    const ageB = b.age;
    if (ageA < ageB) {
      return 1;
    }
    if (ageA > ageB) {
      return -1;
    }
    return 0;
  });
  return ageDevSort;
}
console.log(ageSort(devs));
/************************** */
// Sort the male coders by age

//your code here
const maleDevs = [];
for (let i = 0; i < devs.length; i++) {
  if (devs[i].gender === "m") {
    maleDevs.push(devs[i]);
  }
}
console.log(ageSort(maleDevs));

/************************** */
// For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below :

/*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

//your code here
devs.forEach((dev) => {
  if (!dev.tech_stack) {
    console.log(dev.name + " is not a developer.");
  } else {
    console.log(dev.name + " specializes in " + dev.tech_stack);
  }
});

/************************************************************* */
// Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.
//I'm updating the actual array. It would be less code if I was making a new one with filter

const numbersMixed = [
  2,
  23,
  1,
  2,
  1,
  1,
  1,
  2,
  2.5,
  20,
  200,
  2000,
  ,
  { k: "val" },
  20000,
  19999,
  1878,
  140,
  23,
  4,
  "sk",
  true,
  true,
  "true-dat",
  "nice",
  "one",
  "two",
  "three",
  "3",
  "tea",
  [],
];

function maxNumber(numbers) {
    //your code...
    const notANumber = [];
  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case "one":
      case "1":
        numbers[i] = 1;
        break;
      case "two":
      case "2":
        numbers[i] = 2;
        break;
      case "three":
      case "3":
        numbers[i] = 3;
        break;
      case "four":
      case "4":
        numbers[i] = 4;
        break;
      case "five":
      case "5":
        numbers[i] = 5;
        break;
      case "six":
      case "6":
        numbers[i] = 6;
        break;
      case "seven":
      case "7":
        numbers[i] = 7;
        break;
      case "eight":
      case "8":
        numbers[i] = 8;
        break;
      case "nine":
      case "9":
        numbers[i] = 9;
        break;
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    if (typeof numbers[j] !== "number"){
        notANumber.push(numbers[j]);
    }
  }
  for (let k = 0; k < notANumber.length; k++){
      let index = numbers.indexOf(notANumber[k]); 
      if (index !== -1) {
        numbers.splice(index, 1);
      }
  }
  for (let t = 0; t < numbers.length; t++) {
    if (numbers[t] === undefined) {
        numbers.splice(t, 1)
    }
  }
}

maxNumber(numbersMixed);
console.log(numbersMixed)

//After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

function sortNums(numbers, desc = false) {
  //your code...
  if (desc === false) {
    numbers.sort((a, b) => a-b)
  } else if (desc === true) {
    numbers.sort((a, b) => b-a)
  }
  console.log(numbers)

}

sortNums(numbersMixed, desc = false)

/************************************************************* */
//Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

//your code...

//ES6 came out with template literals, which is a new way to write strings using a backtick instead of single/double quotes. It cleans up concatination/interpolation.

const yourName = "Alex Alspaw"
const yourRole = "mentor"

console.log(`${yourName} is a great ${yourRole}!`)

/************************************************************* */
//Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
//Anna
const keyObj = {
  company: "TEKsystems"
}
const mapObj = new Map();
// mapObj.set({company: "TEKsystems"}, "object");
mapObj.set(keyObj, "object");
mapObj.set(72, "number");
mapObj.set("Party", "string");
mapObj.set([1, 2, 3], "array");
mapObj.set(true, "boolean");
console.log(mapObj)

// console.log(mapObj.has( { company: "TEKsystems" }));
console.log(mapObj.has(keyObj));

//The above console.log() statment returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log("The has returns false because at that level it returns just 'object', so it would need to drill down. ex. .has(object: {company: 'TEKsystems'}.")

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

/************************************************************* */
//Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

// ex : 2,3 => doMath(2,3) => adding : 5
function doMath(x, y) {
   const operationIndex = Math.floor(Math.random() * operations.length);
   console.log(operations[operationIndex])
   console.log(operations[operationIndex](x, y));
}

//your code...

const add = function (x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];
doMath(2, 3);

/************************************************************* */
//- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.
//your code...
const multiple = x => {
  const fn = y => y * x;
  return fn(3);
}

console.log(multiple(5))

//- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

//your code
//ANNA HERE
const stockGain = basis => {
  const message = " is how much the stock has increased";
  const inner = yrs => {
    const r = .05;
    return yrs/r;
  }
  console.log((basis - inner(5)) + message);
}

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.

//your code...
const futureValue = () => {
  stockGain(5000);
}

futureValue()

// DO NOT DELETE THIS EXPORT
module.exports = {
  tekCamp,
  canVote,
};

//*************************************** */
