const Tour = require("../Models/Tour.Model")

exports.allTourService = async (queries) => {
    const tours = await Tour
        .find({})
        .sort(queries.sortBy)
        .select(queries.fields)
        .skip(queries.skip)
        .limit(queries.limit)
    return tours;
}

exports.createTourService = async (data) => {
    const newTour = await Tour.create(data);
    return newTour;
}

exports.singleTourService = async (id) => {
    const tour = await Tour
        .findById(id)
        .select("-veiw");
    return tour;
}

exports.tourUpdateService = async (id, updateData) => {
    const updateTour = await Tour
        .updateOne({ _id: id }, { $set: updateData }, { runValidators: true })
    return updateTour;
}

exports.trendingTourDetails = async () => {
    const Top3_Trending_Tour = await Tour
        .find({})
        .sort("-veiw")
        .select("-veiw")
        .limit(3)
    return Top3_Trending_Tour;
}

exports.cheapestTourDetails = async () => {
    const Top3_Cheapest_Tour = await Tour
        .find({})
        .sort("price")
        .select("-veiw")
        .limit(3)
    return Top3_Cheapest_Tour;
}