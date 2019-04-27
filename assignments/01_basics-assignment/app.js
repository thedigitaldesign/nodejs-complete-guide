const http = require('http')

// Modules
const RouteHandler = require('./routes')

const server = http.createServer(RouteHandler)

server.listen(3100)
