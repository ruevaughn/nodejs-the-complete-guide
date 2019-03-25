const routes = (req, res) => {
  const method = req.method;
  const url = req.url;

  console.log(url);

  if (url === '/') {
    res.write("<html>");
    res.write("  <head><title>assignment 1</title></head>")
    res.write("  <body>");
    res.write("    <h1>welcome to assignment 1! enjoy your stay.</h1>")
    res.write("    <h3>Create a new User?</h3>");
    res.write("    <form action='/create-user' method='POST'>");
    res.write("      <input type='text' name='username'></input>");
    res.write("      <button type='submit' value='submit'>New User</button>");
    res.write("    </form>");
    res.write("  </body>");
    res.write("</html>");
    return res.end();
  }
  if (url === '/users') {
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
  if (url === '/create-user' && method == 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      return res.end();
    })
    res.statusCode = 302; 
    res.setHeader('Location', '/');
    res.end();
  }
}

module.exports.routes = routes;