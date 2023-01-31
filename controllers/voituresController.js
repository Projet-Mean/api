const voitureModel = require('../models/voituresModel');

exports.AjoutVoiture=(req,res)=>{

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
const voiture = new voitureModel({
    immatriculation: req.body.immatriculation,
    id_client:req.body.id_client,
    marque: req.body.marque,
    modele:req.body.modele,
    annee:req.body.annee,
    attente:req.body.attente,
    assigne:req.body.assigne,
});
voiture
.save(voiture)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error about creating "})

            })
}
  //retrieve and return all reparation: singlereparation
    exports.getOneVoiture=(req,res)=>{
        const id =req.params.id
        voitureModel.findOne({_id:id})
            .then((voitureModel)=>{return res.status(200).json({voitureModel})} )
            .catch((error)=>{return res.status(400).json(error)})
    }

    exports.getAllVoiture=(req,res)=>{
        voitureModel.find()
        .then((voitureModel)=>{console.log(voitureModel);return res.status(200).json({voitureModel})} )
        .catch((error)=>{return res.status(400).json(error)})
    }
    
    exports.getVoiturebycli=(req,res)=>{
        const id =req.params.id
        console.log(id);
        voitureModel.find({id_client: {$eq:id},sortie:{$eq:"0"}})
        .then((voitureModel)=>{return res.status(200).json({voitureModel})} )
        .catch((error)=>{return res.status(400).json(error)})
    }
    exports.getAllVoitureAt=(req,res)=>{
        voitureModel.find({attente : {$ne : false}})
        .then((voitureModel)=>{return res.status(200).json({voitureModel})} )
        .catch((error)=>{return res.status(400).json(error)})
    }
    exports.getAllVoitureMine=(req,res)=>{
        const id =req.params.id
        voitureModel.find({assigne : {$eq : id}})
        .then((voitureModel)=>{return res.status(200).json({voitureModel})} )
        .catch((error)=>{return res.status(400).json(error)})
    }
    exports.sortie=(req,res)=>{
        voitureModel.find({sortie:{$eq:"1"}})
        .then((voitureModel)=>{return res.status(200).json({voitureModel})} )
        .catch((error)=>{return res.status(400).json(error)})
    }


// update a new repair by id
exports.UpdateVoiture=(req,res)=>{
 if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
 }

    const id = req.params.id;

    voitureModel.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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
exports.DeleteOneVoiture=(req,res)=>{
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
exports.DeleteAllVoiture=(req,res)=>{

}


