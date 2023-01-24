const factureModel = require('../models/factureModel');


exports.AjoutFacture=(req,res)=>{



if (!req.body){
    res.status(400).send({message:"Cannot can not be empty"})
    return;
}
const facture = new factureModel({
    reference:req.body.reference,
    idreparation:req.body.idreparation,
    paiement :req.body.paiement,
  

});
facture
.save(facture)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error about creating "})

            })
}
  //retrieve and return all facture: singlefacture
  exports.getOneFacture=(req,res)=>{
    const id =req.params.id
    factureModel.findOne({_id:id})
    .then((factureModel)=>{return res.status(200).json({factureModel})} )
    .catch((error)=>{return res.status(400).json(error)})
}

exports.getAllFacture=(req,res)=>{

    factureModel.find()
.then((factureModel)=>{return res.status(200).json({factureModel})} )
.catch((error)=>{return res.status(400).json(error)})
}


// update a new facture by id
exports.UpdateFacture=(req,res)=>{
 if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
 }

    const id = req.params.id;

    factureModel.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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


// delete a facture specified by id
exports.DeleteOneFacture=(req,res)=>{
    const id = req.params.id;
    factureModel.findByIdAndDelete(id)
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

// delete all facture
exports.DeleteAllFacture=(req,res)=>{

}