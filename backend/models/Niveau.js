const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const niveauSchema = new Schema({
    codeN: { type: String, required: true },
    descriptionN: { type: String, required: true }
});

const Niveau = mongoose.model('Niveau', niveauSchema);
module.exports = Niveau;
