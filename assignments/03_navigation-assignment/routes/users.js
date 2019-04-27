// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('../util/path')


// Routes
const router = express.Router()
let page = null

router.get('/users', (request, response, next) => {
    page = path.join(dir, 'views', 'users.html')
    response.sendFile(page)
})

router.get('/', (request, response, next) => {
    page = path.join(dir, 'views', 'index.html')
    response.sendFile(page)
})


// Export
module.exports = router
