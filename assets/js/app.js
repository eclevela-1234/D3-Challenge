// @TODO: YOUR CODE HERE!

// Set SVG size and margins
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// this is the file path for the data!
d3.csv("../assets/data/data.csv").then(function(healthData) {

  console.log(healthData);


});


