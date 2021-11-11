const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5050;
const { getCategories, getTodoItems, addCategory, deleteCategory, addTodoItem, deleteTodoItem } = require('./controller');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('build'));

app.get('/getCategories', getCategories);
app.get('/getTodoItems', getTodoItems);
app.post('/addCategory', addCategory);
app.post('/addTodoItem', addTodoItem);
app.post('/deleteCategory', deleteCategory);
app.post('/deleteTodoItem', deleteTodoItem);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
});