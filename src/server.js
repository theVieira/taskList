require('dotenv').config();
const express = require('express');
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.SERVER_PORT;

app.listen(port, () => {
	console.log('server running, port ' + port);
});

module.exports = app;