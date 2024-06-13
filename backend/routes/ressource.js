const express = require('express');
const CtrlRessource = require('../controllers/ressource')
const router = express.Router();

// Ajouter une ressource
router.post('/', CtrlRessource.addRessource);

// Obtenir toutes les ressources
router.get('/',CtrlRessource.getAllRessource );

// Obtenir une ressource par ID
router.get('/:id',CtrlRessource.getOneRessource );

// Mettre à jour une ressource
router.put('/:id',CtrlRessource.modifyingRessource );

// Supprimer une ressource
router.delete('/:id',CtrlRessource.deleteRessource );

module.exports = router;
