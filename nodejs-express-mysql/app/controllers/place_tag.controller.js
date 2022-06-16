const { json } = require("body-parser");
const PlaceTag = require("../models/place_tag.model.js");

//add Place in DB
exports.addPlaceTag = (req, res) =>{
  console.log(req.body);
  debugger;
    PlaceTag.addPlaceTag(req.body, (err, data)=>{
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
exports.removePlaceTag = (req, res) =>{
    console.log(req.body);
    debugger;
      PlaceTag.removePlaceTag(req.body, (err, data)=>{
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