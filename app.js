const http = require('http')

// Modules
const routes = require('./routes')

// Server
const server = http.createServer(routes)

server.listen(3001)
