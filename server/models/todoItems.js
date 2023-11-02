const mongoose = require('mongoose');

const TodoItemsSchema = new mongoose.Schema({
    item: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('todo', TodoItemsSchema)