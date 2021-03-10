let express = require('express');
let router = express.Router();

let animalController = require("./controllers/animalController.js");
let treatmentController = require("./controllers/treatmentController.js");


// Animal 
router.get("/form/Animal/Add", animalController.formAnimalAdd);

router.post("/Animal/Add", animalController.animalAddFromForm);

router.get("/Animal/Delete/:idtask", animalController.animalDelete);
router.get("/Animal/Details/:id", animalController.animalDetails);

router.get("/", animalController.allAnimalList);

router.get("/form/Animal/Update/:id", animalController.formAnimalUpdate);
router.post("/Animal/Update", animalController.animalUpdateFromForm);

// Treatment
router.get("/form/Treatment/Add", treatmentController.formTreatmentAdd);

router.post("/treatment/Add", treatmentController.treatmentAddFromForm);

//router.get("/TreatmentDelete/:idtask", treatmentController.treatmentDelete);

router.get("/treatments", treatmentController.allTreatmentList);

// Search Animal
router.get("/search", animalController.animalSearch);
router.post("/search/done", animalController.animalSearchFromForm);

module.exports = router;