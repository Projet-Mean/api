const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var financialSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  civilite: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  // passwordconfirmation: { type: String, required: true },
  fonction:{ type: String, required: true }
});

financialSchema.plugin(uniqueValidator);

module.exports = mongoose.model('userfinancial', financialSchema);