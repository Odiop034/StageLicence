const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ressourceSchema = new Schema({
    description: { type: String, required: true },
    type: { type: String, required: true, enum: ['Exercice', 'Video', 'PDF'] },
    details: {
        idExo: { type: String },
        idVideo: { type: String },
        idPdf: { type: String }
    },
    categorieId: { type: Schema.Types.ObjectId, ref: 'Categorie' },
    niveauId: { type: Schema.Types.ObjectId, ref: 'Niveau' }
});

const Ressource = mongoose.model('Ressource', ressourceSchema);
module.exports = Ressource;
