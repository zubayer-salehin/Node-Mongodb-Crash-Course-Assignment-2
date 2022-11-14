const express = require('express');
const tourController = require('../Controllers/Tour.Controllers');
const veiwCount = require('../Middleware/veiwCount');
const router = express.Router();



// Tour Routes
router.route("/trending")
    .get(tourController.getTrendingTourDetails)


router.route("/cheapest")
    .get(tourController.getCheapestTourDetails)


router.route("/")
    .get(tourController.getAllTour)
    .post(tourController.saveTour)


router.route("/:id")
    .get(veiwCount, tourController.getSinlgeTourDetails)
    .patch(tourController.tourUpdate)


module.exports = router;