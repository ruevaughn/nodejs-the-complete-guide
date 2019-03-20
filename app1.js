const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>hi</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3001);
