const mongoose = require('mongoose');


var beneficeSchema = mongoose.Schema({
    mois :{ type: String , required: true},
  montant: { type: Number, required: true },
 
 
});



module.exports = mongoose.model('benefice', beneficeSchema);