let express = require('express');
let router = express.Router();

let animalController = require("./controllers/animalController.js");
let treatmentController = require("./controllers/treatmentController.js");


// Animal 
router.get("/form/animal/add", animalController.formAnimalAdd);

router.post("/animal/add", animalController.animalAddFromForm);

router.get("/animal/delete/:idtask", animalController.animalDelete);
router.get("/animal/details/:id", animalController.animalDetails);

router.get("/", animalController.allAnimalList);

router.get("/form/animal/update/:id", animalController.formAnimalUpdate);
router.post("/animal/update", animalController.animalUpdateFromForm);

// Treatment
router.get("/form/treatment/add/:id", treatmentController.formTreatmentAdd);
router.get("/treatment/delete/:id", treatmentController.treatmentDelete);

router.post("/treatment/add", treatmentController.treatmentAddFromForm);

//router.get("/TreatmentDelete/:idtask", treatmentController.treatmentDelete);

router.get("/treatments", treatmentController.allTreatmentList);


// Search Animal
router.get("/search", animalController.animalSearch);
router.post("/search/done", animalController.animalSearchFromForm);

module.exports = router;