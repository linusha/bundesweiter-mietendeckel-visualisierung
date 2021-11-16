// Code partially from d3-graph-gallery.com
// https://www.d3-graph-gallery.com/graph/backgroundmap_country.html

import * as d3 from "https://cdn.skypack.dev/d3@7";

// marketCategory:
// 1 - balanced market
// 2 - strained market
// 3 - distress market
// for balanced markets is maximalRent == increasedRent
let cities = [
  {
    name: "Bochum",
    marketCategory: 1,
    active: false,
    long: 7.12,
    lat: 51.48,
    marketRent: 6.66,
    portfolioRent:5.74,
    maximalRent: 6.89,
  },
  {
    name: "Chemnitz",
    marketCategory: 1,
    active: false,
    long: 12.92,
    lat: 50.83,
    marketRent: 4.97,
    portfolioRent:5.02,
    maximalRent: 6.02,
  },
  {
    name: "Dortmund",
    marketCategory: 1,
    active: false,
    long: 7.46,
    lat: 51.51,
    marketRent: 6.88,
    portfolioRent: 5.72,
    maximalRent: 6.86,
  },
  {
    name: "Duisburg",
    marketCategory: 1,
    active: false,
    long: 6.76,
    lat: 51.43,
    marketRent: 5.9,
    portfolioRent: 5.53,
    maximalRent: 6.64,
  },
  { 
    name: "Erfurt", 
    marketCategory: 1,
    active: false,
    long: 11.03, 
    lat: 50.97, 
    marketRent: 7.13,
    portfolioRent:5.83,
    maximalRent: 7,
  },
  { 
    name: "Essen", 
    marketCategory: 1,
    active: false,
    long: 7.01, 
    lat: 51.45, 
    marketRent: 6.85,
    portfolioRent:6.08,
    maximalRent: 7.3,
  },
  { 
    name: "Gelsenkirchen",
    marketCategory: 1, 
    active: false,
    long: 7.12, 
    lat: 51.50, 
    marketRent: 5.72,
    portfolioRent:5.04,
    maximalRent: 6.05,
  },
  { 
    name: "Hamm", 
    marketCategory: 1,
    active: false,
    long: 7.82, 
    lat: 51.68, 
    marketRent: 5.94,
    portfolioRent:5.49,
    maximalRent: 6.59,
  },
  { 
    name: "Krefeld", 
    marketCategory: 1,
    active: false,
    long: 6.58, 
    lat: 51.33, 
    marketRent: 6.61,
    portfolioRent:5.9,
    maximalRent: 7.08,
  },
  { 
    name: "Mönchengladbach",
    marketCategory: 1,
    active: false,
    long: 6.44, 
    lat: 51.18, 
    marketRent: 6.41,
    portfolioRent:5.97,
    maximalRent: 7.16,
  },
  { 
    name: "Mühlheim an der Ruhr",
    marketCategory: 1,
    active: false,
    long: 8.83,
    lat: 50.11, 
    marketRent: 6.65,
    portfolioRent:6.23,
    maximalRent: 7.48,
  },
  { 
    name: "Oberhausen",
    marketCategory: 1, 
    active: false,
    long: 6.88, 
    lat: 51.47, 
    marketRent: 6.02,
    portfolioRent:5.27,
    maximalRent: 6.32,
  },
  { 
    name: "Rostock", 
    marketCategory: 1,
    active: false,
    long: 12.14, 
    lat: 54.08, 
    marketRent: 6.71,
    portfolioRent:6.1,
    maximalRent: 7.32,
  },
  { 
    name: "Wuppertal",
    marketCategory: 1, 
    active: false,
    long: 7.16, 
    lat: 50.77, 
    marketRent: 6.18,
    portfolioRent:5.74,
    maximalRent: 6.89,
  },
  { 
    name: "Aachen", 
    marketCategory: 2,
    active: false,
    long: 6.08, 
    lat: 50.77, 
    marketRent: 8.31,
    portfolioRent:6.85,
    renewedRent: 7.53,
    maximalRent: 8.22,
    increasedRent: 6.95,
  },
  { 
    name: "Bonn", 
    marketCategory: 2,
    active: false,
    long: 7.09, 
    lat: 50.73, 
    marketRent: 9.44,
    portfolioRent:7.93,
    renewedRent: 8.72,
    maximalRent: 9.52,
    increasedRent: 8.04,
  },
  { 
    name: "Braunschweig",
    marketCategory: 2, 
    active: false,
    long: 10.52, 
    lat: 52.26, 
    marketRent: 7.99,
    portfolioRent: 6.24,
    renewedRent: 6.86,
    maximalRent: 7.49,
    increasedRent: 6.33,
  },
  { 
    name: "Dresden",
    marketCategory: 2,
    active: false,
    long: 13.73, 
    lat: 51.05, 
    marketRent: 7.17,
    portfolioRent: 6.12,
    renewedRent: 6.73,
    maximalRent: 7.34,
    increasedRent: 6.21,
  },
  { 
    name: "Düsseldorf",
    marketCategory: 2, 
    active: false,
    long: 6.77, 
    lat: 51.22, 
    marketRent: 10.09,
    portfolioRent: 7.94,
    renewedRent: 8.73,
    maximalRent: 9.53,
    increasedRent: 8.05,
  },
  { 
    name: "Hannover", 
    marketCategory: 2,
    active: false,
    long: 9.73, 
    lat: 52.37, 
    marketRent: 8.85,
    portfolioRent: 6.60,
    renewedRent: 7.26,
    maximalRent: 7.92,
    increasedRent: 6.7,
  },
  { 
    name: "Karlsruhe",
    marketCategory: 2, 
    active: false,
    long: 8.40, 
    lat: 49.00, 
    marketRent: 10.10,
    portfolioRent: 6.73,
    renewedRent: 7.4,
    maximalRent: 8.08,
    increasedRent: 6.83,
  },
  { 
    name: "Kiel",
    marketCategory: 2,
    active: false,
    long: 10.13, 
    lat: 54.32, 
    marketRent: 7.88,
    portfolioRent: 6.87,
    renewedRent: 7.56,
    maximalRent: 8.24,
    increasedRent: 6.97,
  },
  { 
    name: "Leipzig",
    marketCategory: 2,
    active: false,
    long: 12.37, 
    lat: 51.33, 
    marketRent: 6.19,
    portfolioRent: 5.44,
    renewedRent: 5.98,
    maximalRent: 6.53,
    increasedRent: 5.52,
  },
  { 
    name: "Leverkusen",
    marketCategory: 2, 
    active: false,
    long: 6.98, 
    lat: 51.03, 
    marketRent: 7.60,
    portfolioRent: 6.31,
    renewedRent: 6.94,
    maximalRent: 7.57,
    increasedRent: 6.4,
  },
  { 
    name: "Lübeck", 
    marketCategory: 2,
    active: false,
    long: 10.68, 
    lat: 53.86, 
    marketRent: 8.05,
    portfolioRent: 6.53,
    renewedRent: 7.18,
    maximalRent: 7.84,
    increasedRent: 6.62,
  },
  { 
    name: "Ludwigshafen am Rhein",
    marketCategory: 2,
    active: false,
    long: 8.44,
    lat: 49.48,
    marketRent: 8.27,
    portfolioRent: 6.22,
    renewedRent: 6.84,
    maximalRent: 7.46,
    increasedRent: 6.31,
  },
  { 
    name: "Mannheim",
    marketCategory: 2,
    active: false,
    long: 8.47, 
    lat: 49.49, 
    marketRent: 9.04,
    portfolioRent: 6.99,
    renewedRent: 7.69,
    maximalRent: 8.39,
    increasedRent: 7.09,
  },
  { 
    name: "Münster",
    marketCategory: 2, 
    active: false,
    long: 7.62, 
    lat: 51.96, 
    marketRent: 9.54,
    portfolioRent:7.89,
    renewedRent: 8.68,
    maximalRent: 9.47,
    increasedRent: 8,
  },
  { 
    name: "Nürnberg",
    marketCategory: 2,
    active: false,
    long: 11.07, 
    lat: 49.45, 
    marketRent: 9.19,
    portfolioRent: 7.04,
    renewedRent: 7.74,
    maximalRent: 8.45,
    increasedRent: 7.14,
  },
  { 
    name: "Potsdam",
    marketCategory: 2,
    active: false,
    long: 13.06, 
    lat: 52.39, 
    marketRent: 9,
    portfolioRent: 6.98,
    renewedRent: 7.68,
    maximalRent: 8.38,
    increasedRent: 7.08,
  },
  { 
    name: "Wiesbaden",
    marketCategory: 2,
    active: false, 
    long: 8.24, 
    lat: 50.08, 
    marketRent: 10.08,
    portfolioRent: 8.21,
    renewedRent: 9.03,
    maximalRent: 9.85,
    increasedRent: 8.33,
  },
  { 
    name: "Berlin",
    marketCategory: 3,
    active: false,
    long: 13.41, 
    lat: 52.52, 
    marketRent: 10.19,
    portfolioRent: 6.68,
    maximalRent: 7.24,
  },
  { 
    name: "Bielefeld",
    marketCategory: 3, 
    active: false,
    long: 8.53, 
    lat: 52.03, 
    marketRent: 7.24,
    portfolioRent: 6.19,
    maximalRent: 5.56,
  },
  { 
    name: "Frankfurt am Main",
    marketCategory: 3,
    active: false,
    long: 8.68,
    lat: 50.11,
    marketRent: 12.72,
    portfolioRent: 8.82,
    maximalRent: 8.57,
  },
  { 
    name: "Freiburg im Breisgau",
    marketCategory: 3,
    active: false, 
    long: 7.85,
    lat: 47.99,
    marketRent: 11.73,
    portfolioRent: 8,
    maximalRent: 7.2,
  },
  { 
    name: "Hamburg",
    marketCategory: 3,
    active: false, 
    long: 10.01, 
    lat: 53.57, 
    marketRent: 11.04,
    portfolioRent: 8.26,
    maximalRent: 8.25,
  },
  { 
    name: "Heidelberg",
    marketCategory: 3,
    active: false, 
    long: 8.69, 
    lat: 49.40, 
    marketRent: 11.28,
    portfolioRent:8.21,
    maximalRent: 7.37,
  },
  { 
    name: "Köln",
    marketCategory: 3,
    active: false,
    long: 6.95, 
    lat: 50.93, 
    marketRent: 10.67,
    portfolioRent: 8.21,
    maximalRent: 7.15,
  },
  { 
    name: "Mainz",
    marketCategory: 3,
    active: false,
    long: 8.27, 
    lat: 49.98, 
    marketRent: 10.97,
    portfolioRent: 8.29,
    maximalRent: 7.12,
  },
  { 
    name: "München",
    marketCategory: 3,
    active: false,
    long: 11.57, 
    lat: 48.13, 
    marketRent: 17.02,
    portfolioRent: 11.11,
    maximalRent: 9.87,
  },
  { 
    name: "Osnabrück",
    marketCategory: 3,
    active: false, 
    long: 8.04, 
    lat: 52.27, 
    marketRent: 7.73,
    portfolioRent: 6.1,
    maximalRent: 5.14,
  },
  { 
    name: "Stuttgart",
    marketCategory: 3,
    active: false, 
    long: 9.17, 
    lat: 48.78, 
    marketRent: 12.79,
    portfolioRent: 8.53,
    maximalRent: 8.42,
  },
]

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// The svg


