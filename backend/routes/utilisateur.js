const express = require('express');

const CrtlUser =require('../controllers/utilisateur')
const router = express.Router();

// Ajouter un utilisateur
router.post('/', async (req, res) => {
    try {
        const newUser = new Utilisateur(req.body);
        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.find();
        res.json(utilisateurs);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Obtenir un utilisateur par ID
router.get('/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findById(req.params.id);
        res.json(utilisateur);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Mettre à jour un utilisateur
router.put('/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(utilisateur);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

// Supprimer un utilisateur
router.delete('/:id', async (req, res) => {
    try {
        await Utilisateur.findByIdAndDelete(req.params.id);
        res.json({ message: 'Utilisateur supprimé' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
});

module.exports = router;
