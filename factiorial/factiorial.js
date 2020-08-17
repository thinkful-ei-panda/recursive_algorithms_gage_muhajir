/*
7. Factorial
Write a recursive function that finds the factorial of a given number.
 The factorial of a number can be found by multiplying that number by each number between itself and 1. For example,
the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/


const factorial = n => {
  if(n <= 1){
    return 1; 
  }
  return n * factorial(n - 1);
};

console.log('factorial(5) == 120',);
console.log(`but equals ${factorial(5)}`,);
console.log((factorial(5)=== 120));
console.log('factorial(2) == 2 ',);
console.log( `but equals ${factorial(2)}`,);
console.log((factorial(2)=== 2));
console.log('factorial(1) == 1');
console.log(`but equals ${factorial(1)}`);
console.log((factorial(1)=== 1));
console.log('factorial(13) == 6,227,020,800');
console.log(`but equals ${factorial(13)}`);
console.log((factorial(13)===6227020800));
console.log('factorial(8) == 40,320')
console.log(`but equals ${factorial(8)}`);
console.log((factorial(8)=== 40320));
