const express = require('express');
const CtrlCategorie = require('../controllers/categorie')
const router = express.Router();

// Ajouter une catégorie
router.post('/',CtrlCategorie.addCategorie );

// Obtenir toutes les catégories
router.get('/',CtrlCategorie);

// Obtenir une catégorie par ID
router.get('/:id',CtrlCategorie.getOneCategorie );

// Mettre à jour une catégorie
router.put('/:id',CtrlCategorie.modifyingCategorie);

// Supprimer une catégorie
router.delete('/:id',CtrlCategorie.deleteCategorie );

module.exports = router;
