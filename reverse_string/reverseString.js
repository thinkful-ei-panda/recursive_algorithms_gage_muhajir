/*
3. Reverse String
Write a function that reverses a string.
Take a string as input, reverse the string, and return the new string.
*/

const gnirtsEsrever = str =>{
  if(!str.length){
    return '';
  }
  return str.slice(str.length - 1, str.length) + gnirtsEsrever(str.slice(0,-1));
};

console.log(gnirtsEsrever('test'),'=== "tset"');

console.log(gnirtsEsrever('123'),'=== "321"');

console.log(gnirtsEsrever('working'),'=== "gnikrow"');

console.log(gnirtsEsrever('WORLD OF HORROR'),'=== "RORROH FO DLROW"');

console.log(gnirtsEsrever('revers sting is done'));