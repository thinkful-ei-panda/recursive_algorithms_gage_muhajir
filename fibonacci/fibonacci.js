/*
 6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number.
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
 
        [1, 1, 2, 3, 5, 8, 13]
         0,-1,-1,-1, 0,+2, +6,
        [1, 2, 3, 4, 5, 6, 7 ]
*/

const fibonacci = n => {
  if(n <= 0){
    return 0;
  }
  if(n === 1){
    return 1;
  }
  return fibonacci(n - 1) + fibonacci((n - 2 ));
};


console.log(`5 of  the fibonacci(${fibonacci(5)}) == 5`);
console.log(`7 of the fibonacci(${fibonacci(7)}) == 13`);
console.log(`8 of the fibonacci(${fibonacci(8)}) == 21`);
console.log(`9 of the fibonacci(${fibonacci(9)}) == 34`);
