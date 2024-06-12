const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    idChat: { type: Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    utilisateurId: { type: Schema.Types.ObjectId, ref: 'Utilisateur', required: true }
});

const forumSchema = new Schema({
    nom: { type: String, required: true },
    messages: [messageSchema]
});

const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum;
