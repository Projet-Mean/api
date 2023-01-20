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
  //retrieve and return all reparation: singlereparation
  exports.getOneRepare=(req,res)=>{
    const id =req.params.id
    reparationsModel.findOne({_id:id})
    .then((reparationsModel)=>{return res.status(200).json({reparationsModel})} )
    .catch((error)=>{return res.status(400).json(error)})
}

exports.getAllRepare=(req,res)=>{

reparationsModel.find()
.then((reparationsModel)=>{return res.status(200).json({reparationsModel})} )
.catch((error)=>{return res.status(400).json(error)})
}


// update a new repair by id
exports.UpdateReparation=(req,res)=>{
 if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
 }

    const id = req.params.id;

    reparationsModel.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
.then(data=>{
    if(!data){
        res.status(404).send({message:"cannot update user with ${id}. maybe user not found!"})
    }
    else {
        res.send(data)
    }
}).catch(err=>{
    res.status(500).send({message:"error update user information"})
})
 }


// delete a repair specified by id
exports.DeleteOneReparation=(req,res)=>{
    const id = req.params.id;
    reparationsModel.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"cannot delete with ${id} ,  maybe id is wrong"})
        }
        else{
            res.send({message:"user deleted successfully"})
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Could not delete user with id="+id})
    })

}

// delete all repair
exports.DeleteAllReparations=(req,res)=>{

}


