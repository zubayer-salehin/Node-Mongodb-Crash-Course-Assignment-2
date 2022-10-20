const express = require('express');
const tourController = require('../Controllers/Tour.Controllers');
const veiwCount = require('../Middleware/veiwCount');
const router = express.Router();



// Tour Routes
router.get("/trending", tourController.getTrendingTourDetails)


router.get("/cheapest", tourController.getCheapestTourDetails)


router.route("/")
    .get(tourController.getAllTour)
    .post(tourController.saveTour)


router.route("/:id")
    .get(veiwCount, tourController.getSinlgeTourDetails)
    .patch(tourController.tourUpdate)


module.exports = router;