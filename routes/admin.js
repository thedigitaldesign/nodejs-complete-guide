// Packages
const express = require('express')
const body_parser = require('body-parser')

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

//-- NOTE:  .use will be used for every incoming request
// app.use((request, response, next) => {
//     console.log('In the middleware')
//     next() //-- NOTE: Allows the request to continue to the next middleware in-line
// })

router.get('/add-product', (request, response, next) => {
    body = `
        <h1>Add Product</h1>
        <form action="/admin/add-product" method="POST">
            <input type="text" name="title" />
            <button>Add Product</button>
        </form>
    `
    response.send(html(body))
    //-- NOTE:  Do not call next() after you send, it will execute the next .use(...)
    //--        which is not desired functionality and result in an error.
})

router.post('/add-product', (request, response, next) => {
    console.log(request.body)
    response.redirect('/')

    // body = `
    //     <h1>Add Product</h1>
    //     <form action="/product" method="POST">
    //         <input type="text" name="title" />
    //         <button>Add Product</button>
    //     </form>
    // `
    // response.send(html(body))
})

module.exports = router
