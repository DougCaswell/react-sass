const express = require('express');

let id = 2

let data = { list: [{ task: 'Use SASS', id: 0 }, { task: 'Test code', id: 1 }], done: [{ task: 'Get lists from server', id: 2 }] };

const app = express();

app.use(express.json());


app.get('/api/lists', (req, res) => {
    return res.status(200).send(data);
});

app.post('/api/newToDo', (req, res) => {
    let { task } = req.body;
    id++
    data.list.push({ task, id });
    res.status(200).send(data);
});

app.put('/api/finish', (req, res) => {
    let { id } = req.body
    let index = data.list.findIndex(todo => todo.id === id);
    let item = data.list.splice(index, 1);
    data.done.push(item[0]);
    res.status(200).send(data);
})

app.delete('/api/remove/:id', (req, res) => {
    let { id } = req.param;
    let index = data.done.findIndex(item => item.id === id);
    data.done.splice(index, 1);
    res.status(200).send(data);
})


app.listen(4444, () => {
    console.log('running on port: 4444');
});