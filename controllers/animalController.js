let Animal = require("../models/animalModel");
let connection = require("../db");
const { allTreatmentList } = require("./treatmentController");

let allAnimalList = [];

exports.allAnimalList = function(req, res) {
    connection.query("select * from animal", function(error, result){

        if(error)
        {
            console.log(error);
        }
        else{
 
        res.render("index.ejs", {animaux: result})
        }



    });




};

exports.formAnimalAdd =function(req, res) {
    res.render("formAddAnimal");


};



exports.animalAddFromForm = function(req, res) {
    let boucle = req.body.boucle;
    let genre =  req.body.sexe;
    let type =  req.body.type;
    let naissance =  req.body.date_naissance;


    let animalCreated = new Animal(boucle, genre, type, naissance);

    connection.query("INSERT INTO animal set ?", animalCreated, function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
        res.redirect("/")
        }

    });

    //allAnimalList.push(animauxcreer);

    //res.redirect("/");

};

exports.formAnimalUpdate =function(req, res) {
    let id= req.params.id;
    console.log("je passe");

    connection.query("Select * from animal WHERE id = ?",id , function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            res.render("formUpdateAnimal.ejs", {"id": result[0].id , "boucle": result[0].boucle, "gender": result[0].gender, "type": result[0].type, "birth":result[0].birth });
        }

  


});
};

exports.animalUpdateFromForm =function(req, res) {
    console.log("ok");
    let id = req.body.animalToUpdate;
    let boucle = req.body.boucle;
    let genre =  req.body.gender;
    let type =  req.body.type;
    let naissance =  req.body.birth;
    let anim = {"boucle":boucle, "gender": genre, "type":type, "birth": naissance }

    


    let animalUpdated = new Animal(boucle, genre, type, naissance);

    connection.query("UPDATE animal SET ? WHERE id = ? ",[anim, id] ,function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            res.redirect("/animal/details/"+ id);
        } 

  


});
};



exports.animalDelete = function(req, res) {
    let deleteAnimal = req.params.idtask;


// delete 
    allAnimalList.splice(deleteAnimal,1);
    
    res.redirect("/");

};

exports.animalDetails = function(req, res){


    let id_animal = req.params.id;
    let medical_treatment = false;
    let comeFrom = req.query.comeFrom;


    if(comeFrom != "treatment") {
        comeFrom = "";
    }
    console.log(comeFrom);



    connection.query("Select * from animal as a INNER JOIN treatment AS t ON a.id = t.id_animal WHERE a.id = ?",id_animal , function (error, result){
        if(error)
        {   
 
        }
        else{
                if(result.length == 0) //si l'array est vide, c'est qu'il n'a pas encore de traitement et donc pas de données, on va juste récupérer les données de bases
                {
                    console.log("vide")
                    connection.query("Select * from animal WHERE id = ?",id_animal , function (error, result){
                        if(error)
                        {

                            console.log(error);
                        }
                        else{

                            console.log("pas d'erreur");
                            res.render("animalDetails.ejs", {"result": result, "medical": medical_treatment, "id": id_animal, "comeFrom" : comeFrom});
                        } 
        
                });
                    
                }
                else
                {
                    console.log(result);

                    medical_treatment = true;
                    res.render("animalDetails.ejs", {"result": result, "medical" : medical_treatment, "id": id_animal, "comeFrom" : comeFrom});
                }
            }

    });
    
};

exports.animalSearch = function (req, res){

    res.render("formSearchAnimal.ejs", {"search": false});


}

exports.animalSearchFromForm = function (req, res){

    let boucle = req.body.search;
    

    connection.query("Select * FROM animal WHERE boucle = ? ",boucle ,function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            res.render("formSearchAnimal", {"animaux": result, "search": true});
        } 

  


});

}