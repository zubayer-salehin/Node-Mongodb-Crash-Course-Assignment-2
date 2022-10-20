const Tour = require("../Models/Tour.Model")

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
        const page = req.query.page - 1;
        queries.page = page;
    }

    if (req.query.page == 0) {
        const page = 0;
        queries.page = page;
    }

    if (req.query.limit) {
        const limit = req.query.limit;
        queries.limit = limit;
    }


    try {
        const tours = await Tour.find({})
            .sort(queries.sortBy)
            .select(queries.fields)
            .skip(Number(queries.page) * Number(queries.limit))
            .limit(Number(queries.limit))


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
        const tourData = new Tour(tourinfo);
        const tour = await tourData.save();

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


exports.tourUpdate = async (req, res) => {

    try {
        const id = req.params.id;
        const tour = await Tour.updateOne({ _id: id }, { $set: req.body }, { runValidators: true })

        res.status(200).json({
            status: "success",
            message: "Tour is update",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Tour is not update",
            error: error.message
        })
    }

}


exports.getSinlgeTourDetails = async (req, res) => {

    try {
        const id = req.params.id;
        const tour = await Tour.findById(id)
            .select("-veiw")

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


exports.getTrendingTourDetails = async (req, res) => {

    try {
        const tour = await Tour.find({})
            .select("-veiw")
            .sort({ "veiw": -1 })
            .limit(3)

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
        const tour = await Tour.find({})
            .select("-veiw")
            .sort("price")
            .limit(3)

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