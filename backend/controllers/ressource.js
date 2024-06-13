const Ressource = require('../models/Ressource');

exports.addRessource = async (req, res) => {
    try {
        const newRessource = new Ressource(req.body);
        const ressource = await newRessource.save();
        res.json(ressource);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getAllRessource = async (req, res) => {
    try {
        const ressources = await Ressource.find().populate('categorieId').populate('niveauId');
        res.json(ressources);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getOneRessource = async (req, res) => {
    try {
        const ressource = await Ressource.findById(req.params.id).populate('categorieId').populate('niveauId');
        res.json(ressource);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.modifyingRessource = async (req, res) => {
    try {
        const ressource = await Ressource.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(ressource);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.deleteRessource = async (req, res) => {
    try {
        await Ressource.findByIdAndDelete(req.params.id);
        res.json({ message: 'Ressource supprimée' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}