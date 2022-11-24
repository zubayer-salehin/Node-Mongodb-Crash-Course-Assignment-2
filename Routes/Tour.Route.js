const express = require('express');
const tourController = require('../Controllers/Tour.Controllers');
const veiwCount = require('../Middleware/veiwCount');
const router = express.Router();



// Tour Routes
router.route("/tour/trending")
    .get(tourController.getTrendingTourDetails)


router.route("/tour/cheapes")
    .get(tourController.getCheapestTourDetails)


router.route("/tours")
    .get(tourController.getAllTour)
    .post(tourController.saveTour)


router.route("tours/:id")
    .get(veiwCount, tourController.getSinlgeTourDetails)


router.route("tour/:id")
    .patch(tourController.tourUpdate)


module.exports = router;