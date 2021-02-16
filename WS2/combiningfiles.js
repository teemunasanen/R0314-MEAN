/* 
 3. Writing files is just as easy. It is done using the fs.writeFile –function. Create a file “combiningfiles.js”
    and utilize writeFile –function to it, so that it will write the text files of two files into a single new file. 
    See the syntax and how to use writeFile from Node.js API.*/

    const fs = require("fs");

let text = "";

text = fs.readFileSync("example.txt", results);
text += "\n" + fs.readFileSync("another.txt", results);

console.log(text);

fs.writeFileSync("combinedFile.txt", text);

function results(err, data) {
  if (err) return console.error(err);
  let traveller = data.toString();
  return traveller;
}
/*
4.   When this works, try adding the string “I wrote this!” at the top and the bottom of the new textfile. 
Hint: see API for “append” related file functions.
*/
let mine = "I wrote this!\n";

mine += fs.readFileSync("combinedFile.txt", results); //(+ "\nI wrote this!"), but with append...

fs.writeFileSync("combinedFile.txt", mine);
try {
    fs.appendFileSync('combinedFile.txt', '\nI wrote this!');
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    console.log("Some stupid error")
  }
