/*
Create a new app “routeswithactions.js” 
containing a simple web server outputting “hello world”.
*/

const http = require("http");
const fs = require("fs");

/*
Your app should respond to different routes by serving different content to the browser. 
This can be done by studying the request.url –parameter 

*/


//The route / should output the text “Nothing here to see” to the browser.
http
  .createServer(function (request, response) {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<h1>Nothing here to see</h1>");

//The route /frontpage should read a local HTML file frontpage.html and output the contents to the browser.
    } else if (request.url === "/frontpage") {
      response.writeHead(200, { "Content-Type": "text/html" });
      let data = fs.readFileSync("frontpage.html");
      response.write(data.toString());

//The route /contact should read a local HTML contact.html file and output the contents as HTML to browser
    } else if (request.url === "/contact") {
      response.writeHead(200, { "Content-Type": "text/html" });
      let data = fs.readFileSync("contact.html");
      response.write(data.toString());

//The route /plaintext should read a local TXT file and output the contents as TXT to browser 
    } else if (request.url === "/plaintext") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      let data = fs.readFileSync("another.txt");
      response.write(data.toString());

//The route /json should read a local JSON file and output the contents as JSON to browser      
    } else if (request.url === "/json") {
      response.writeHead(200, { "Content-Type": "application/json" });
      let data = fs.readFileSync("sampledata.json");
      response.write(data.toString());
    }
    response.end();
  })
  .listen(8081);