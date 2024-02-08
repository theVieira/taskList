const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	checked: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;