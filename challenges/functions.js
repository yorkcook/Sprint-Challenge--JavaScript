// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (param1, param2, cb) => {return cb(param1, param2)};





/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (param1, param2) => {return (param1 + param2)};

const multiply = (param1, param2) => {return (param1 * param2)};

const greeting = (param1, param2) => {return (`Hello ${param1} ${param2}, nice to meet you!`)};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(
consume(2,2,add),// 4
consume(10,16,multiply), // 160
consume("Mary","Poppins", greeting)) // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// ****York's Answer*** nestedfunction() can access the variable `internal` because it is below the variable in the cascade. You can reach up through the cascade but not down which is why nestedfunction() can access the variable.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();