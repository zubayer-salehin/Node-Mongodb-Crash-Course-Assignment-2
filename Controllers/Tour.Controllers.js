const { allTourService, createTourService, singleTourService, tourUpdateService, trendingTourDetails, cheapestTourDetails } = require("../Services/Tour.Services");

exports.getAllTour = async (req, res) => {

    const queries = {};

    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queries.fields = fields;
    } else {
        const fields = "-veiw";
        queries.fields = fields;
    }

    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        queries.sortBy = sortBy;
    }

    if (req.query.page) {
        const { page = 1, limit = 3 } = req.query;
        const skip = (page - 1) * Number(limit);
        queries.skip = skip;
        queries.limit = Number(limit);
    }


    try {
        const tours = await allTourService(queries);

        res.status(200).json({
            status: "success",
            message: "Tours is finally Get",
            data: tours
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Tours is not Found, Something went wrong!",
            error: error.message
        })
    }
}


exports.saveTour = async (req, res) => {

    try {
        const tourinfo = req.body;
        tourinfo["veiw"] = 0;
        const tour = await createTourService(tourinfo);

        res.status(200).json({
            status: "success",
            message: "Tour is finally save",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Tour is not save",
            error: error.message
        })
    }

}


exports.getSinlgeTourDetails = async (req, res) => {

    try {
        const id = req.params.id;
        const tour = await singleTourService(id);

        res.status(200).json({
            status: "success",
            message: "Tour is finally Get",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Tour id is invalid",
            error: error.message
        })
    }
}


exports.tourUpdate = async (req, res) => {

    try {
        const id = req.params.id;
        const tour = await tourUpdateService(id, req.body);

        if (!tour.modifiedCount) {
            res.status(400).json({
                status: "fail",
                message: "Tour is not updated",
            })
        }

        res.status(200).json({
            status: "success",
            message: "Tour is updated",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Tour is not updated",
            error: error.message
        })
    }

}


exports.getTrendingTourDetails = async (req, res) => {

    try {
        const tour = await trendingTourDetails();

        res.status(200).json({
            status: "success",
            message: "Top 3 Trending Tour Details",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Top 3 Trending Tour not Found, Something went Wrong!",
            error: error.message
        })
    }

}


exports.getCheapestTourDetails = async (req, res) => {

    try {
        const tour = await cheapestTourDetails();

        res.status(200).json({
            status: "success",
            message: "Top 3 Cheapest Tour",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "CheapestTourDetails not Found, Something went wrong!",
            error: error.message
        })
    }

}