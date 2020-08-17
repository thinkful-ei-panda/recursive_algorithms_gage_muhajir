/*
You have entered a Maze and need to find your way out of it. 
There are more than one possible paths through the Maze to the single exit point.
Write a recursive function that will help you find a possible path through the maze.

You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array).
The starting point is the top left corner and the exit is indicated by e.
For simplicity purpose, use the bottom right corner of the maze as the exit.
You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them.
These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

*/

const outOfMaze = (arr, row=0, cal=0,mov =0) => {

  if(!Array.isArray(arr)){
    return 'not a maze';
  }

  console.log(`arr[row][cal] are equal to ${arr[row][cal]}, row = ${row}, and cal = ${cal}`)
  if(mov > 12 ){
    return console.error('over move limit');
  }

  return arr[row][cal+1] === ' ' ? 'R,' + outOfMaze(arr, row, cal + 1, mov + 1)
    : arr[row][cal + 1] ==='e' ? 'R,>end<' 
      : arr[row+1][cal] === ' '    ? 'D,' + outOfMaze(arr, row+1, cal, mov + 1)
        : arr[row+1][cal] ==='e' ? 'L,>end<' 
          : arr[row][cal-1] === ' '  ? 'L,'+ outOfMaze(arr, row, cal-1, mov + 1)
            : arr[row][cal-1] ==='e' ? 'L,>end<' 
              : arr[row-1][cal] === ' '? 'U,'+ outOfMaze(arr,row-1, cal, mov + 1)
                : arr[row-1][cal] ==='e' ? 'U,>end<' 
                  : '' ;
};
/*
DDRR,
RRDD,
*/
const maze1 = [
  [' ', ' ', ' '],
  [' ', '#', ' '],
  [' ', ' ', 'e']
];

// console.log(`maze1 == ${outOfMaze(maze1)}`);
/*
RRDDLLDDRRRRR,
RRDDRRRRDD,
*/
const maze2 = [
  [' ', ' ', ' ', '#', ' ', ' ', ' '],
  ['#', '#', ' ', '#', ' ', '#', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '#', '#', '#', '#', '#', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
// console.log(`maze2 == ${outOfMaze(maze2)}`);
const maze3 = [
  [' ',' ',' ',' ',' ','#',' '],
  [' ','#','#','#',' ','#','#'],
  [' ','#',' ',' ',' ',' ',' '],
  [' ','#',' ',' ','#','#',' '],
  [' ','#',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' '],
  [' ',' ','#','e',' ','#',' ']
];
console.log(`maze3 == ${outOfMaze(maze3)}`);



//for testing only 
// const mazeView = [
//   ['1','2','3','4','5'],
//   ['6','7','8','9','0'],
//   ['a','b','c','d','e'],
//   ['f','g','h','i','j'],
// ];
/*
note: 
when finding index of val (arr[row][cal])
*/
// console.log((mazeView[1][0] === '6'),`${mazeView[1][0]} === '6'` );
// console.log((mazeView[3][0] === 'f'),`${mazeView[3][0]} === 'f'` );
// console.log((mazeView[2][3] === 'd'),`${mazeView[2][3]} === 'd'` );
