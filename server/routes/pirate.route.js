const PirateController = require('../controllers/controller.pirates');

module.exports = function (app) {
  app.post('/api/pirate/new', PirateController.createPirate);
  app.get('/api/pirates', PirateController.getAllPirates);
  app.get('/api/pirate/:id', PirateController.getPirate);
  app.put('/api/pirate/:id', PirateController.updatePirate);
  app.delete('/api/pirate/:id', PirateController.deletePirate);
}