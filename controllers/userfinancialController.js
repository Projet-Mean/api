const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');

const userfinancial = require ('../models/userfinancial');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function(err,hashedPass){
    if(err){
        res.json({ error : err})
    }
  
       let Userfinancial = new userfinancial({
        nom: req.body.nom,
        prenom: req.body.prenom,
        civilite: req.body.civilite,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        password:hashedPass,
        fonction:req.body.fonction
       })
       
      
      Userfinancial.save()
        .then(userfinancial => {res.json({ message: 'Compte créé !' })})
        .catch(error => {res.json({ message : error.message })});
    })
    
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
      .then(user => {
          if (!user) {
              return res.status(401).json({ error: 'Utilisateur non trouvé !' });
          }
          bcrypt.compare(req.body.password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(401).json({ error: 'Mot de passe incorrect !' });
                  }
                  res.status(200).json({
                      userId: user._id,
                      token: jwt.sign(
                          { userId: user._id },
                          'RANDOM_TOKEN_SECRET',
                          { expiresIn: '24h' }
                      )
                  });
              })
              .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};


exports.AjoutUserfinancial=(req,res)=>{

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
    const Userfinancial = new userfinancial({
       
        nom:req.body.nom,
        prenom: req.body.prenom,
        civilite:req.body.civilite,
        adresse: req.body.adresse,
        telephone:req.body.telephone,
        email: req.body.email,
        fonction: req.body.fonction,
     
    
    });
    Userfinancial
    .save(Userfinancial)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "some error about creating "})
    
                })
    }
    
    //retrieve and return all user: singleuser
    exports.getOneUserfinancial=(req,res)=>{
        const id =req.params.id
        userfinancial.findOne({_id:id})
        .then((userfinancial)=>{return res.status(200).json({userfinancial})} )
        .catch((error)=>{return res.status(400).json(error)})
}

    exports.getAllUserfinancial=(req,res)=>{
    
    userfinancial.find()
    .then((userfinancial)=>{return res.status(200).json({userfinancial})} )
    .catch((error)=>{return res.status(400).json(error)})
}
    
    //
    // update a new userfinancial by id
    exports.UpdateUserfinancial=(req,res)=>{
     if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
     }

        const id = req.params.id;

        userfinancial.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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
    
    
    // delete a userfinancial specified by id
    exports.DeleteUserfinancial=(req,res)=>{
        const id = req.params.id;
        userfinancial.findByIdAndDelete(id)
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
    
    // delete all userfinancial
    exports.DeleteAllUserfinancial=(req,res)=>{
    
    }
