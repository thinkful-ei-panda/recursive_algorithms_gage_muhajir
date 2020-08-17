/*
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. 
That number should be the number of sheep you have.
The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence
*/


const ifSheep = 'Another sheep jumped over the fence';

const noSheep = 'All sheep jumped over the fence';

const countingSheep = (n , i=0) => {
  if(n === i){
    return console.log(noSheep);
  }
  console.log(`${n- i}: ${ifSheep}`);
  countingSheep(n , i + 1);
};

countingSheep(5);