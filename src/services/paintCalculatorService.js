const paintCalculatorModel = require('../models/paintCalculatorModel');
const windowMeasures = { height: 1.2, width: 2 };
const doorMeasures = { height: 1.9, width: 0.8 };

const wallsQuantityRange = (wallsQuantity) => {
  return [...Array(wallsQuantity).keys()];
};

const getSquareMeter = (height, width) => {
  return height * width;
};

const getWindowsTotalArea = (windowsQuantity) => {
  const windowArea = getSquareMeter(windowMeasures.height, windowMeasures.width);
  return windowArea * windowsQuantity;
};

const getDoorsTotalArea = (doorsQuantity) => {
  const doorArea = getSquareMeter(doorMeasures.height, doorMeasures.width);
  return doorArea * doorsQuantity;
};

const getWallNonPaintableArea = (windowsValue, doorsValue) => {
  const windowsArea = getWindowsTotalArea(windowsValue);
  const doorsArea = getDoorsTotalArea(doorsValue);
  return windowsArea + doorsArea;
};

const validateWallAreaLimit = (height, width) => {
  const maximumSquareMetersByWall = 15;
  return getSquareMeter(height, width) > maximumSquareMetersByWall ? false : true;
};

const validateWindowsAndDoorsArea = (height, width, windows, doors) => {
  const wallArea = getSquareMeter(height, width);
  const nonPaintableArea = getWallNonPaintableArea(windows, doors);
  const fiftyPercentOfWallArea = wallArea * 0.5;
  return nonPaintableArea > fiftyPercentOfWallArea ? false : true;
};

const validateHeightOfWallsWithDoor = (wallHeight, doorsQuantity) => {
  if (doorsQuantity === 0) {
    return true;
  };
  const minimumDistanceMargin = 0.3;
  const minimumAcceptableWallHeight = doorMeasures.height + minimumDistanceMargin;
  return wallHeight < minimumAcceptableWallHeight ? false : true;
};

const runValidations = (height, width, windows, doors, index) => {
  if (!validateWallAreaLimit(height, width)) {
    return {
      status: 400,
      message: `Os valores inseridos na Parede ${index + 1} ultrapassam 15m².`
    };
  };

  if (!validateWindowsAndDoorsArea(height, width, windows, doors)) {
    return {
      status: 400,
      message: `Verifique a quantidade de Janelas e/ou Portas da Parede ${index + 1}.`
    };
  };

  if (!validateHeightOfWallsWithDoor(height, doors)) {
    return {
      status: 400,
      message: `Verifique o valor da Altura inserida na Parede ${index + 1}.`
    };
  };
};

const getWallPaintableArea = (height, width, windows, doors) => {
  const wallArea = getSquareMeter(height, width);
  const wallNonPaintableArea = getWallNonPaintableArea(windows, doors);
  return parseFloat((wallArea - wallNonPaintableArea).toFixed(1));
};

const getNecessaryPaintLiters = (areaSum) => {
  return parseFloat((areaSum / paintCalculatorModel.squareMetersByPaintLiter).toFixed(1));
};

const getPaintCansRecommendation = (areaSum) => {
  const paintLitersNeeded = getNecessaryPaintLiters(areaSum);
  const sortedPaintCanSizes = paintCalculatorModel.paintCanSizes.sort((a, b) => b - a);
  const paintCansNeeded = {};
  let paintLitersRemaining = paintLitersNeeded;

  while (paintLitersRemaining > 0) {
    const canSize = sortedPaintCanSizes.find((canSize) => canSize <= paintLitersRemaining);
    if (!canSize) {
      const [ smallerCanSize ] = sortedPaintCanSizes.slice(-1);
      paintCansNeeded[smallerCanSize] = paintCansNeeded[smallerCanSize] + 1 || 1;
      paintLitersRemaining -= smallerCanSize;
      paintCansNeeded['leftover'] = Math.abs(parseFloat(paintLitersRemaining.toFixed(1)));
      break;
    };
    paintCansNeeded[canSize] = paintCansNeeded[canSize] + 1 || 1;
    paintLitersRemaining -= canSize;
  };
  return paintCansNeeded;
};

module.exports = {
  wallsQuantityRange,
  runValidations,
  getWallPaintableArea,
  getPaintCansRecommendation,
};
