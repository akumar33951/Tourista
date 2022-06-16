const { json } = require("body-parser");
const Place = require("../models/place.model.js");

//add Place in DB
exports.addPlace = (req, res) =>{
  console.log(req.body);
  debugger;
    Place.addPlace(req.body, (err, data)=>{
      console.log(req.body);
     if (err) {
       if (err.kind === "not_found") {
         res.status(404).send({
           message: `Not done.`
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

//update Place in DB
exports.updatePlace = (req, res) =>{
    console.log(req.body);
    debugger;
      Place.updatePlace(req.body, (err, data)=>{
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

  //delete Place from DB
exports.removePlace = (req, res) =>{
    console.log(req.body);
    debugger;
      Place.removePlace(req.body, (err, data)=>{
       if (err) {
         if (err.kind === "not_found") {
           res.status(404).send({
             message: `Not done.`
           });
         } else {
           console.log(JSON.stringify(err));
           res.status(500).send({
             message: "Error delete " + req.body.pid
           });
         }
       } 
       else res.send(data);
      });
  }