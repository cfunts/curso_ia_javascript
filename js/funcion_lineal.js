//y = ax + b

let slope = 1.2;// Es el valor de a
let intercept = 7;//donde cruza el eje "y". Es el valor de b
const xValues = [];
const yValues = [];

// Generate values
for (let x = 0; x <= 10; x += 1) {
  xValues.push(x);
  yValues.push(x * slope + intercept);
}

// Define Data
const data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}];

// Define Layout
let layout = {title: "Slope=" + slope + " Intercept=" + intercept};

// Display using Plotly
Plotly.newPlot("myPlot3", data, layout);