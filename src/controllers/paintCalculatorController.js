const paintCalculatorService = require('../services/paintCalculatorService');
const roomWallsQuantity = 4;

const renderPaintCalculator = (_req, res) => {
  res.render('pages/paintCalculator', {
    wallsQuantity: paintCalculatorService.wallsQuantityRange(roomWallsQuantity),
  });
};

const submitForm = (req, res) => {
  let paintableAreaSum = 0;

  Object.values(req.body).forEach((wall, index) => {
    const { height, width, windows, doors } = wall;    
    const checkEntries = paintCalculatorService.runValidations(height, width, windows, doors, index);

    if (checkEntries) {
      return res.status(checkEntries.status).json({ message: checkEntries.message });
    }
    
    paintableAreaSum += paintCalculatorService.getWallPaintableArea(height, width, windows, doors);
  });

  const data = paintCalculatorService.getPaintCansRecommendation(paintableAreaSum);
  res.status(200).json(data);
};

module.exports = {
  renderPaintCalculator,
  submitForm,
};
