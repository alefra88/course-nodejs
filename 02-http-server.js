/*
'use strict'

var http = require('http')

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'})
	response.end('Hello World\n')
}).listen(1337, "127.0.0.1")

console.log('Server running at http://127.0.0.1:1337/')
*/
"use strict";

// var http = require("http");

// function webServer(req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hola Node.js</h1>");
// }

// http.createServer(webServer).listen(3000, "localhost");

// console.log("Servidor corriendo en http://localhost:3000/");

//new form to say hello! xd
const http = require("http"),
  hostname = "localhost",
  port = 3000,
  server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World</h1>");
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
