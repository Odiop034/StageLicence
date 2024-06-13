const Niveau = require('../models/Niveau');

exports.addNiveau = async (req, res) => {
    try {
        const newNiveau = new Niveau(req.body);
        const niveau = await newNiveau.save();
        res.json(niveau);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getAllNiveau = async (req, res) => {
    try {
        const niveaux = await Niveau.find();
        res.json(niveaux);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getOneNiveau = async (req, res) => {
    try {
        const niveau = await Niveau.findById(req.params.id);
        res.json(niveau);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.modifyingNiveau = async (req, res) => {
    try {
        const niveau = await Niveau.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(niveau);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.deleteNiveau = async (req, res) => {
    try {
        await Niveau.findByIdAndDelete(req.params.id);
        res.json({ message: 'Niveau supprimé' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}