const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, "text/html");
  res.write("<h1>Hello Node!!!!</h1>\n");
  res.end();
});

server.listen(3000);
