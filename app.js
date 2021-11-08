const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const path = require('path');
const port = process.env.PORT || 5050;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:GNff*dYABZY2_Mn@cluster0.3eld3.mongodb.net/myFirstDatabase?');

const createId = () => {
    return uuidv4()
    // .slice(0, 6);
}

const CategorySchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        required: true,
    },
    parentId: {
        type: String,
        required: false,
    },
    items: {
        type: [String],
        required: true,
    },
    childrenId: {
        type: [String],
        require: true,
    }

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
    const { name, parentId } = req.body;
    const id = createId();
    const newCategory = new Category({ id, name, parentId, items: [], childrenId: [], });
    await newCategory.save();
    if (parentId) {
        const parentCategory = await Category.findOne({ id: parentId });
        parentCategory.childrenId.push(id);
        parentCategory.save()
    }
    const categories = await Category.find();
    res.json(categories);
})

app.post('/deleteCategory', async (req, res) => {
    const { categoryId: id } = req.body;
    async function delCategory(id) {
        console.log('tik')
        const category = await Category.findOne({ id: id });
        console.log(req.body);
        const { childrenId } = category;
        if (childrenId.length) {
            childrenId.forEach(item => delCategory(item));
        }
        await category.remove();
    }
    await delCategory(id);
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