/*
2. Power Calculator
Write a function called powerCalculator() that takes two parameters,
an integer as a base, and another integer as an exponent.
The function returns the value of the base raised to the power of the exponent.
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0

*/

const powerCalculator=( x, powOf) =>{
  if(powOf <= 0 ){
    return 1;
  }
  if(powOf === 1 ){
    return x;
  }
  return x * powerCalculator(x , powOf - 1);
};


console.log(powerCalculator(10,2),'should  = 100');

console.log(powerCalculator(5,2),'should  = 25');

console.log(powerCalculator(2,24),'should  = 16,777,216');