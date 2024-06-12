const express = require('express');
const Niveau = require('../models/Niveau');
const router = express.Router();

// Ajouter un niveau
router.post('/', async (req, res) => {
    try {
        const newNiveau = new Niveau(req.body);
        const niveau = await newNiveau.save();
        res.json(niveau);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir tous les niveaux
router.get('/', async (req, res) => {
    try {
        const niveaux = await Niveau.find();
        res.json(niveaux);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir un niveau par ID
router.get('/:id', async (req, res) => {
    try {
        const niveau = await Niveau.findById(req.params.id);
        res.json(niveau);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Mettre à jour un niveau
router.put('/:id', async (req, res) => {
    try {
        const niveau = await Niveau.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(niveau);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Supprimer un niveau
router.delete('/:id', async (req, res) => {
    try {
        await Niveau.findByIdAndDelete(req.params.id);
        res.json({ message: 'Niveau supprimé' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

module.exports = router;
