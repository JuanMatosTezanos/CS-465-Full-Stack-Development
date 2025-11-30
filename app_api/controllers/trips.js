const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

    if (!q) {
        // Database returned no data
        return res
            .status(404)
            .json(q);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async (req, res) => {
    const q = await
        Trip.findOne({ 'code': req.params.tripCode }) // Return single record
        .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

    if (!q) {
        // Database returned no data
        return res
            .status(404)
            .json(q);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};

