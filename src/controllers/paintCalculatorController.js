const room_walls_quantity = 4;

const renderPaintCalculator = (_req, res) => {
  res.render('pages/paintCalculator', { walls_qty: room_walls_quantity });
};

module.exports = {
  renderPaintCalculator,
};
