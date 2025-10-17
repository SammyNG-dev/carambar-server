# Mini-projet Blagues Carambar

Ce projet à pour but d'être un serveur de blagues carambar. 

Dans ce lmini-projet, nous pouvons :

- Ajouter une blague (via Postman) : /api/new-joke
- Consulter toutes les blagues : /api/jokes/
- Consulter une blague grâce à son id : /api/joke/(id)
- Consulter une blague aléatoirement (depuis le front-end) : /api/random-joke

# Stack technique : 

- Backend : Node.js + Express
- ORM : Sequelize
- Base de Données : SQLite
- Déploiement : Render
- Documentation : Swagger (accessible à l'adresse https://carambar-server.onrender.com/api-docs)
- Port local : 3310



Le serveur est est accessible via : 

# Voir le code :

Pour voir le code, ouvrez votre terminal et tapez la commande 

SSH : 

git clone git@github.com:SammyNG-dev/carambar-server.git

HTTP : 

git clone https://github.com/SammyNG-dev/carambar-server.git

Puis, installez les dépendances avec :

npm install

Lancez le serveur : 

npm run start

# Arborescence du projet

```
.
├── biome.json               # Configuration de Biome (lint et formatage)
├── package.json             # Dépendances et scripts npm
├── package-lock.json        # Verrouillage des versions de dépendances
├── README.md                # Documentation du projet
└── src                      # Dossier principal du code source
    ├── app.js               # Configuration de l’application Express
    ├── database.sqlite      # Base de données SQLite locale
    ├── db.js                # Initialisation de Sequelize et connexion DB
    ├── main.js              # Point d’entrée du serveur
    ├── models/              # Dossier des modèles Sequelize
    │   └── Joke.js          # Modèle représentant une blague
    └── router.js            # Routes de l’API (endpoints Express)
```

Si vous n'avez pas installé Biome sur votre machine, voici la commande pour le faire :

npm i -g @biomejs/biome