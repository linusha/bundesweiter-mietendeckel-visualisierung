// Code from d3-graph-gallery.com
// https://www.d3-graph-gallery.com/graph/backgroundmap_country.html

import * as d3 from "https://cdn.skypack.dev/d3@7";

// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 700 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

// The svg
const svg = d3.select("#mapContainer")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Map and projection
const projection = d3.geoMercator()
.center([6, 51])                // GPS of location to zoom on
.scale(980)                       // This is like the zoom
.translate([ width/2, height/2 ])

// Load external data and boot
d3.json("https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/2_hoch.geo.json").then( function(data){

// Draw the map
svg.append("g")
    .selectAll("path")
    .data(data.features)
    .join("path")
      .attr("fill", "grey")
      .attr("d", d3.geoPath()
          .projection(projection)
      )
    .style("stroke", "none")


svg.call(d3.zoom().on("zoom", function (event) {
    svg.attr("transform", event.transform)
}))


let markers = [
{name: "berlin", long: 13.24,lat:52.31, rent: 15},
{name: "munich", long: 11.57, lat: 48.13, rent: 20},
{name: "freiburg", long: 7.85, lat: 47.99, rent: 40}
]

    // Bars
let cityBars = svg.selectAll("mybar")
.data(markers)
.enter()
.append("rect")
  .attr("width", 10)
  .attr("height", function(d) { return d.rent; })
  .attr("x", function(d) { return projection([d.long, d.lat])[0] })
  // y point pins the top left corner of the bar
  // correct for the length of the bar in order to place at correct position of city
  .attr("y", function(d) { return projection([d.long, d.lat])[1] - d.rent })
  .attr("fill", "#69b3a2")


let updateChart = function () {
    
    cityBars
        .transition()
        .duration(2000)
        .attr("height", (d) =>  d.rent * 2)
        .attr("y", function(d) { return projection([d.long, d.lat])[1] - 2 * d.rent })
}
document.getElementById("rentDecrease").onclick = updateChart;
})