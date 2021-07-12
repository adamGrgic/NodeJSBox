const express = require('express');
const bodyParser = require('body-parser')

// routes 
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

// old: deprecated 
app.use(bodyParser.json());

app.use('/users', usersRoutes);


// making a request to root route (localhost:PORT) === '/'
app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello from home page!');
})

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));