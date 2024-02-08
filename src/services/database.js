const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dev')
	.then(console.log('mongo connected'))
	.catch((e) => console.log(e));

module.exports = mongoose;