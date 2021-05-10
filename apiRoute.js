let express = require('express');
let apiRoutes = express.Router();

let animalController = require("./controllers/animalController.js");
let treatmentController = require("./controllers/treatmentController.js");


apiRoutes.get("/", animalController.allAnimalList);

module.exports = apiRoutes;