const mongoose = require('mongoose');

const reparationsSchema = mongoose.Schema({
    reference: { type: String, required: true },
    immatriculation: { type: String, required: true },
    panne :{type: String, required: true},
    solution:{type: String, required: true},
    responsable: { type: String, required: true },
    dateentree: { type: String, required: true },
    datesortie: { type: String, required: true },
    montanttotal: { type:String, required: true , }
    
    
    
  });
  
  
  module.exports = mongoose.model('reparationModel', reparationsSchema);