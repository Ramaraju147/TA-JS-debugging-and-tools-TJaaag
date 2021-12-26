// #### Write your implementation of testing framework and assertion. Only after completing this go forward.

// #### Write two tests for the following functions using test framework assertion

// #### Add two number

// 1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make second test fail and see if the

// #### Multiply two numbers

// 1. Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make second test fail and see if the

function test(message,cb){
  try{
    cb()
    console.log("Passed",message)
  }catch(error){
    console.log("Failed",error)
  }
}

function expect(result){
  return {
    toEqual : (expected) => {
      if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
    toBeEqual: (result) => {
      if(typeof(result) !== expectedType){
        console.log(result,expectedType )
        throw new Error(`${result} is not of type ${expectedType}`)
      }
    }
  }
}


function add(numA,numB){
  return numA+numB;
}

function multiplication(numA,numB){
  return numA*numB;
}

function testAdd(){
   result = add(5,6);
   expected = 11;
   expectedType = "number";
  expect(result).toEqual(expected);
  expect(result).toBeEqual(expectedType);
}

test("Add 5 and 6", testAdd);


function testMultiplication(){
   result = multiplication(2,3);
   expected = 6;
  expect(result).toEqual(expected);
}

test("Multiply  2 and 3", testMultiplication);