const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
const port = process.env.PORT || 5050;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:GNff*dYABZY2_Mn@cluster0.3eld3.mongodb.net/myFirstDatabase?');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    items: {
        type: [String],
        required: true,
    },
    parent: {
        type: String,
        required: false,
    },
    
})

const Category = mongoose.model('Category', CategorySchema);

const first = new Category({name: 'test', items: [],});
first.save();

// const categories = [{
//         name: 'cat1',
//         items: ['item1', 'item2'],
//     },
//     {
//         name: 'cat2',
//         items: ['item3', 'item2'],
//     },
//     {
//         name: 'cat3',
//         items: [],
//     },
//     {
//         name: 'cat4',
//     },
//     {
//         name: 'cat5',
//     },
//     {
//         name: 'cat6',
//     },
//     {
//         name: 'cat7',
//         parent: 'cat1',
//     },
//     {
//         name: 'cat8',
//         parent: 'cat1',
//     },
//     {
//         name: 'cat9',
//         parent: 'cat8',
//     },
//     {
//         name: 'cat10',
//         parent: 'cat1',
//     }
// ];

// const categoriesItems = [
//     {
//         name: 'item1',
//         content: 'To do 1',
//     },
//     {
//         name: 'item2',
//         content: 'To do 2',
//     },
//     {
//         name: 'item3',
//         content: 'To do 3',
//     },
// ];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('build'));

app.get('/getCategories', async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
});