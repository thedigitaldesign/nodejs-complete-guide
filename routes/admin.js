// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('../util/path')


// Routes
const router = express.Router()
let page = null
const products = []

router.get('/add-product', (request, response, next) => {
    //page = path.join(dir, 'views', 'add-product')
    //response.sendFile(page)

    const blob = { 
        title: 'Add Product', 
        path: '/admin/add-product', 
    }

    response.render('add-product', blob)
})

router.post('/add-product', (request, response, next) => {
    products.push({ 
        title: request.body.title,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51gEY86ijML._SX474_BO1,204,203,200_.jpg',
        alt: '',
        price: 14.99,
        description: 'What\'s a knock- out like you doing in a computer - generated gin joint like this ? We could cause a diplomatic crisis.Take the ship into the Neutral Zone Not if I weaken first.How long can two people talk about nothing ? You enjoyed that.'
    })

    response.redirect('/')
})


// Exports
module.exports = {
    routes: router,
    products: products
}
