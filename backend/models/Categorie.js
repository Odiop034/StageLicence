const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorieSchema = new Schema({
    nomC: { type: String, required: true },
    description: { type: String, required: true }
});

const Categorie = mongoose.model('Categorie', categorieSchema);
module.exports = Categorie;
