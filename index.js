const express = require('express');
const config = require('./config');
const proxy = require('./proxy');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(proxy)
app.listen(config.server.port, () => {
    console.log(`loclhost:${config.server.port}`);
});