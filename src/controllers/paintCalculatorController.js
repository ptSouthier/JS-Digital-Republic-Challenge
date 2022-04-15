const paintCalculatorService = require('../services/paintCalculatorService');
const roomWallsQuantity = 4;

const renderPaintCalculator = (_req, res) => {
  res.render('pages/paintCalculator', {
    wallsQuantity: paintCalculatorService.wallsQuantityRange(roomWallsQuantity),
  });
};

module.exports = {
  renderPaintCalculator,
};
