const { json } = require("body-parser");
const User = require("../models/User.model.js");

exports.login = (req, res) =>{
  console.log(req.body);
  debugger;
    User.login(req.body, (err, data)=>{
     if (err) {
       if (err.kind === "not_found") {
         res.status(404).send({
           message: `User Not found.`
         });
       } else {
         console.log(JSON.stringify(err));
         res.status(500).send({
           message: "Error retrieving Customer with id " + req.body.userId
         });
       }
     } 
     else res.send(data);
    });
}