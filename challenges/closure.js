// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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

// Explanation: 
//The reason that the nested function can access the variable named internal is because internal was defined/created inside of the 
//myFunction function and the nestFunction has the ability to run it because it too is inside of the myFunction function.
//Just like the myFunction function has the ability to grab the variable external from outside of the function because 
// they both are in the scope of the different functions.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation(num){
  let counter = 1;
  return function(){
    for (num; num >1; num--){
      counter = counter + num;
    }
    return counter;
  }
}
const summ = sumation(4);
console.log(summ());