const express = require('express');
const tourController = require('../Controllers/Tour.Controllers');
const veiwCount = require('../Middleware/veiwCount');
const router = express.Router();



// Tour Routes

router.get("/tour/trending", tourController.getTrendingTourDetails)


router.get("/tour/cheapes", tourController.getCheapestTourDetails)


router.route("/tours")
    .get(tourController.getAllTour)
    .post(tourController.saveTour)


router.get("/tours/:id", veiwCount, tourController.getSinlgeTourDetails)


router.patch("tour/:id", tourController.tourUpdate)



module.exports = router;