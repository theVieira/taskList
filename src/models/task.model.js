const { Schema, default: mongoose } = require('mongoose');

const taskSchema = new Schema({
	title: String,
	checked: Boolean,
	default: false
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;