let express = require('express');
let router = express.Router();

let animalController = require("../controllers/animalController");
let treatmentController = require("../controllers/treatmentController");




// Animal 

router.get("/", animalController.allAnimalList);
router.post("/add/animal", animalController.addAnimal);
router.get("/animal/details/:id", animalController.animalDetails);
router.post("/animal/update", animalController.animalUpdateFromForm);
router.get("/animal/search/:id_animal", animalController.animalSearch);


router.get("/animal/search/treatment/:id_animal", treatmentController.treatmentSearch);
router.post("/add/treatment",treatmentController.treatmentAdd);
router.post("/delete/treatment",treatmentController.treatmentDelete);



module.exports = router;