// Map and projection
const projection = d3.geoMercator()
  .center([6, 51])                // GPS of location to zoom on
  .scale(980)                       // This is like the zoom
  .translate([400 / 2, 300 / 2])

// Load external data and boot
d3.json("https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/2_hoch.geo.json").then(function (data) {

  let svg = d3.select("#mapContainer")
  .append("svg")
  .attr("width", 400)
  .attr("height", 300)
  .append("g")
  //.attr("transform",
  //  "translate(" + margin.left + "," + margin.top + ")");

let rentIncreaseActive, rentRenewalActive, maximumRentActive = false

//////
// HELPER METHODS
//////

function calculateMarketRent(cityData){
  if (!cityData.active) return 0;
  if (rentRenewalActive){
    if (cityData.marketCategory == 1) return cityData.marketRent;
    if (cityData.marketCategory == 3) return cityData.marketRent > cityData.maximalRent ? cityData.maximalRent : cityData.marketRent;
    return cityData.marketRent > cityData.renewedRent ? cityData.renewedRent : cityData.marketRent;
  }
  return cityData.marketRent;
}

function calculatePortfolioRent (cityData){
  if (!cityData.active) return 0;
  if (maximumRentActive){
    return cityData.portfolioRent > cityData.maximalRent ? cityData.maximalRent : cityData.portfolioRent;
  }
  return cityData.portfolioRent;
}

function getCircleSelectionForRentRenewal(){
  return svg.selectAll("circle")
    .filter(data => {  
      return ((data.marketCategory == 2 && (data.marketRent > data.renewedRent)) || (data.marketCategory == 3 && (data.marketRent > data.maximalRent))) 
    });
}

function getCircleSelectionForMaximumRent(){
  return svg.selectAll("circle")
    .filter(data => {
      return data.marketRent > data.maximalRent 
    });
}

function getCircleSelectionForRentIncrease(){
  return svg.selectAll("circle");
}

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

  // Define the div for the tooltip
  let tooltip = d3.select("body")
    .append("div")	
      .attr("class", "tooltip")
      .style("position", "absolute")			
      .style("opacity", 0);

  // a city has been toggled by clicking on it
  let updateCitySelection = function(event, clickedData) {
    clickedData.active = !clickedData.active;
      
    svg.selectAll(".marketRect")
      .filter((d) => d.name == clickedData.name )
      .transition(2000)
      .attr("height", (d) => calculateMarketRent(d))
      .attr("y", (d) => clickedData.active ? projection([d.long, d.lat])[1] - d.marketRent : projection([d.long, d.lat])[1])
      .style("opacity", clickedData.active ? 1 : 0);

    svg.selectAll(".portfolioRect")
      .filter((d) => d.name == clickedData.name )
      .transition(2000)
      .attr("height", (d) => clickedData.active ? d.portfolioRent : 0)
      .attr("y", (d) => clickedData.active ? projection([d.long, d.lat])[1] - d.portfolioRent : projection([d.long, d.lat])[1])
      .style("opacity", clickedData.active ? 1 : 0);
    
    cityCircles
      .filter( (d) => d.name == clickedData.name )
      .transition(2000)
      .style("opacity", clickedData.active ? 0 : 1);
  }

  function colorCityCircles(d) {
    if (d.marketCategory == 1) return "#00ff00"
    if (d.marketCategory == 2) return "#ff9900"
    if (d.marketCategory == 3) return "#ff0000"
  }

  function colorMarketBars(d) {
    if (d.marketCategory == 1) return "#00ff00"
    if (d.marketCategory == 2) return "#ff9900"
    if (d.marketCategory == 3) return "#ff0000"
  }

  function colorPortfolioBars(d) {
    if (d.marketCategory == 1) return "#009900"
    if (d.marketCategory == 2) return "#b36b00"
    if (d.marketCategory == 3) return "#990000"
  }

  let circleRadius = 2;

  let cityCircles = svg.selectAll("circles")
    .data(cities)
    .enter()
      .append("circle")
        .attr("class", "cityCircle")
        .attr("cx", function (d) { return projection([d.long, d.lat])[0] })
        .attr("cy", function (d) { return projection([d.long, d.lat])[1] })
        .attr("r", circleRadius)
        .attr("fill", colorCityCircles)
        .on("mousedown", updateCitySelection)
        .on("mouseover", function(event, d) {		
          tooltip.transition()		
            .duration(200)		
            .style("opacity", .9);		
          tooltip.html(d.name)	
            .style("left", (event.pageX) + "px")		
            .style("top", (event.pageY - 28) + "px");	
        })					
        .on("mouseout", function() {		
          tooltip.transition()		
            .duration(500)		
            .style("opacity", 0);	
        });
    
  let barWidth = 10; 

  svg.selectAll("marketBars")
    .data(cities)
    .enter()
      .append("rect")
        .attr("class", "cityRect marketRect")
        .attr("width", barWidth)
        .attr("x", (d) => projection([d.long, d.lat])[0] - (barWidth / 2))
        .attr("y", (d) => projection([d.long, d.lat])[1])
        .attr("fill", colorMarketBars)
        .attr("opacity", 0)
        .on("mousedown", updateCitySelection);
  
  svg.selectAll("portfolioBars")
    .data(cities)
    .enter()
      .append("rect")
        .attr("class", "cityRect portfolioRect")
        .attr("width", barWidth)
        .attr("x", (d) => projection([d.long, d.lat])[0] - (barWidth / 2))
        .attr("y", (d) => projection([d.long, d.lat])[1])
        .attr("fill", colorPortfolioBars)
        .attr("opacity", 0)
        .on("mousedown", updateCitySelection);

  ////////
  // FUNCTIONALITY FOR THE BUTTONS
  ////////

  function rentIncreasePressed () {
    if (rentIncreaseActive){
      document.getElementById('rentIncrease').setAttribute("selected", false);
      rentIncreaseActive = false  
    }
    else {
      document.getElementById('rentIncrease').setAttribute("selected", true);
      rentIncreaseActive = true
    }
    getCircleSelectionForRentIncrease()
    .transition()
          .duration(500)
          .attr("r", 5 * circleRadius)
        .transition()
          .duration(500)
          .attr("r", circleRadius);
  }

  function rentRenewalPressed () {
    if (rentRenewalActive){
      document.getElementById('rentRenewal').setAttribute("selected", false);
      rentRenewalActive = false
    }
    else {
      document.getElementById('rentRenewal').setAttribute("selected", true);
      rentRenewalActive = true
    }
    getCircleSelectionForRentRenewal()
        .transition()
          .duration(500)
          .attr("r", 5 * circleRadius)
        .transition()
          .duration(500)
          .attr("r", circleRadius);
      // adapt rent rects for strained markets
      svg.selectAll(".marketRect")
        .transition()
          .duration(1000)
          .attr("height", (d) => calculateMarketRent(d))
          .attr("y", (d) => projection([d.long, d.lat])[1] - calculateMarketRent(d));
  }

  function maximumRentPressed () {
    if (maximumRentActive){
      document.getElementById('maximumRent').setAttribute("selected", false);
      maximumRentActive = false
    }
    else {
      document.getElementById('maximumRent').setAttribute("selected", true);
      maximumRentActive = true
    }
    // highlight for cities with effect
    getCircleSelectionForMaximumRent()  
      .transition()
        .duration(500)
        .attr("r", 5 * circleRadius)
      .transition()
        .duration(500)
        .attr("r", circleRadius);
  // adapt rent rects
  svg.selectAll(".portfolioRect")
    .transition()
      .duration(1000)
      .attr("height", (d) => calculatePortfolioRent(d))
      .attr("y", (d) => projection([d.long, d.lat])[1] - calculatePortfolioRent(d))
  }

  ////////
  // WIRE UP BUTTONS AND THEIR METHODS
  ////////
  document.getElementById("maximumRent").onclick = maximumRentPressed;
  document.getElementById("rentRenewal").onclick = rentRenewalPressed;
  document.getElementById("rentIncrease").onclick = rentIncreasePressed;

})