// Code from d3-graph-gallery.com
// https://www.d3-graph-gallery.com/graph/backgroundmap_country.html

import * as d3 from "https://cdn.skypack.dev/d3@7";

// name, lat, rent, market category
let cities = [
    {name: "Bochum", long: 7.12,lat:51.48, rent: 15},
    {name: "Chemnitz", long: 12.92,lat:50.83, rent: 15},
    {name: "Dortmund", long: 7.46,lat: 51.51, rent: 15},
    {name: "Duisburg", long: 6.76,lat:51.43, rent: 15},
    {name: "Erfurt", long: 11.03,lat: 50.97, rent: 15},
    {name: "Essen", long: 7.01,lat:51.45, rent: 15},
    {name: "Gelsenkirchen", long: 7.12,lat:51.50, rent: 15},
    {name: "Hamm", long: 7.82,lat:51.68, rent: 15},
    {name: "Krefeld", long: 6.58,lat:51.33, rent: 15},
    {name: "Mönchengladbach", long: 6.44,lat:51.18, rent: 15},
    {name: "Mühlheim an der Ruhr", long: 8.83,lat:50.11, rent: 15},
    {name: "Oberhausen", long: 6.88,lat:51.47, rent: 15},
    {name: "Rostock", long: 12.14,lat:54.08, rent: 15},
    {name: "Wuppertal", long: 7.16,lat:50.77, rent: 15},
    {name: "Aachen", long: 6.08,lat:50.77, rent: 15},
    {name: "Bonn", long: 7.09,lat:50.73, rent: 15},
    {name: "Braunschweig", long: 10.52,lat:52.26, rent: 15},
    {name: "Dresden", long: 13.73,lat:51.05, rent: 15},
    {name: "Düsseldorf", long: 6.77,lat:51.22, rent: 15},
    {name: "Hannover", long: 9.73,lat:52.37, rent: 15},
    {name: "Karlsruhe", long: 8.40,lat:49.00, rent: 15},
    {name: "Kiel", long: 10.13,lat:54.32, rent: 15},
    {name: "Leipzig", long: 12.37,lat:51.33, rent: 15},
    {name: "Leverkusen", long: 6.98,lat:51.03, rent: 15},
    {name: "Lübeck", long: 10.68,lat:53.86, rent: 15},
    {name: "Ludwigshafen am Rhein", long: 8.44, lat: 49.48, rent: 20},
    {name: "Mannheim", long: 8.47, lat: 49.49, rent: 40},
    {name: "Münster", long: 7.62,lat:51.96, rent: 15},
    {name: "Nürnberg", long: 11.07,lat:49.45, rent: 15},
    {name: "Potsdam", long: 13.06,lat:52.39, rent: 15},
    {name: "Wiesbaden", long: 8.24,lat:50.08, rent: 15},
    {name: "Berlin", long: 13.41,lat:52.52, rent: 15},
    {name: "Bielefeld", long: 8.53,lat:52.03, rent: 15},
    {name: "Frankfurt am Main", long: 8.68,lat:50.11, rent: 15},
    {name: "Freiburg im Breigau", long: 7.85,lat:47.99, rent: 15},
    {name: "Hamburg", long: 10.01,lat:53.57, rent: 15},
    {name: "Heidelberg", long: 8.69,lat:49.40, rent: 15},    
    {name: "Köln", long: 6.95,lat:50.93, rent: 15},
    {name: "Mainz", long: 8.27,lat:49.98, rent: 15},
    {name: "München", long: 11.57,lat:48.13, rent: 15},
    {name: "Osnabrück", long: 8.04,lat:52.27, rent: 15},
    {name: "Stuttgart", long: 9.17,lat:48.78, rent: 15},
]

// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

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



    // Bars
let cityBars = svg.selectAll("mybar")
.data(cities)
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