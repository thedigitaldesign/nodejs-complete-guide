// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('../util/path')
const admin = require('./admin')


// Routes
const router = express.Router()
let page = null

router.get('/', (request, response, next) => {
    // Express
    //page = path.join(dir, 'views', 'shop.html')
    //response.sendFile(page)

    // Pug - Handlebars (hbhtml)
    const product = admin.products
    response.render('shop', { 
        products: product, 
        title: 'Shop',
        empty: product.length > 0
    })
})


// Exports
module.exports = {
    routes: router
}
