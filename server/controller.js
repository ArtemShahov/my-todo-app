const { Category, TodoItem } = require('./mongoose');
const { v4: uuidv4 } = require('uuid');
const createId = () => uuidv4();

module.exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

module.exports.getTodoItems = async (req, res) => {
    const todoItems = await TodoItem.find();
    res.json(todoItems);
};

module.exports.addCategory = async (req, res) => {
    const { name, parentId } = req.body;
    const id = createId();
    const newCategory = new Category({ id, name, parentId, itemsId: [], childrenId: [], });
    await newCategory.save();
    if (parentId) {
        const parentCategory = await Category.findOne({ id: parentId });
        parentCategory.childrenId.push(id);
        await parentCategory.save()
    }
    const categories = await Category.find();
    res.json(categories);
};

async function deleteTodoItem(parentId) {
    const todoItems = await TodoItem.find({ parentId });
    todoItems.forEach(item => item.remove());
};

module.exports.deleteCategory = async (req, res) => {

    async function delCategory(id) {
        const category = await Category.findOne({ id: id });
        if (category) {
            const { childrenId } = category;
            await deleteTodoItem(id);
            if (childrenId.length) {
                for (const item of childrenId) {
                    await delCategory(item);
                }
            }
            await category.remove();
        }
    }

    const { categoryId: id } = req.body;
    if (id) {

        const categories = await Category.find();
        const parent = await categories.find((category => category.childrenId.includes(id)));
        await delCategory(id);
        if (parent) {
            const parentCategory = await Category.findOne({ id: parent.id });
            const childIndex = parentCategory.childrenId.indexOf(id);
            parentCategory.childrenId.splice(childIndex, 1);
            await parentCategory.updateOne({ childrenId: parentCategory.childrenId });
        }
    } else {
        const categories = await Category.find();
        for (const item of categories) {
            await delCategory(item.id);
        }
    }
    const categories = await Category.find();
    res.json(categories);
};

module.exports.addTodoItem = async (req, res) => {
    const { title, content, parentId } = req.body;
    const id = createId();

    const category = await Category.findOne({ id: parentId });
    await category.itemsId.push(id);
    await category.save();

    const newTodoItem = new TodoItem({ id, title, content, parentId, isDone: false });
    await newTodoItem.save();

    const todoItems = await TodoItem.find();
    const categories = await Category.find();
    res.json({ categories, todoItems });
};

module.exports.deleteTodoItem = async (req, res) => {
    const { id, parentId } = req.body;
    const todoItem = await TodoItem.findOne({ id });
    const category = await Category.findOne({ id: parentId });

    await todoItem.remove();
    const itemIndex = category.itemsId.indexOf(id);
    category.itemsId.splice(itemIndex, 1);
    await category.save();

    const todoItems = await TodoItem.find();
    const categories = await Category.find();

    res.json({ categories, todoItems });
};

module.exports.changeTodoItemStatus = async (req, res) => {
    const { id } = req.body;
    const todoItem = await TodoItem.findOne({ id });
    const { isDone } = todoItem;

    todoItem.isDone = !isDone;
    await todoItem.save();

    const todoItems = await TodoItem.find();
    res.json(todoItems);
}