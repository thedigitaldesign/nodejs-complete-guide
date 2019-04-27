const fs = require('fs')

const RouteHandler = (request, response) => {
    const url = request.url
    const method = request.method

    const page = (path) => {
        fs.readFile(path, (error, html) => {
            if (error) {
                throw error
            }

            response.setHeader('Content-Header', 'text/html')
            response.write(html)
            response.end()
        })
    }

    if (url === '/') {
        page('./html/root.html')
    }
    else if (url === '/users') {
        page('./html/users.html')
    }
    else if (url === '/create-user' && method === 'POST') {
        //page('./html/create-user.html')
        const body = []
        request
            .on('data', chunk => {
                console.log(chunk)
                body.push(chunk)
            })
            .on('end', () => {
                const parser = Buffer.concat(body).toString()
                const username = parser.split('=')[1]

                console.log('[parser]: ', parser)
                console.log('[username]', username)
            })

        response.statusCode = 302
        response.setHeader('Location', '/')
        response.end()
    }
    else {
        page('./html/404.html')
    }
}

module.exports = RouteHandler
