// Packages
const express = require('express')
const body_parser = require('body-parser')
const path = require('path')


// Modules
const dir = require('./util/path')
const admin = require('./routes/admin')
const shop = require('./routes/shop')


// App
const app = express()


// Engines: Handlebars
// const handlebars = require('express-handlebars')
// app.engine(
//     'hbhtml', //-- NOTE: This name applies to all files EXCEPT layouts
//     handlebars({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: '_layout',
//         extname: 'hbhtml' //-- NOTE: This name applies to ONLY layouts
// }))
// app.set('view engine', 'hbhtml')
// app.set('views', 'views/handlebars')

// Engines: EJS
app.set('view engine', 'ejs')
app.set('views', 'views/ejs')

// Middleware
app.use(body_parser.urlencoded({ extended: false }))
app.use(express.static(path.join(dir, 'public')))

app.use('/admin', admin.routes)
app.use(shop.routes)

app.use((request, response, next) => {
    response.status(404).render('404', {
        title: 'Page Not Found: Sad Cat Can'
    })
})


// Server
app.listen(3001)

//-- NOTE: Vanilla Node.js
// const server = http.createServer(app)
// server.listen(3001)
