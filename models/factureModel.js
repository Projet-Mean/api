const mongoose = require('mongoose');


var factureSchema = mongoose.Schema({
  reference: { type: String, required: true },
  idreparation: { type: String, required: true },
  paiement: { type: String, required: true },
});



module.exports = mongoose.model('facture', factureSchema);