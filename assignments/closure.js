//* ==== Challenge 1: Write your own closure ====
//* Write a closure of your own creation.
//* Keep it simple! Remember a closure is just a function
//* that manipulates variables defined in the outer scope.
//* The outer scope can be a parent function, or the top level of the script.

let me = "Catherine Kim"
function greetMe() {
  console.log("Hello, " + me + "!")
}
me = "Batman"
// greetMe()

//* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

//* ==== Challenge 2: Implement a "counter maker" function ====
//* const counterMaker = () => {
//* IMPLEMENTATION OF counterMaker:
//* 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
//* 2- Declare a function `counter`. It should increment and return `count`.
//*      NOTE: This `counter` function, being nested inside `counterMaker`,
//*      "closes over" the `count` variable. It can "see" it in the parent scope!
//   //* 3- Return the `counter` function.
//* };
//* Example usage: const myCounter = counterMaker();
//* myCounter(); //* 1
//* myCounter(); //* 2

// const counterMaker = () => {
//   let count = 0;
//   return function () {
//     count++
//     return count;
//   }
// };
// const newCounter = counterMaker();
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());

//* ==== Challenge 3: Make `counterMaker` more sophisticated ====
//* It should have a `limit` parameter. Any counters we make with `counterMaker`
//* will refuse to go over the limit, and start back at 1.
const counterMaker = () => {
    let count = 0;
    let limit = 10;

    while(count < limit) {
      console.log(count);
      count++;
    }
    let newCount = count;
    return newCount;
};
console.log(counterMaker());

//* ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
//* Return an object that has two methods called `increment` and `decrement`.
//* `increment` should increment a counter variable in closure scope and return it.
//* `decrement` should decrement the counter variable and return it.  
// const counterMaker = () => {
//   let lessNum = 10; 
//   let num = 0;
//   decrement: lessNum = lessNum - 1;
//   console.log(lessNum);  
//   console.log(lessNum);  
//   console.log(lessNum);  
  
// CLOSURE
//   return counterFactory = function() { 
//     increment: num = num + 1;
//     return num;
//     }
// };

// const newNum = counterMaker();
// console.log(newNum());
// console.log(newNum());
// console.log(newNum());
// console.log(newNum());