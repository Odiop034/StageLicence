const express = require('express');
const Categorie = require('../models/Categorie');
const router = express.Router();

// Ajouter une catégorie
router.post('/', async (req, res) => {
    try {
        const newCategorie = new Categorie(req.body);
        const categorie = await newCategorie.save();
        res.json(categorie);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir toutes les catégories
router.get('/', async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.json(categories);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir une catégorie par ID
router.get('/:id', async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        res.json(categorie);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Mettre à jour une catégorie
router.put('/:id', async (req, res) => {
    try {
        const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(categorie);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Supprimer une catégorie
router.delete('/:id', async (req, res) => {
    try {
        await Categorie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Categorie supprimée' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

module.exports = router;
