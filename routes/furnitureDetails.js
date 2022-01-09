var express = require("express");
var router = express.Router();
var furnitureDetailsModule = require('../module/furnitureDetails');

router.get("/get", furnitureDetailsModule.getfurnitureDetails);
router.get("/furnitureStatus", furnitureDetailsModule.getfurnitureDetails);


module.exports = router;