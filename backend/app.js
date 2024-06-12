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

mongoose.connect('mongodb+srv://od14034:Omardiop034@cluster0.7lymngg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use('/api/utilisateurs', utilisateurRoutes);
  app.use('/api/ressources', ressourceRoutes);
  app.use('/api/forums', forumRoutes);
  app.use('/api/categories', categorieRoutes);
  app.use('/api/niveaux', niveauRoutes);
  
  module.exports = app;
