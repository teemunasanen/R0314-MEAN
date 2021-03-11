// server.js
// load the things we need
const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index", {
    new_heading: "This was passed from the JS file",
    new_paragraph: "Lorem Ipsum...",
    new_footer: "Here is the new footer",
  });
});

let data = {
  users: [
    { name: "John", age: 25 },
    { name: "Mike", age: 42 },
    { name: "Samantha", age: 51 },
  ],
};

app.get("/users", function (req, res) {
  res.render("pages/users", data);
});

app.listen(8081);
console.log("8081 is the magic port");
