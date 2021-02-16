/*
6.   Create program “readingdir.js” Try to use readdir() function. 
Can you output a directory contents to the screen?
*/

const fs = require('fs');

let target = fs.readdirSync('./');

for (let i in target){
  console.log(target[i]);
}