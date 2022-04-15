const wallsQuantityRange = (wallsQuantity) => {
  return [...Array(wallsQuantity).keys()];
};

module.exports = {
  wallsQuantityRange,
};
