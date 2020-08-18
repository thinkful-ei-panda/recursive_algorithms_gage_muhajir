/*
9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths through the Maze.
To find all possible exit paths through the maze, think about how many places you can move at each turn.
Possibly up, down, left or right?

Notice that this maze has 3 exits paths.
Your recursive function should print all three of the paths with the proper directions.
For example, given the maze above, the program should output the following:

*/

const allWaysOutOfMaze = (arr, row=0, cal=0,mov =0 ,old) => {

  if(!Array.isArray(arr)){
    return 'not a maze';
  }
  
  console.log(`arr[row][cal] has value(${(!!arr[row][cal])}), row = ${row}, and cal = ${cal}`);
  // if(mov > 12 ){
  //   return console.error('over move limit');
  // }
  
  return arr[row][cal+1] === ' ' ? 'R,' + allWaysOutOfMaze(arr, row, cal + 1, mov + 1)
    : arr[row][cal + 1] ==='e' ? 'R,>end<' 
      : arr[row+1][cal] === ' '    ? 'D,' + allWaysOutOfMaze(arr, row+1, cal, mov + 1)
        : arr[row+1][cal] ==='e' ? 'D,>end<' 
          : arr[row][cal-1] === ' '  ? 'L,'+ allWaysOutOfMaze(arr, row, cal-1, mov + 1)
            : arr[row][cal-1] ==='e' ? 'L,>end<' 
              : arr[row-1][cal] === ' '? 'U,'+ allWaysOutOfMaze(arr,row-1, cal, mov + 1)
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
  
console.log(`maze1 == ${allWaysOutOfMaze(maze1)}`);
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