const { json } = require("body-parser");
const Image = require("../models/image.model.js");

//add Place in DB
exports.addImage = (req, res) =>{
  console.log(req.body);
  debugger;
    Image.addImage(req.body, (err, data)=>{
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
exports.updateImage = (req, res) =>{
    console.log(req.body);
    debugger;
      Image.updateImage(req.body, (err, data)=>{
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