const mongoose = require('mongoose');


var depensesSchema = mongoose.Schema({
  mois : {type:String, required : true},
  salaire: { type: Number, required: true },
  loyer: { type: Number, required: true },
  pieces: { type: Number, required: true },
  autres: { type: Number, required: true },
  montantTotal :{type: Number, required: true}
 
});



module.exports = mongoose.model('depense', depensesSchema);