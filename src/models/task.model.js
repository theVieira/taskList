const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
	title: String,
	checked: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;