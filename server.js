const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
	{ id: 1, name: 'Tunar', age: 14 },
	{ id: 2, name: 'Islam', age: 21 },
	{ id: 3, name: 'Nihad', age: 22 },
];

app.get('/users', (req, res) => {
	res.json(users);
});
app.listen(3000, () => {
	console.log('Example app listening on port', PORT);
});