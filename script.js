document.getElementById('loginForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Empêche le rechargement de la page

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Envoyer les données au serveur
	fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: username,
			password: password
		})
	})
		.then(response => response.json())
		.then(data => {
			document.getElementById('result').textContent = data.message;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
});
