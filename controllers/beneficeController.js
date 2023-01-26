const beneficeModel = require('../models/beneficeModel')


exports.AjoutBenefice=(req,res)=>{



if (!req.body){
    res.status(400).send({message:"Cannot can not be empty"})
    return;
}
const benefice = new beneficeModel({
    mois:req.body.mois,
    paiement:req.body.paiement,
    
 
});
benefice
.save(benefice)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error about creating "})

            })
}
  //retrieve and return all facture: singlefacture
  exports.getOneBenefice=(req,res)=>{
    const id =req.params.id
    beneficeModel.findOne({_id:id})
    .then((beneficeModel)=>{return res.status(200).json({beneficeModel})} )
    .catch((error)=>{return res.status(400).json(error)})
}

exports.getAllBenefice=(req,res)=>{

    beneficeModel.find()
.then((depenseModel)=>{return res.status(200).json({beneficeModel})} )
.catch((error)=>{return res.status(400).json(error)})
}


// update a new facture by id
exports.UpdateBenefice=(req,res)=>{
 if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
 }

    const id = req.params.id;

    beneficeModel.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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
exports.DeleteOneBenefice=(req,res)=>{
    const id = req.params.id;
    beneficeModel.findByIdAndDelete(id)
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
exports.DeleteAllBenefice=(req,res)=>{

}