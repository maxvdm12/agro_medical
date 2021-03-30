let Treatment = require("../models/treatmentModel");
let connection = require("../db");
const { all } = require("../router");
const { query } = require("../db");




exports.allTreatmentList = function(req, res) {
    res.render("treatments", {treatments: allTreatmentList})

};

exports.formTreatmentAdd =function(req, res) {
    id= req.params.id;
    res.render("formAddTreatment", {"id": id});


};

exports.treatmentAddFromForm = function(req, res) {
    let id_animal = req.body.id_animal;
    let date =  req.body.administration_datum;
    let medicament_name =  req.body.medicament_name;
    let reason = req.body.reason;
    let quantity =  req.body.quantity;
    let lot = req.body.num_lot;

    console.log(reason);


    let treatmentCreated = new Treatment(id_animal, date, medicament_name, quantity, lot, reason);

    connection.query("INSERT INTO treatment set ?", treatmentCreated, function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
        
    res.redirect("/animal/details/"+ id_animal+"?comeFrom=treatment");
        }

    });




};

exports.formTreatmentUpdate =function(req, res) {
    id= req.params.id;

    connection.query("Select * from treatment WHERE id = ?",id , function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            res.render("formUpdateTreatment", {"result": result[0]});

        }
    })



};
exports.treatmentUpdateFromForm =function(req, res) {
    id= req.params.id;
    res.render("formAddTreatment", {"id": id});


};


exports.treatmentDelete = function(req, res) {
    let deleteTreatment = req.params.id;
    let id_animal = req.query.id_animal;

    
    connection.query("DELETE from treatment WHERE id = ? ", deleteTreatment ,function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            res.redirect("/animal/details/"+ id_animal+"?comeFrom=treatment");
        } 

  


});

};
