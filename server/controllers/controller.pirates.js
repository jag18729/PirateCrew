const { Pirate } = require('../models/pirate.model');

module.exports.createPirate = (request, response) => {
  const { name, imageUrl, number, phrase, position, pegleg, eyepatch, hookhand } = request.body;
  Pirate.create({
    name,
    imageUrl,
    number,
    phrase,
    position,
    pegleg,
    eyepatch,
    hookhand
  })
    .then(pirate => response.json(pirate))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllPirates = (request, response) => {
  Pirate.find({})
    .then(pirates => response.json(pirates))
    .catch(err => response.status(400).json(err));
}

module.exports.getPirate = (request, response) => {
  Pirate.findOne({ _id: request.params.id })
    .then(pirate => response.json(pirate))
    .catch(err => response.status(400).json(err));
}

module.exports.updatePirate = (request, response) => {
  Pirate.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
    .then(updatedPirate => response.json(updatedPirate))
    .catch(err => response.status(400).json(err));
}
module.exports.deletePirate = (req, response) => {
  Pirate.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err));
}