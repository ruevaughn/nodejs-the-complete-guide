const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.routes);

const PORT = '3002';
console.log(`now listening on port: ${PORT}`)
server.listen(PORT);