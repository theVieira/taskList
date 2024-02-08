require('dotenv').config();
require('./services/database');

const express = require('express');
const app = express();
app.use(express.json());
// eslint-disable-next-line no-undef
const port = process.env.SERVER_PORT;

const router = require('./router');
app.use(router);

app.listen(port, () => {
	console.log('server running, port ' + port);
});

module.exports = app;