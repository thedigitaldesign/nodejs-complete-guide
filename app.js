// Packages
const express = require('express')
const body_parser = require('body-parser')


// Exports
const admin = require('./routes/admin')
const shop = require('./routes/shop')


// App
const app = express()
let html = (body) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            ${ body }
        </body>
        </html>
    `
}
let body = ``

app.use(body_parser.urlencoded({
        extended: false
    }))
    .use('/admin', admin)
    .use(shop)

app.use((request, response, next) => {
    body = `
        <h1>Page not found</h1>
        <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FPKffm2uI4dk%2Fmaxresdefault.jpg&f=1" />
    `
    response.status(404).send(html(body))
})


// Server
app.listen(3001)

//-- NOTE: Vanilla Node.js
// const server = http.createServer(app)
// server.listen(3001)
