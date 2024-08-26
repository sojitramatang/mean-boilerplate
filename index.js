import express from 'express';
import config from './config.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log(`loclhost:${config.server.port}`);
});