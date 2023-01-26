
const depenseModel = require('../models/depenseModel')


exports.AjoutDepense=(req,res)=>{



if (!req.body){
    res.status(400).send({message:"Cannot can not be empty"})
    return;
}
const depense = new depenseModel({
    salaire:req.body.salaire,
    loyer:req.body.loyer,
    pieces:req.body.pieces,
    autres:req.body.autres,
    montantTotal: req.body.montantTotal,
 
});
depense
.save(depense)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error about creating "})

            })
}
  //retrieve and return all facture: singlefacture
  exports.getOneDepense=(req,res)=>{
    const id =req.params.id
    depenseModel.findOne({_id:id})
    .then((depenseModel)=>{return res.status(200).json({depenseModel})} )
    .catch((error)=>{return res.status(400).json(error)})
}

exports.getAllDepense=(req,res)=>{

    depenseModel.find()
.then((depenseModel)=>{return res.status(200).json({depenseModel})} )
.catch((error)=>{return res.status(400).json(error)})
}


// update a new facture by id
exports.UpdateDepense=(req,res)=>{
 if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
 }

    const id = req.params.id;

    depenseModel.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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
exports.DeleteOneDepense=(req,res)=>{
    const id = req.params.id;
    DepenseModel.findByIdAndDelete(id)
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
exports.DeleteAllDepense=(req,res)=>{

}