const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');

router.get('/', async (req, res) => {
	try {
		const tasks = await Task.find();
		res
			.status(200)
			.json({ tasks: tasks });

	} catch (e) {
		res
			.status(500)
			.send(e);
	}
});

router.post('/', async (req, res) => {
	try {
		const { title } = req.body;
		const newTask = await Task.create({ title: title, checked: false });
		
		res
			.status(200)
			.json({ created: newTask });

	} catch (e) {
		res
			.status(422)
			.json({ error: e });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndDelete(id);
		res	
			.status(200)
			.json({ deleted: task });

	} catch (e) {
		res
			.status(422)
			.json({ error: e });
	}
});

module.exports = router;