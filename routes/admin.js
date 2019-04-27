// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('../util/path')


// Routes
const router = express.Router()
let page = null

router.get('/add-product', (request, response, next) => {
    page = path.join(dir, 'views', 'add-product.html')
    response.sendFile(page)
})

router.post('/add-product', (request, response, next) => {
    console.log(request.body)
    response.redirect('/')
})


// Export
module.exports = router
