const express = require('express');
const Forum = require('../models/Forum');
const router = express.Router();

// Ajouter un forum
router.post('/', async (req, res) => {
    try {
        const newForum = new Forum(req.body);
        const forum = await newForum.save();
        res.json(forum);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir tous les forums
router.get('/', async (req, res) => {
    try {
        const forums = await Forum.find();
        res.json(forums);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir un forum par ID
router.get('/:id', async (req, res) => {
    try {
        const forum = await Forum.findById(req.params.id);
        res.json(forum);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Mettre à jour un forum
router.put('/:id', async (req, res) => {
    try {
        const forum = await Forum.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(forum);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Supprimer un forum
router.delete('/:id', async (req, res) => {
    try {
        await Forum.findByIdAndDelete(req.params.id);
        res.json({ message: 'Forum supprimé' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

module.exports = router;
