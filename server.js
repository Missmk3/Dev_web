// Étape 1: Importer le module HTTP
const http = require('http');

// Étape 2: Créer le serveur
const server = http.createServer((req, res) => {
    // À chaque requête vers le serveur, ce code sera exécuté

    res.writeHead(200, { 'Content-Type': 'text/plain' }); // On définit le statut HTTP et les en-têtes de la réponse
    res.end('Salut, bienvenue sur mon serveur!'); // On envoie une réponse au client
});

// Étape 3: Démarrer le serveur 
server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});