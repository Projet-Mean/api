
const entreeModel = require ('../models/entreeModel')


exports.AjoutEntree=(req,res)=>{



if (!req.body){
    res.status(400).send({message:"Cannot can not be empty"})
    return;
}
const entree = new EntreeModel({
    mois :req.body.salaire,
  paiement:req.body.salaire ,
    
 
});
entree
.save(entree)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error about creating "})

            })
}
  //retrieve and return all facture: singlefacture
  exports.getOneEntree=(req,res)=>{
    const id =req.params.id
    entreeModel.findOne({_id:id})
    .then((entreeModel)=>{return res.status(200).json({entreeModel})} )
    .catch((error)=>{return res.status(400).json(error)})
}

exports.getAllEntree=(req,res)=>{

    entreeModel.find()
.then((entreeModel)=>{return res.status(200).json({entreeModel})} )
.catch((error)=>{return res.status(400).json(error)})
}


// update a new facture by id
exports.UpdateEntree=(req,res)=>{
 if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
 }

    const id = req.params.id;

    entreeModel.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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
exports.DeleteOneEntree=(req,res)=>{
    const id = req.params.id;
    entreeModel.findByIdAndDelete(id)
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
exports.DeleteAllEntree=(req,res)=>{

}