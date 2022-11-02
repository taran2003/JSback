const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('get request');
});

app.get('/user', (req, res) => {
    res.send('user path get request');
});

app.options('/', (req, res) => {
    res.send('options request');
});

app.head('/', (req, res) => {
    res.header('key','value');
});

app.put('/', (req, res) => {
    res.send('put request');
});

app.patch('/', (req, res) => {
    res.send('patch request');
});


app.delete('/', (req, res) => {
    res.send('delete request');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});