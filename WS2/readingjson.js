//Read and process JSON files locally 

const express = require("express");
const app = express();
const data = require("./sampledata.json");

app.use(express.static('public'));

//Then write a command line program which reads the “sampledata.json” data and does the following things: 
//a) iterates through the data and displays name, age, company and address data on the console.
app.get("/", function (req, res) {
  res.json(data);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
    console.log(data[i].age);
    console.log(data[i].company);
    console.log(data[i].address);
  }
});
//b) same as on task a , but surround the data with HTML-tags. 
// c) Create a web server and output the data as HTML to the browser.
app.get("/json", function (req, res) {
  let results = '<table border="1">';

  for (let i = 0; i < data.length; i++) {
      results+=
      '<tr>'+
      '<td>' + data[i].name + '</td>' +
      '<td>' + data[i].age + '</td>' +
      '<td>' + data[i].company + '</td>' +
      '<td>' + data[i].address + '</td>' +
      '</tr>';
  }
  res.send(results);
  console.log(results);
});

app.listen(8081, function () {
  console.log("app listening port 8081");
});
