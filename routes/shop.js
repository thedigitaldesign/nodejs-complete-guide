// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('../util/path')


// Routes
const router = express.Router()
let page = null

router.get('/', (request, response, next) => {
    page = path.join(dir, 'views', 'shop.html')
    response.sendFile(page)
})


// Export
module.exports = router
