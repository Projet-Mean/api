// const userclientsModel = require("../models/userclientsModel");
// var key ='123456789trytryrtyr'
// const encryptor = require('simple-encryptor')

// module.exports.createUserDBService = (userclients)=>{

//     return new Promise (function myFn(resolve, reject){
//         var userclientsmodel = new userclientsModel();
//         userclientsmodel.nom = userclients.nom;
//         userclientsmodel.prenom = userclients.prenom;
//         userclientsmodel.civilite = userclients.civilite;
//         userclientsmodel.adresse = userclients.adresse;
//         userclientsmodel.telephone = userclients.telephone;
//         userclientsmodel.email = userclients.email;
//         userclientsmodel.password = userclients.password;

//         var encryptor= encryptor.encrypt(userclients.password)
//         userclientsmodel.password= encrypted;

//         userclientsmodel.save(function resultHandle(error,result){
//             if (error){
//                 reject(false)
//             }
//             else{
//                 resolve(true)
//             }
//         })
//     })
// }