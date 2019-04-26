const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    const url = request.url
    const method = request.method

    let html = null

    if (url === '/') {
        html = `
            <html>
                <head>
                    <title>My First Node Page</title>
                </head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message" />
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `
    } else {
        html = `
            <html>
                <head>
                    <title>My First Node Page</title>
                </head>
                <body>
                    <h1>This is my Node.js project</h1>
                </body>
            </html>
        `
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        
        request.on('data', (chunk) => {
            body.push(chunk)
        })

        return request.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]
            
            fs.writeFile('message.txt', message, (error) => {
                response.statusCode = 302
                response.setHeader('Location', '/')
                return response.end()
            })
        })
    }

    response.setHeader('Content-Header', 'text/html')
    response.write(html)
    response.end()
})

server.listen(3001)
