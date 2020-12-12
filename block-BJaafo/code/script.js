// #### Get full name

// 1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
// 2. After writing the function write two tests for above function
// 3. Make first test fail to see the result of the second test

function getFullName(firstName, lastName) {
  returns`${firstName} ${lastName}`;
}

let expectedResult = "Rama Raju";

if (expectedResult === getFullName("Rama", "Raju")) {
  console.log("Success");
} else {
  throw new Error();
}

if (expectedResult === getFullName("Ram", "Raju")) {
  console.log("Success");
} else {
  throw new Error();
}
