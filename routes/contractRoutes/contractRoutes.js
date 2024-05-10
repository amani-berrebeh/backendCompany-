const express = require("express");
const contractController = require("../../controllers/contractControllers/contractControllers");

const router = express.Router();

router.post("/newContract", contractController.createContract);
router.get("/getContractByID/:id", contractController.getContractById);
router.put("/updateContract/:id", contractController.updateContract);
router.delete("/deleteContract/:id", contractController.deleteContract);
router.get("/getAllContracts", contractController.getContracts);
router.post('/getContractByIdCorporate/:id',contractController.getContractByIdCompany)
module.exports = router;