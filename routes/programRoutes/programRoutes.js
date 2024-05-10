const express = require('express');
const programController = require('../../controllers/programControllers/programControllers');

const router = express.Router();

router.post('/newProgram', programController.createProgramm);
router.get('/getAllPrograms', programController.getProgramms);
// router.put('/updateQuote/:id', quoteController.updateQuote);
// router.delete('/deleteQuote/:id', quoteController.deleteQuote);
// router.post('/sendBookingEmail',quoteController.sendBookingEmail);

module.exports = router;