const express = require('express');
const PORT = 8000;

const app = express();

app.get('/hi', (req, res) => {
	console.log('GET /hi');
	let blob = {};
	blob.message = 'hi';
	blob.time = new Date();
	res.json(blob);
});

/**
 * this endpoint reads the query params "name", and responds back with
 * "Hello S{name), how are you?"
 * if no name is available on the query param, then respond back with
 *
 * "Hello there, how are you?"
 * /hello -> "Hello there, how are you?"
 * /hello?name=Bob -> "Hello Bob, how are you?"
 * /hello?x=Mac -> "Hell there, how are you?"
 */

app.get('/hello', (req, res) => {
	console.log('GET hello');
	console.log('query params = ', req.query.name);
	let nameQuery = req.query;
	let name = nameQuery.name;
	let greeting;
	if (name) {
		greeting = `Hello ${name}, how are you?`;
	} else {
		greeting = 'Hello there, how are you?';
	}
	res.send(greeting);
});

app.get('/sup', (req, res) => {
	console.log('GET /sup');
	res.sendStatus(204);
});

app.get('/hey', (req, res) => {
	console.log('GET /hey');
	res.status(400).send('hey is for horses');
});

app.get('/echo/?', (req, res) => {
	console.log('GET /echo');
	console.log('query params = ', req.query);
	res.json(req.query);
});

app.listen(PORT, () => {
	console.log(`Application started listening on port ${PORT}`);
});
