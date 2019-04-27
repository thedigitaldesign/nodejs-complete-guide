// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('./util/path')
const users = require('./routes/users')


// App
const app = express()

app.use(express.static(path.join(dir, 'public')))

app.use(users)


// Server
app.listen(3300)
