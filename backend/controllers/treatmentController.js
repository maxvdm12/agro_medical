
let connection = require("../db");

exports.treatmentSearch = function(req, res){


 let id = req.params.id_animal;

 
 connection.query("Select * from treatment WHERE id_animal = ? ORDER BY id DESC",id ,function (error, result){
    if(error)
    {
        console.log(error);
    }
    else{
        res.json({"treats": result});
    } 


});
   
}
exports.treatmentAdd = function(req, res) {

    console.log(req.body);
    
 

    connection.query("INSERT INTO treatment set ?", req.body, function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
         console.log("add treatment")
        }

    });




};

exports.treatmentDelete = function(req, res) {
    let deleteTreatment = req.body[0];

    
    connection.query("DELETE from treatment WHERE id = ? ", deleteTreatment ,function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log("traitement deleted")

        } 

  


});

};