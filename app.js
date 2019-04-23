const http = require('http')

const server = http.createServer((request, response) => {
    // console.log('====================================');
    // console.log(request.url, request.method, request.headers);
    // console.log('====================================');

    const url = request.url

    let html = null

    if (url === '/') {
        html = `
            <html>
                <head>
                    <title>My First Node Page</title>
                </head>
                <body>
                    <form action="/message" method="POST" name="message">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `
    }

    response.setHeader('Content-Header', 'text/html')
    response.write(html)
    response.end()
})

server.listen(3001)
