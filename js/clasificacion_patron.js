/*
How to Program a Perceptron

To program a perceptron, we can use a simple JavaScript program that will:

    Create a simple plotter
    Create 500 random x y points
    Display the x y points
    Create a line function: f(x)
    Display the line
    Compute the desired answers
    Display the desired answers
*/


// Create a Plotter
const plotter = new XYPlotter("myCanvas");
plotter.transformXY();
const xMax = plotter.xMax;
const yMax = plotter.yMax;
const xMin = plotter.xMin;
const yMin = plotter.yMin;

// Create Random XY Points
const numPoints = 500;
const xPoints = [];
const yPoints = [];
for (let i = 0; i < numPoints; i++) {
  xPoints[i] = Math.random() * xMax;
  yPoints[i] = Math.random() * yMax;
}

// Line Function
function f(x) {
  return x * 1.2 + 50;
}

//Plot the Line
plotter.plotLine(xMin, f(xMin), xMax, f(xMax), "black");

// Compute Desired Answers
const desired = [];
for (let i = 0; i < numPoints; i++) {
  desired[i] = 0;
  if (yPoints[i] > f(xPoints[i])) {desired[i] = 1}
}

// Diplay Desired Result
for (let i = 0; i < numPoints; i++) {
  let color = "blue";
  if (desired[i]) color = "black";
  plotter.plotPoint(xPoints[i], yPoints[i], color);
}