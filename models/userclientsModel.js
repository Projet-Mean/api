const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require ('bcrypt')

var clientsSchema = mongoose.Schema({
  nom: { type: String, required: "Ce champs est obligatoire" },
  prenom: { type: String, required: "Ce champs est obligatoire"  },
  civilite: { type: String, required: "Ce champs est obligatoire"  },
  adresse: { type: String, required: "Ce champs est obligatoire"  },
  telephone: { type: Number , required: "Ce champs est obligatoire"  },
  email: { type: String, required: "Ce champs est obligatoire" , unique: true },
  password: { type: String ,required:"Ce champs est obligatoire" , minlength:[5,"Ce champs doit comporter au moins 5 caractères"]},
  passwordconfirmation: { type: String, required: "Ce champs est obligatoire"  },
  saltSecret:String
});


//Custom validation for email
clientsSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');

//events
clientsSchema.pre('save', function(next){
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(this.password , salt,(err,hash) =>{
      this.password=hash;
      this.passwordconfirmation=salt;
      next();
    })
  })
})
module.exports = mongoose.model('userclients', clientsSchema);

