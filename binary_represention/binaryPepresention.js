/* eslint-disable quotes */
/**
 * 8421
 * ----
 *    0     0
 *    1     1
 *   10     0 + 2 = 2
 *   11     1 + 2 = 3
 *  100     0 + 0 + 4 = 4
 *  101     1 + 0 + 4 = 5
 *  110     0 + 2 + 4 = 6
 *  111     1 + 2 + 4 = 7
 * 1000     0 + 0 + 0 + 8 = 8
 * 1001     1 + 0 + 0 + 8 = 9
 *
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 */

const binaryParser =(int) =>{
  if( typeof int !== 'number'){
    throw new Error('NaN');
  } 
  if( int < 0){
    throw new Error(`can't be a negative integer`);
  }
  if(int === 0 || int === 1){
    return int.toString();
  }

  const lsb = (int%2).toString();
  const reBits = Math.floor(int/2);
  const reBitsBi = binaryParser(reBits);
  return reBitsBi + lsb;
};


console.log(binaryParser(123));