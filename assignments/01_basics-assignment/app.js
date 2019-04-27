const http = require('http')

// Exports
const RouteHandler = require('./routes')

const server = http.createServer(RouteHandler)

server.listen(3100)
