const mongoose = require('mongoose');


const voituresSchema = mongoose.Schema({
    immatriculation: { type: String, required: true },
    id_client: { type: String, required: true },
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    annee: { type: String, required: true },
    attente: { type: Boolean, required: true },
    assigne: { type: String, required: true },
    sortie: { type: String, required: true }
    
 });
  

  module.exports = mongoose.model('voitures', voituresSchema);
