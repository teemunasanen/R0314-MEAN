/*
5.   Finally create a program “deletingfiles.js”
which will delete the textfile you created on task 4. 
Use the unlink –function. See how to use it from Node.js API.
*/


const fs = require("fs");

fs.unlink('combinedFile.txt', (err) => {
    if (err) throw err;
    console.log('combinedFile.txt was deleted');
  });