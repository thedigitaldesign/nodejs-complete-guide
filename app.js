// Packages
const express = require('express')
const body_parser = require('body-parser')
const path = require('path')


// Modules
const dir = require('./util/path')
const admin = require('./routes/admin')
const shop = require('./routes/shop')


// App
const app = express()
let page = null

app.use(body_parser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(dir, 'public')))


app.use('/admin', admin)
app.use(shop)

app.use((request, response, next) => {
    page = path.join(dir, 'views', '404.html')
    response.status(404).sendFile(page)
})


// Server
app.listen(3001)

//-- NOTE: Vanilla Node.js
// const server = http.createServer(app)
// server.listen(3001)
