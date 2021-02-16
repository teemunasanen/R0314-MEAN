/*
7.   Create program “directories.js” 
Try mkdir and rmdir; when writing the files in step 3 
first create a new folder called “newdata” and then write the file there.
*/

const fs = require('fs');
// path for newdata
const path = require('path');
const dirPath = path.join(__dirname, '/newdata');
// try creating directory
try{
fs.mkdirSync(dirPath);
} catch(err){
console.log('Error: ' + err);
}
// try creating file
try{
fs.writeFileSync('newdata/newFile.txt', 'texti');
} catch(err){
    console.log('Error: ' + err);
}
// try deleting file
fs.unlink('newdata/newFile.txt', (err) => {
    if (err) throw err;
    console.log('newFile.txt was deleted');
  });

//try deleting directory
try{
fs.rmdirSync(dirPath);
} catch(err){
    console.log("Error: " + err);
}
