const Tour = require("../Models/Tour.Model")


const veiwCount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tour = await Tour.findById(id);
        await Tour.updateOne({ _id: id }, { $set: { veiw: Number(tour.veiw) + 1 } });
        next();
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Tour id is invalid",
            error: error.message
        })
    }
}

module.exports = veiwCount;