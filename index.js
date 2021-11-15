// Code from d3-graph-gallery.com
// https://www.d3-graph-gallery.com/graph/backgroundmap_country.html

import * as d3 from "https://cdn.skypack.dev/d3@7";

// marketCategory:
// 1 - balanced market
// 2 - strained market
// 3 - distress market
let cities = [
  {
    name: "Bochum",
    marketCategory: 1,
    active: false,
    long: 7.12,
    lat: 51.48,
    marketRent: 6.66,
    portfolioRent:5.74,
  },
  {
    name: "Chemnitz",
    marketCategory: 1,
    active: false,
    long: 12.92,
    lat: 50.83,
    marketRent: 4.97,
    portfolioRent:5.02,
  },
  {
    name: "Dortmund",
    marketCategory: 1,
    active: false,
    long: 7.46,
    lat: 51.51,
    marketRent: 6.88,
    portfolioRent: 5.72,
  },
  {
    name: "Duisburg",
    marketCategory: 1,
    active: false,
    long: 6.76,
    lat: 51.43,
    marketRent: 5.9,
    portfolioRent: 5.53,
  },
  { 
    name: "Erfurt", 
    marketCategory: 1,
    active: false,
    long: 11.03, 
    lat: 50.97, 
    marketRent: 7.13,
    portfolioRent:5.83,
  },
  { 
    name: "Essen", 
    marketCategory: 1,
    active: false,
    long: 7.01, 
    lat: 51.45, 
    marketRent: 6.85,
    portfolioRent:6.08,
  },
  { 
    name: "Gelsenkirchen",
    marketCategory: 1, 
    active: false,
    long: 7.12, 
    lat: 51.50, 
    marketRent: 5.72,
    portfolioRent:5.04,
  },
  { 
    name: "Hamm", 
    marketCategory: 1,
    active: false,
    long: 7.82, 
    lat: 51.68, 
    marketRent: 5.94,
    portfolioRent:5.49,
  },
  { 
    name: "Krefeld", 
    marketCategory: 1,
    active: false,
    long: 6.58, 
    lat: 51.33, 
    marketRent: 6.61,
    portfolioRent:5.9,
  },
  { 
    name: "Mönchengladbach",
    marketCategory: 1,
    active: false,
    long: 6.44, 
    lat: 51.18, 
    marketRent: 6.41,
    portfolioRent:5.97,
  },
  { 
    name: "Mühlheim an der Ruhr",
    marketCategory: 1,
    active: false,
    long: 8.83,
    lat: 50.11, 
    marketRent: 6.65,
    portfolioRent:6.23,
  },
  { 
    name: "Oberhausen",
    marketCategory: 1, 
    active: false,
    long: 6.88, 
    lat: 51.47, 
    marketRent: 6.02,
    portfolioRent:5.27,
  },
  { 
    name: "Rostock", 
    marketCategory: 1,
    active: false,
    long: 12.14, 
    lat: 54.08, 
    marketRent: 6.71,
    portfolioRent:6.1,
  },
  { 
    name: "Wuppertal",
    marketCategory: 1, 
    active: false,
    long: 7.16, 
    lat: 50.77, 
    marketRent: 6.18,
    portfolioRent:5.74,
  },
  { 
    name: "Aachen", 
    marketCategory: 2,
    active: false,
    long: 6.08, 
    lat: 50.77, 
    marketRent: 8.31,
    portfolioRent:6.85,
  },
  { 
    name: "Bonn", 
    marketCategory: 2,
    active: false,
    long: 7.09, 
    lat: 50.73, 
    marketRent: 9.44,
    portfolioRent:7.93,
  },
  { 
    name: "Braunschweig",
    marketCategory: 2, 
    active: false,
    long: 10.52, 
    lat: 52.26, 
    marketRent: 7.99,
    portfolioRent: 6.24,
  },
  { 
    name: "Dresden",
    marketCategory: 2,
    active: false,
    long: 13.73, 
    lat: 51.05, 
    marketRent: 7.17,
    portfolioRent: 6.12,
  },
  { 
    name: "Düsseldorf",
    marketCategory: 2, 
    active: false,
    long: 6.77, 
    lat: 51.22, 
    marketRent: 10.09,
    portfolioRent: 7.94,
  },
  { 
    name: "Hannover", 
    marketCategory: 2,
    active: false,
    long: 9.73, 
    lat: 52.37, 
    marketRent: 8.85,
    portfolioRent: 6.60,
  },
  { 
    name: "Karlsruhe",
    marketCategory: 2, 
    active: false,
    long: 8.40, 
    lat: 49.00, 
    marketRent: 10.10,
    portfolioRent: 6.73,
  },
  { 
    name: "Kiel",
    marketCategory: 2,
    active: false,
    long: 10.13, 
    lat: 54.32, 
    marketRent: 7.88,
    portfolioRent: 6.87,
  },
  { 
    name: "Leipzig",
    marketCategory: 2,
    active: false,
    long: 12.37, 
    lat: 51.33, 
    marketRent: 6.19,
    portfolioRent: 5.44,
  },
  { 
    name: "Leverkusen",
    marketCategory: 2, 
    active: false,
    long: 6.98, 
    lat: 51.03, 
    marketRent: 7.60,
    portfolioRent: 6.31,
  },
  { 
    name: "Lübeck", 
    marketCategory: 2,
    active: false,
    long: 10.68, 
    lat: 53.86, 
    marketRent: 8.05,
    portfolioRent: 6.53,
  },
  { 
    name: "Ludwigshafen am Rhein",
    marketCategory: 2,
    active: false,
    long: 8.44,
    lat: 49.48,
    marketRent: 8.27,
    portfolioRent: 6.22,
  },
  { 
    name: "Mannheim",
    marketCategory: 2,
    active: false,
    long: 8.47, 
    lat: 49.49, 
    marketRent: 9.04,
    portfolioRent: 6.99,
  },
  { 
    name: "Münster",
    marketCategory: 2, 
    active: false,
    long: 7.62, 
    lat: 51.96, 
    marketRent: 9.54,
    portfolioRent:7.89,
  },
  { 
    name: "Nürnberg",
    marketCategory: 2,
    active: false,
    long: 11.07, 
    lat: 49.45, 
    marketRent: 9.19,
    portfolioRent: 7.04,
  },
  { 
    name: "Potsdam",
    marketCategory: 2,
    active: false,
    long: 13.06, 
    lat: 52.39, 
    marketRent: 9,
    portfolioRent: 6.98,
  },
  { 
    name: "Wiesbaden",
    marketCategory: 2,
    active: false, 
    long: 8.24, 
    lat: 50.08, 
    marketRent: 10.08,
    portfolioRent: 8.21,
  },
  { 
    name: "Berlin",
    marketCategory: 3,
    active: false,
    long: 13.41, 
    lat: 52.52, 
    marketRent: 10.19,
    portfolioRent:6.68,
  },
  { 
    name: "Bielefeld",
    marketCategory: 3, 
    active: false,
    long: 8.53, 
    lat: 52.03, 
    marketRent: 7.24,
    portfolioRent: 6.19,
  },
  { 
    name: "Frankfurt am Main",
    marketCategory: 3,
    active: false,
    long: 8.68,
    lat: 50.11,
    marketRent: 12.72,
    portfolioRent: 8.82,
  },
  { 
    name: "Freiburg im Breisgau",
    marketCategory: 3,
    active: false, 
    long: 7.85,
    lat: 47.99,
    marketRent: 11.73,
    portfolioRent: 8,
  },
  { 
    name: "Hamburg",
    marketCategory: 3,
    active: false, 
    long: 10.01, 
    lat: 53.57, 
    marketRent: 11.04,
    portfolioRent: 8.26,
  },
  { 
    name: "Heidelberg",
    marketCategory: 3,
    active: false, 
    long: 8.69, 
    lat: 49.40, 
    marketRent: 11.28,
    portfolioRent:8.21,
  },
  { 
    name: "Köln",
    marketCategory: 3,
    active: false,
    long: 6.95, 
    lat: 50.93, 
    marketRent: 10.67,
    portfolioRent: 8.21,
  },
  { 
    name: "Mainz",
    marketCategory: 3,
    active: false,
    long: 8.27, 
    lat: 49.98, 
    marketRent: 10.97,
    portfolioRent: 8.29,
  },
  { 
    name: "München",
    marketCategory: 3,
    active: false,
    long: 11.57, 
    lat: 48.13, 
    marketRent: 17.02,
    portfolioRent:11.11,
  },
  { 
    name: "Osnabrück",
    marketCategory: 3,
    active: false, 
    long: 8.04, 
    lat: 52.27, 
    marketRent: 7.73,
    portfolioRent: 6.1,
  },
  { 
    name: "Stuttgart",
    marketCategory: 3,
    active: false, 
    long: 9.17, 
    lat: 48.78, 
    marketRent: 12.79,
    portfolioRent: 8.53,
  },
]

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
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
  .translate([width / 2, height / 2])

