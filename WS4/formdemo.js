const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// 
app.use(bodyParser.urlencoded({ extended: true}));// for parsing application
app.get('/adduser', function (req, res) {
    res.sendFile(__dirname + '/public/adduser.html');
});

// Or we can parse out the details
app.get('/details', function (req, res) {
    let data = require('./exampledata2.json');

    // Parse the results into a variable
    let results = '<table border="1"> ';

    for(let i=0; i<data.length; i++){
        results +=
        '<tr>' +
        '<td>' + data[i].Name + '</td>' +
        '<td>' + data[i].Email + '</td>' +
        '<td>' + data[i].Date + '</td>' +
        '<td>' + data[i].Company + '</td>' +
        '</tr>';
    }
    res.send(results);
});
// Add data
app.post('/adduser', function (req, res) {
    // Load the existing data from a file
    let data = require('./exampledata2.json');

    // Create a new JSON object and add it to the existing data variable
    data.push({
        'Name': req.body.name,
        'Email': req.body.email,
        'Date': new Date(),
        'Company': req.body.company
    });
    // Convert the JSON object to a string format
    let jsonStr = JSON.stringify(data);

    //Write data to a file
    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if(err) throw err;
        console.log('It\'s saved!');
    });
    res.send('Saved the data to a file. Browse to the /details to see the contents of the file');
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
});