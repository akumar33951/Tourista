const { json } = require("body-parser");
const City = require("../models/city.model.js");

//add Place in DB
exports.addCity = (req, res) =>{
  console.log(req.body);
  debugger;
    City.addCity(req.body, (err, data)=>{
      console.log(req.body);
     if (err) {
       if (err.kind === "not_found") {
         res.status(404).send({
           message: `Not done.`
         });
       } else {
         console.log(JSON.stringify(err));
         res.status(500).send({
           message: "Error in adding image"
         });
       }
     } 
     else res.send(data);
    });
}

//update Place in DB
exports.removeCity = (req, res) =>{
    console.log(req.body);
    debugger;
      City.removeCity(req.body, (err, data)=>{
        console.log(req.body);
       if (err) {
         if (err.kind === "not_found") {
           res.status(404).send({
             message: `Not done.`
           });
         } else {
           console.log(JSON.stringify(err));
           res.status(500).send({
             message: "Error updating " + req.body.pname
           });
         }
       } 
       else res.send(data);
      });
  }