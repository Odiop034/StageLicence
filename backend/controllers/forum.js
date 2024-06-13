const Forum = require('../models/Forum');

exports.addForum = async (req, res) => {
    try {
        const newForum = new Forum(req.body);
        const forum = await newForum.save();
        res.json(forum);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getAllForum = async (req, res) => {
    try {
        const forums = await Forum.find();
        res.json(forums);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.getOneForum = async (req, res) => {
    try {
        const forum = await Forum.findById(req.params.id);
        res.json(forum);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.modifyingForum = async (req, res) => {
    try {
        const forum = await Forum.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(forum);
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}

exports.deleteForum = async (req, res) => {
    try {
        await Forum.findByIdAndDelete(req.params.id);
        res.json({ message: 'Forum supprimé' });
    } catch (err) {
        res.status(500).send('Erreur du serveur');
    }
}