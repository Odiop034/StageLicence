const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateur');
const ressourceRoutes = require('./routes/ressource');
const forumRoutes = require('./routes/forum');
const categorieRoutes = require('./routes/categorie');
const niveauRoutes = require('./routes/niveau');



const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.error('Connexion à MongoDB échouée !', err));

  app.use('/api/utilisateurs', utilisateurRoutes);
  app.use('/api/ressources', ressourceRoutes);
  app.use('/api/forums', forumRoutes);
  app.use('/api/categories', categorieRoutes);
  app.use('/api/niveaux', niveauRoutes);
  
  module.exports = app;
