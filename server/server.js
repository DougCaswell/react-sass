const express = require('express');

let data = { list: ['Use SASS', 'Test code'], done: ['Get lists from server'] };

const app = express();


app.get('/api/lists', (req, res) => {
    return res.status(200).send(data);
});


app.listen(4444, () => {
    console.log('running on port: 4444');
});