const express = require("express");

const { ProjectController } = require("./controllers");

const router = express.Router();

router.get("/project", ProjectController.browse);
router.get("/project/:id", ProjectController.read);
router.put("/project/:id", ProjectController.edit);
router.post("/project", ProjectController.add);
router.delete("/project/:id", ProjectController.delete);

module.exports = router;
