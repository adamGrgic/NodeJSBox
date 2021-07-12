const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello from home page!');
})

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));