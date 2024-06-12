const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    type: { type: String, required: true, enum: ['Etudiant', 'Enseignant'] },
    details: {
        specialite: { type: String },
        idN: { type: String }
    }
});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
module.exports = Utilisateur;
