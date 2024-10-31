# Projet-Olivier //IN PROGRESS//
Projet d'API pour utilisation encore inconnue

Le back-end est en Node.js et contient les dépendances suivantes (disponibles dans le fichier package.json):

```
"bcrypt": "^5.1.1",
"body-parser": "^1.20.3",
"cors": "^2.8.5",
"express": "^4.21.1",
"mongodb": "^6.9.0",
"mongoose": "^8.7.2",
"nodemon": "^3.1.7"
```

## Initialisation :rocket:

1. Cloner le depôt Git ou télécharger le.
2. Depuis le dossier lancer la commande  `npm install` pour installer toute les dépendances
3. Lancez le backend avec la commande `npm run start` (depuis vsCode) ou `nodemon server` (depuis git bash)

> [!WARNING]  
> Ce back-end utilise une base de donnée [mongoDB](https://www.mongodb.com/fr-fr) via [mongoose](https://mongoosejs.com). Cela requiert des identifiants de connexion qui ne sont pas publics, vous pouvez en faire la demande en MP / utiliser vos propres identifiants mongoDB en changeant la ligne 9 dans `index.js` avec vos propres identifiants.
