const http = require('http');
const products = require('./data/products')

const server = http.createServer((req,res) => {
    res.statusCode = 200

    // content type, auth tokens, etc 
    res.setHeader('Content=Type', 'text/html')
    res.write()
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`));