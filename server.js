const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'exemple_sqli'
});

db.connect(err => {
	if (err) throw err;
	console.log('Connected to database.');
});

// Requête SQL vulnérable
app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const query = `SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1'`;

	db.query(query, (err, results) => {
		if (err) throw err;
		if (results.length > 0) {
			res.json({ message: 'Connexion réussie!' });
		} else {
			res.json({ message: 'Nom d\'utilisateur ou mot de passe incorrect!' });
		}
	});
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
