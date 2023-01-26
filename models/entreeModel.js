const mongoose = require('mongoose');


var entreeSchema = mongoose.Schema({
    mois :{ type: String , required: true},
  paiement: { type: Number, required: true },
 
 
});



module.exports = mongoose.model('entree', entreeSchema);