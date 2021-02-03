var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (request.url === "/") {
      response.write("<h1>Nodemon</h1>");
    } else if (request.url === "/helloworld") {
      response.write("<h1>Node</h1>");
    } else if (request.url === "/table") {
      response.write("<h1>Table</h1>");
      response.write(`<table border>
       <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Number</th>
        </tr>
        <tr>
          <td>Jari Litmanen</td>
          <td>Ajax</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Teemu Selanne</td>
          <td>Winnipeg Jets</td>
          <td>8</td>
        </tr>
      </table>`);
    }
    response.end("<h1>Hello World!</h1>");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
