const renderPaintCalculator = (_req, res) => {
  const room_walls_quantity = 4;
  res.render('pages/paintCalculator', { walls_qty: room_walls_quantity });
};

module.exports = {
  renderPaintCalculator,
};