// Load external data and boot
d3.json("https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/2_hoch.geo.json").then(function (data) {

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

  //Tooltip
  var Tooltip = d3.select("#mapContainer")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")


  // Bars
  let cityBars = svg.selectAll("mybar")
    .data(cities)
    .enter()
    .append("rect")
    .attr("width", 10)
    .attr("height", function (d) { return d.marketRent; })
    .attr("x", function (d) { return projection([d.long, d.lat])[0] })
    // y point pins the top left corner of the bar
    // correct for the length of the bar in order to place at correct position of city
    .attr("y", function (d) { return projection([d.long, d.lat])[1] - d.marketRent })
    .attr("fill", "#69b3a2")
    .on("mouseover", function (event, d) {
      Tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("stroke", "black")
        .style("opacity", 1)
    })
    .on("mousemove", function (event, d) {
      Tooltip
        .text(d.name)
        .style("left", (event.x + 70) + "px")
        .style("top", (event.y) + "px")
    })
    .on("mouseleave", function (event) {
      Tooltip
        .style("opacity", 0)
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
    })


  let updateChart = function () {

    cityBars
      .transition()
      .duration(2000)
      .attr("height", (d) => d.marketRent * 2)
      .attr("y", function (d) { return projection([d.long, d.lat])[1] - 2 * d.marketRent })
  }
  document.getElementById("rentDecrease").onclick = updateChart;
})