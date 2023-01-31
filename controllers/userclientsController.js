const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');

const userclients = require ('../models/userclientsModel');


exports.signup = (req, res, next) => {
 
   let Userclients = new userclients({
        nom: req.body.nom,
        prenom: req.body.prenom,
        civilite: req.body.civilite,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        password:hashedPass,
        passwordconfirmation:hashedPass
        
       })
      Userclients.save((err,doc)=>{
        if (!err)
        res.send(doc);
    else {
        if (err.code == 11000)
            res.status(422).send(['Duplicate email adrress found.']);
        else
            return next(err);
    }
        // .then(Userclients => {res.json({ message: 'Compte créé !' })})
        // .catch(error => {res.json({ message : error.message })});
})
}

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


exports.AjoutClient=(req,res)=>{

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
    const client = new userclients({
       
        nom:req.body.nom,
        prenom: req.body.prenom,
        civilite:req.body.civilite,
        adresse: req.body.adresse,
        telephone:req.body.telephone,
        email: req.body.email,
        idvoiture: req.body.idvoiture,
     
    
    });
    client
    .save(client)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "some error about creating "})
    
                })
    }
    
    //retrieve and return all user: singleuser
    exports.getOneUser=(req,res)=>{
        const id =req.params.id
        userclients.findOne({_id:id})
        .then((userclients)=>{return res.status(200).json({userclients})} )
        .catch((error)=>{return res.status(400).json(error)})
}

    exports.getAllUser=(req,res)=>{
    
    userclients.find()
    .then((userclients)=>{return res.status(200).json({userclients})} )
    .catch((error)=>{return res.status(400).json(error)})
}
    
    //
    // update a new repair by id
    exports.UpdateClient=(req,res)=>{
     if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
     }

        const id = req.params.id;

        userclients.findByIdAndUpdate(id,req.body ,{useFindAndModify:false})
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
    exports.DeleteClient=(req,res)=>{
        const id = req.params.id;
        userclients.findByIdAndDelete(id)
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
    exports.DeleteAllClient=(req,res)=>{
    
    }
