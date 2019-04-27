// Packages
const express = require('express')

// Exports

// App
const router = express.Router()
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

router.get('/', (request, response, next) => {
    body = `
        <h1>Welcome to my Express.js store</h1>
    `
    response.send(html(body))
})

module.exports = router
