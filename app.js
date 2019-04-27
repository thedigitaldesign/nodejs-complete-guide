// Packages
const express = require('express')

// Exports


// Server
const app = express()

//-- NOTE:  .use will be used for every incoming request
// app.use((request, response, next) => {
//     console.log('In the middleware')
//     next() //-- NOTE: Allows the request to continue to the next middleware in-line
// })

app.use('/add-product', (request, response, next) => {
    response.send(`
        <h1>Add Product!</h1>
    `)
    //-- NOTE:  Do not call next() after you send, it will execute the next .use(...)
    //--        which is not desired functionality and result in an error.
})

app.use('/', (request, response, next) => {
    console.log('In another middleware')
    response.send(`
        <h1>Hello from Express.js</h1>
    `)
})

// const server = http.createServer(app)
// server.listen(3001)

app.listen(3001)
