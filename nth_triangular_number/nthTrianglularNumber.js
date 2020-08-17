/*
4. nth Triangular Number
Calculate the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle with n dots on a side,
and is equal to the sum of the n natural numbers from 1 to n.
                                        1, 2, 3,  4,  5,  6,  7,  8,  9,
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
                                       +1,+2,+3, +4, +5, +6, +7, +8, +9

        |      |          |        *       |
        |      |     *    |      *    *    |
        |  *   |   *   *  |   *    *    *  |
        |-----------------------------------------------|
        | 1st  |     2nd  |        3rd     |      nth?  |

        1n = 1      2n = 3      3n = 9 
*/

const nthTriangularNumber = n =>{
  if( n <= 0){
    return 0;
  }
  return  n + nthTriangularNumber(n - 1);
};





console.log(nthTriangularNumber(3),'should === 6 ');

console.log(nthTriangularNumber(2),'should === 3 ');

console.log(nthTriangularNumber(4),'should === 10 ');

console.log(nthTriangularNumber(9),'should === 45 ');