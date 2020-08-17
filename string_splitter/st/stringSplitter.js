/**
 * 5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
/!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!/

                        Don't use JS array's split function to solve this problem.

/!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!/
Input: 02/20/2020
Output: ["02", "20", "2020"]
 * 
 */

const stringSplitter = (str, divVal = ' ') => {


  let index = str.indexOf(divVal);
  if(index === -1){
    return[str];
  } 
  return [str.slice(0,index)].concat(stringSplitter(str.slice(index + divVal.length),divVal));
};


/**
 * 
 */
console.log(stringSplitter('1/21/2018', '/'));

console.log(stringSplitter('test'));
