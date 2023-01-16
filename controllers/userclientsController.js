const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');

const userclients = require ('../models/userclientsModel');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const userclients = new userclients({
        nom: req.body.nom,
        prenom: req.body.prenom,
        civilite: req.body.civilite,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        password: hash,
      });
      userclients.save()
        .then(() => res.status(201).json({ message: 'Compte créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
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
    exports.FindClient=(req,res)=>{
    
    }
    // update a new repair by id
    exports.UpdateClient=(req,res)=>{
    
    }
    
    // delete a repair specified by id
    exports.DeleteClient=(req,res)=>{
    
    }
    
    // delete all repair
    exports.DeleteAllClient=(req,res)=>{
    
    }
