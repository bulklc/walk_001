const getGradientColor = (startColor, endColor, percent) => {
  // strip the leading # if it's there
  startColor = startColor.replace(/^\s*#|\s*$/g, "");
  endColor = endColor.replace(/^\s*#|\s*$/g, "");

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (startColor.length === 3) {
    startColor = startColor.replace(/(.)/g, "$1$1");
  }

  if (endColor.length === 3) {
    endColor = endColor.replace(/(.)/g, "$1$1");
  }

  // get colors
  const startRed = parseInt(startColor.substr(0, 2), 16),
    startGreen = parseInt(startColor.substr(2, 2), 16),
    startBlue = parseInt(startColor.substr(4, 2), 16);

  const endRed = parseInt(endColor.substr(0, 2), 16),
    endGreen = parseInt(endColor.substr(2, 2), 16),
    endBlue = parseInt(endColor.substr(4, 2), 16);

  // calculate new color
  let diffRed = endRed - startRed;
  let diffGreen = endGreen - startGreen;
  let diffBlue = endBlue - startBlue;

  diffRed = diffRed * percent + startRed;
  diffGreen = diffGreen * percent + startGreen;
  diffBlue = diffBlue * percent + startBlue;

  let diffRedStr = diffRed.toString(16).split(".")[0];
  let diffGreenStr = diffGreen.toString(16).split(".")[0];
  let diffBlueStr = diffBlue.toString(16).split(".")[0];

  // ensure 2 digits by color
  if (diffRedStr.length === 1) diffRedStr = "0" + diffRedStr;
  if (diffGreenStr.length === 1) diffGreenStr = "0" + diffGreenStr;
  if (diffBlueStr.length === 1) diffBlueStr = "0" + diffBlueStr;

  return "#" + diffRedStr + diffGreenStr + diffBlueStr;
};
