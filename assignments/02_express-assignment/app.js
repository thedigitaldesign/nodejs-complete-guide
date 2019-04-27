// Packages
const express = require('express')

// Modules

// App
const app = express()
let html = ``

//-- Task 2
// app.use((request, response, next) => {
//     console.log('I am in the first app.use(...)')
//     next()
// })

// app.use((request, response, next) => {
//     console.log('I am in the SECOND app.use(...)')
//     response.end()
// })

//-- Task 3
app.use('/users', (request, response, next) => {
    html = `
        <h1>Users</h1>
    `
    response.send(html)
})

app.use((request, response, next) => {
    html = `
        <h1>Home</h1>
    `
    response.send(html)
})

// Server
app.listen(3200)
