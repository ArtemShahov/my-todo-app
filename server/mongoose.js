const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:GNff*dYABZY2_Mn@cluster0.3eld3.mongodb.net/myFirstDatabase?');

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
    itemsId: {
        type: [Object],
        required: true,
    },
    childrenId: {
        type: [String],
        require: true,
    }

});
const TodoItemsSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        require: true,
    },
    parentId: {
        type: String,
        require: true,
    },

});

module.exports.Category = mongoose.model('Category', CategorySchema);
module.exports.TodoItem = mongoose.model('TodoItem', TodoItemsSchema);