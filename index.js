// Code from d3-graph-gallery.com
// https://www.d3-graph-gallery.com/graph/backgroundmap_country.html

import * as d3 from "https://cdn.skypack.dev/d3@7";

// The svg
const svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");

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
{name: "berlin", long: 13,lat:52},
]
// Add circles:
svg
  .selectAll("myCircles")
  .data(markers)
  .join("circle")
    .attr("id", "circleBasicTooltip")
    .attr("cx", d => projection([d.long, d.lat])[0])
    .attr("cy", d => projection([d.long, d.lat])[1])
    .attr("r", 14)
    .style("fill", "69b3a2")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 3)
    .attr("fill-opacity", .4)


// create a tooltip
var tooltip = d3.select("#map")
.append("div")
.style("position", "absolute")
.style("visibility", "hidden")
.text("I'm a circle!");

d3.select("#berlinToggle")
.on("mousedown", function(){d3.select("#circleBasicTooltip").style("visibility", "hidden")})
d3.select("#circleBasicTooltip")
.on("mouseover", function(){return tooltip.style("visibility", "visible");})
.on("mousemove", function(){return tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
})