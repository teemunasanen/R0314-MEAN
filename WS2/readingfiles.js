const fs = require("fs");

console.log("Program started");

fs.readFile('example.txt', results);

function results(err, dataA){
    if(err) return console.error(err);
    console.log("Results of fileread:");
    console.log(dataA.toString());
}

fs.readFile('another.txt', message);

function message(err, dataB){
    if(err) return console.error(err);
    console.log("Results of another fileread:");
    console.log(dataB.toString());
    console.log("Program Ended");
}

