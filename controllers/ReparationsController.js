const reparationsModel = require('../models/reparationsModel');

exports.AjoutReparation=(req,res)=>{

// repare.save()
// .then((repare)=> {
//     return res.status(201).json({repare})
// })
// .catch((error)=>{
//     return res.status(400).json({error})
// })

if (!req.body){
    res.status(400).send({message:"Cannot can not be empty"})
    return;
}
const repare = new reparationsModel({
    reference:req.body.reference,
    immatriculation:req.body.immatriculation,
    panne :req.body.panne,
    solution:req.body.solution,
    responsable: req.body.responsable,
    dateentree:req.body.dateentree,
    datesortie: req.body.datesortie,
    montanttotal: req.body.montanttotal

});
repare
.save(repare)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error about creating "})

            })
}

//retrieve and return all user
exports.FindReparation=(req,res)=>{

}
// update a new repair by id
exports.UpdateReparation=(req,res)=>{

}

// delete a repair specified by id
exports.DeleteReparation=(req,res)=>{

}

// delete all repair
exports.DeleteAllReparation=(req,res)=>{

}