const Categorie = require('../models/Categorie');

exports.addCategorie = async (req, res) => {
    try {
        const newCategorie = new Categorie(req.body);
        const categorie = await newCategorie.save();
        res.json(categorie);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getOneCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        res.json(categorie);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getAllCategorie =  async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.json(categories);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.modifyingCategorie =  async (req, res) => {
    try {
        const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(categorie);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.deleteCategorie = async (req, res) => {
    try {
        await Categorie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Categorie supprimée' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}