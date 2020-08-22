/*
9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths through the Maze.
To find all possible exit paths through the maze, think about how many places you can move at each turn.
Possibly up, down, left or right?

Notice that this maze has 3 exits paths.
Your recursive function should print all three of the paths with the proper directions.
For example, given the maze above, the program should output the following:

*/

const outOfMaze = (arr, row=0, cal=0,mov =0 ,path=[],cur) => {

  if(!Array.isArray(arr)){
    return 'not a maze';
  }
  const hight = arr.length;
  const width = arr[0].length;

  //   console.log(`arr[row][cal] has val ${(!!arr[row][cal])}, row = ${row}, and cal = ${cal}`);
  if(mov > 15 ){
    return console.error('over move limit');
  }

  if(arr[row][cal] === 'e'){
    path.push('e');
    return  outOfMaze(arr,0,0,0,path);
  }

  arr[row][cal] = 'x';

  /*right */
  if( cal+1 < width ){
    if(arr[row][cal+1] === ' ' || arr[row][cal+1] === 'e'){
      let res = outOfMaze(arr, row, cal + 1, mov + 1);
      if(res !== 'x')
        return path.push('R') && 'R,' +res;
    }
  }
  /*down */
  
  if( row+1 < hight ){
    if(arr[row+1][cal]=== ' ' || arr[row+1][cal] === 'e'){
      let res = outOfMaze(arr, row+1, cal, mov + 1);
      if(res !== 'x')
        return path.push('D') && 'D,' +res;
    }
  }

  /* Left */
  
  if( cal > 0 ){
    if(arr[row][cal-1] === ' ' || arr[row][cal-1] === 'e'){
      let res = outOfMaze(arr, row, cal - 1, mov + 1,);
      if(res !== 'x')
        return path.push('L') && 'L,' +res;
    }
  }
  /*Up*/
  if( row > 0 ){
    if(arr[row-1][cal] === ' ' || arr[row-1][cal] === 'e'){
      let res = outOfMaze(arr, row - 1, cal, mov + 1);
      if(res !== 'x')
        return path.push('U') && 'U,' +res;
    }
  }
  arr[row][cal] = ' ';
  return 'x';
  /***================================================================================================================= */
  /*
  if( cal+1 < width && arr[row][cal+1]){
    if(arr[row][cal+1] === 'x' || arr[row][cal+1] === 'e' ){
      return pathTrav.push('R') && 'R,' + outOfMaze(arr, row, cal + 1, mov + 1);
    }
  }
  /*down */
  /*
  if( row+1 < hight && arr[row+1][cal]){
    if(arr[row+1][cal]=== 'x' || arr[row+1][cal] === 'e'){
      return pathTrav.push('D') && 'D,' + outOfMaze(arr, row+1, cal, mov + 1);
    }
  }

  /* Left */
  /*
  if( cal > 0 && arr[row][cal-1]){
    if(arr[row][cal-1] === 'x' || arr[row][cal-1] === 'e'){
      return pathTrav.push('L') && 'L,'+ outOfMaze(arr, row, cal-1, mov + 1);
    }
  }
  if( row > 0 && arr[row-1][cal]){
    if(arr[row-1][cal] === 'x' || arr[row - 1][cal] === 'e'){
      return pathTrav.push('U') && 'U,'+ outOfMaze(arr,row-1, cal, mov + 1);
    }
  }
    */              

                 
                 
  /* Up */
                    
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

console.log(`maze1 == ${outOfMaze(maze1)}`);
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
console.log(`maze2 == ${outOfMaze(maze2)}`);
const maze3 = [
  [' ',' ',' ',' ',' ','#',' '],/*7 7*/
  [' ','#','#','#',' ','#','#'],
  [' ','#',' ',' ',' ',' ',' '],
  [' ','#',' ',' ','#','#',' '],
  [' ','#',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' '],
  [' ',' ','#','e',' ','#',' ']
];
console.log(`maze3 == ${outOfMaze(maze3)}`);
