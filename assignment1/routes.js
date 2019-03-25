const routes = (req, res) => {
  const method = req.method;
  const url = req.url;

  console.log(url);

  if (url === '/') {
    res.write("<html>");
    res.write("  <head><title>assignment 1</title></head>")
    res.write("  <body>");
    res.write("    <h1>welcome to assignment 1! enjoy your stay.</h1>")
    res.write("  </body>");
    res.write("</html>");
    return res.end();
  }
  if (url === '/users') {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("  <body>");
    res.write("    <h3>Users</h3>");
    res.write("    <ul>");
    res.write("      <li>User 1</li>");
    res.write("      <li>User 2</li>");
    res.write("      <li>User 3</li>");
    res.write("      <li>User 4</li>");
    res.write("    </ul>");
    res.write("  </body>");
    res.write("</html>");
    res.end();
  }
}

module.exports.routes = routes;