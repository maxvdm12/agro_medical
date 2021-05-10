
let connection = require("../db");
//const { render } = require("ejs");



exports.addAnimal = function(req, res) {

    connection.query("INSERT INTO animal set ?", req.body, function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
        //res.redirect("/")
            console.log("animal créée")
        }

    });


};
  


exports.allAnimalList = function(req, res) {
    connection.query("select * from animal", function(error, result){

        if(error)
        {
            console.log(error);
        }
        else{
 
       //res.render("animal.ejs", {animaux: result})

            res.json({animaux: result});
        }



    });


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
                                console.log(result);
                                res.json({animal: result});
                            } 
            
                    });
                        
                    }
                    else
                    {
                        console.log(result);
    
                        medical_treatment = true;
                        res.json({animal: result});
                    }
                }
    
        });
        
    };


    exports.animalUpdateFromForm =function(req, res) {
 
        let id = req.body.id;
        let boucle = req.body.boucle;
        let genre =  req.body.gender;
        let type =  req.body.type;
        let naissance =  req.body.birth;
        let anim = {"boucle":boucle, "gender": genre, "type":type, "birth": naissance }

        console.log(req.body);
    
    
        connection.query("UPDATE animal SET ? WHERE id = ? ",[anim, id] ,function (error, result){
            if(error)
            {
                console.log(error);
            }
            else{
                console.log("ça a changé")
            } 
    
      
    
    
    });
    };

    
exports.animalSearch = function (req, res){

    let id = req.params.id_animal;
   

    connection.query("Select * FROM animal WHERE id = ? ",id ,function (error, result){
        if(error)
        {
            console.log(error);
        }
        else{
            res.json({"animaux": result});
        } 


});

}