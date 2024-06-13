const express = require('express');
const CtrlNiveau = require('../controllers/niveau')
const router = express.Router();

// Ajouter un niveau
router.post('/',CtrlNiveau.addNiveau );

// Obtenir tous les niveaux
router.get('/', CtrlNiveau.getAllNiveau);

// Obtenir un niveau par ID
router.get('/:id', CtrlNiveau.getOneNiveau);

// Mettre à jour un niveau
router.put('/:id', CtrlNiveau.modifyingNiveau);

// Supprimer un niveau
router.delete('/:id',CtrlNiveau.deleteNiveau );

module.exports = router;
