const mongoose = require('mongoose');
const Trip = require('../models/travlr');


const tripsList = async (req, res) => {
  try {
    const q = await Trip.find({}).exec();
    if (!q || q.length === 0) {
      return res.status(404).json([]);
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const q = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!q) {
      return res.status(404).json({});
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = new Trip({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    const q = await newTrip.save();
    return res.status(201).json(q);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    const q = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    ).exec();

    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};



