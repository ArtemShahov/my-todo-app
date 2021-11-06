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
    parent: {
        type: String,
        required: false,
    },
    items: {
        type: [String],
        required: false,
    },

})

const Category = mongoose.model('Category', CategorySchema);

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

app.post('/addCategory', async (req, res) => {
    const newCategory = new Category({ ...req.body });
    await newCategory.save().then(() => console.log('yes'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
});