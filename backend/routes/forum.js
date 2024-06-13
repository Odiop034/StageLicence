const express = require('express');
const CtrlForum = require('../controllers/forum')

const router = express.Router();

// Ajouter un forum
router.post('/',CtrlForum.addForum );

// Obtenir tous les forums
router.get('/', CtrlForum.getAllForum);

// Obtenir un forum par ID
router.get('/:id', CtrlForum.getOneForum);

// Mettre à jour un forum
router.put('/:id',CtrlForum.modifyingForum );

// Supprimer un forum
router.delete('/:id', CtrlForum.deleteForum);

module.exports = router;
