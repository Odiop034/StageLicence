const express = require('express');
const Ressource = require('../models/Ressource');
const router = express.Router();

// Ajouter une ressource
router.post('/', async (req, res) => {
    try {
        const newRessource = new Ressource(req.body);
        const ressource = await newRessource.save();
        res.json(ressource);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir toutes les ressources
router.get('/', async (req, res) => {
    try {
        const ressources = await Ressource.find().populate('categorieId').populate('niveauId');
        res.json(ressources);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir une ressource par ID
router.get('/:id', async (req, res) => {
    try {
        const ressource = await Ressource.findById(req.params.id).populate('categorieId').populate('niveauId');
        res.json(ressource);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Mettre à jour une ressource
router.put('/:id', async (req, res) => {
    try {
        const ressource = await Ressource.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(ressource);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Supprimer une ressource
router.delete('/:id', async (req, res) => {
    try {
        await Ressource.findByIdAndDelete(req.params.id);
        res.json({ message: 'Ressource supprimée' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

module.exports = router;
