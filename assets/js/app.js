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

d3.csv("../assets/data/data.csv").then(function(healthData) {

  console.log(healthData);

//   // log a list of names
//   var names = tvData.map(data => data.name);
//   console.log("names", names);

//   // Cast each hours value in tvData as a number using the unary + operator
//   tvData.forEach(function(data) {
//     data.hours = +data.hours;
//     console.log("Name:", data.name);
//     console.log("Hours:", data.hours);
//   });
// }).catch(function(error) {
//   console.log(error);
});
