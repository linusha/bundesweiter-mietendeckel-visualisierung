import * as d3 from "d3";
import Swal from 'sweetalert2';
import 'select-pure/dist/index.js';

// marketCategory:
// 1 - nicht angespannte Wohnmarktlage
// 2 - angespannte Wohnmarktlage
// 3 - Wohnungsnotlage
let cities = [
  {
    "name": "Augsburg",
    "marketCategory": 2,
    "active": false,
    "long": 10.89,
    "lat": 48.36,
    "marktMiete": 12.15,
    "bestandsMiete": 7.99,
    "mietspiegel": 8.55,
    "kappungIst": 8.06,
    "kappungSoll": 6.78,
    "kappungSollNot": 6.68,
    "wiedervermietungIst": 7.71,
    "wiedervermietungSoll": 7.35,
    "wiedervermietungSollNot": 6.68,
    "mietsenkungSoll": 8.02,
    "mietsenkungSollNot": 7.24,
  },
  {
    "name": "Berlin",
    "marketCategory": 3,
    "active": false,
    "long": 13.41,
    "lat": 52.52,
    "marktMiete": 17.38,
    "bestandsMiete": 7.67,
    "mietspiegel": 7.11,
    "kappungIst": 8.06,
    "kappungSoll": 6.78,
    "kappungSollNot": 6.68,
    "wiedervermietungIst": 7.71,
    "wiedervermietungSoll": 7.35,
    "wiedervermietungSollNot": 6.68,
    "mietsenkungSoll": 8.02,
    "mietsenkungSollNot": 7.24,
  },
  {
    "name": "Bielefeld",
    "marketCategory": 2,
    "active": false,
    "long": 8.53,
    "lat": 52.03,
    "marktMiete": 8.78,
    "bestandsMiete": 7.12,
    "mietspiegel": 6.54,
    "kappungIst": 7.64,
    "kappungSoll": 6.28,
    "kappungSollNot": 6.19,
    "wiedervermietungIst": 7.31,
    "wiedervermietungSoll": 6.81,
    "wiedervermietungSollNot": 6.19,
    "mietsenkungSoll": 7.43,
    "mietsenkungSollNot": 5.56,
  },
  {
    "name": "Bochum",
    "marketCategory": 1,
    "active": false,
    "long": 7.12,
    "lat": 51.48,
    "marktMiete": 8,
    "bestandsMiete": 6.25,
    "mietspiegel": 5.71,
    "kappungIst": 7.06,
    "kappungSoll": 6.89,
    "kappungSollNot": 6.89,
    "wiedervermietungIst": 6.66,
    "wiedervermietungSoll": 6.66,
    "wiedervermietungSollNot": 6.66,
    "mietsenkungSoll": 6.89,
    "mietsenkungSollNot": 6.89,
  },
  {
    "name": "Bonn",
    "marketCategory": 2,
    "active": false,
    "long": 7.09,
    "lat": 50.73,
    "marktMiete": 12.16,
    "bestandsMiete": 9.09,
    "mietspiegel": 6.83,
    "kappungIst": 8.91,
    "kappungSoll": 8.04,
    "kappungSollNot": 8.04,
    "wiedervermietungIst": 8.53,
    "wiedervermietungSoll": 8.72,
    "wiedervermietungSollNot": 8.72,
    "mietsenkungSoll": 9.52,
    "mietsenkungSollNot": 9.52,
  },
  {
    "name": "Bremen",
    "marketCategory": 2,
    "active": false,
    "long": 8.81,
    "lat": 53.07,
    "marktMiete": 10.04,
    "bestandsMiete": 7.54,
    "mietspiegel": 4.99,
    "kappungIst": 6.73,
    "kappungSoll": 6.86,
    "kappungSollNot": 6.86,
    "wiedervermietungIst": 6.88,
    "wiedervermietungSoll": 6.88,
    "wiedervermietungSollNot": 6.88,
    "mietsenkungSoll": 6.86,
    "mietsenkungSollNot": 6.86,
  },
  {
    "name": "Dortmund",
    "marketCategory": 2,
    "active": false,
    "long": 7.46,
    "lat": 51.51,
    "marktMiete": 8.9,
    "bestandsMiete": 6.45,
    "mietspiegel": 5.79,
    "kappungIst": 6.73,
    "kappungSoll": 6.86,
    "kappungSollNot": 6.86,
    "wiedervermietungIst": 6.88,
    "wiedervermietungSoll": 6.88,
    "wiedervermietungSollNot": 6.88,
    "mietsenkungSoll": 6.86,
    "mietsenkungSollNot": 6.86,
  },
  {
    "name": "Dresden",
    "marketCategory": 2,
    "active": false,
    "long": 13.73,
    "lat": 51.05,
    "marktMiete": 9.52,
    "bestandsMiete": 6.92,
    "mietspiegel": 6.64,
    "kappungIst": 7.16,
    "kappungSoll": 6.21,
    "kappungSollNot": 6.21,
    "wiedervermietungIst": 6.85,
    "wiedervermietungSoll": 6.73,
    "wiedervermietungSollNot": 6.73,
    "mietsenkungSoll": 7.34,
    "mietsenkungSollNot": 7.34,
  },
  {
    "name": "Duisburg",
    "marketCategory": 2,
    "active": false,
    "long": 6.76,
    "lat": 51.43,
    "marktMiete": 7.27,
    "bestandsMiete": 5.48,
    "mietspiegel": 6.18,
    "kappungIst": 7.06,
    "kappungSoll": 6.64,
    "kappungSollNot": 6.64,
    "wiedervermietungIst": 5.9,
    "wiedervermietungSoll": 5.9,
    "wiedervermietungSollNot": 5.9,
    "mietsenkungSoll": 6.64,
    "mietsenkungSollNot": 6.64,
  },
  {
    "name": "Düsseldorf",
    "marketCategory": 2,
    "active": false,
    "long": 6.77,
    "lat": 51.22,
    "marktMiete": 13.15,
    "bestandsMiete": 9.24,
    "mietspiegel": 9.28,
    "kappungIst": 9.63,
    "kappungSoll": 8.05,
    "kappungSollNot": 8.05,
    "wiedervermietungIst": 9.21,
    "wiedervermietungSoll": 8.73,
    "wiedervermietungSollNot": 8.73,
    "mietsenkungSoll": 9.53,
    "mietsenkungSollNot": 9.53,
  },
  {
    "name": "Erfurt",
    "marketCategory": 1,
    "active": false,
    "long": 11.03,
    "lat": 50.97,
    "marktMiete": 8.36,
    "bestandsMiete": 6.48,
    "mietspiegel": 6.06,
    "kappungIst": 7.81,
    "kappungSoll": 7,
    "kappungSollNot": 7,
    "wiedervermietungIst": 7.13,
    "wiedervermietungSoll": 7.13,
    "wiedervermietungSollNot": 7.13,
    "mietsenkungSoll": 7,
    "mietsenkungSollNot": 7,
  },
  {
    "name": "Essen",
    "marketCategory": 1,
    "active": false,
    "long": 7.01,
    "lat": 51.45,
    "marktMiete": 8.4,
    "bestandsMiete": 6.72,
    "mietspiegel": 6.24,
    "kappungIst": 8.3,
    "kappungSoll": 7.3,
    "kappungSollNot": 7.3,
    "wiedervermietungIst": 6.85,
    "wiedervermietungSoll": 6.85,
    "wiedervermietungSollNot": 6.85,
    "mietsenkungSoll": 7.3,
    "mietsenkungSollNot": 7.3,
  },
  {
    "name": "Frankfurt am Main",
    "marketCategory": 2,
    "active": false,
    "long": 8.68,
    "lat": 50.11,
    "marktMiete": 17.19,
    "bestandsMiete": 10.58,
    "mietspiegel": 8.3,
    "kappungIst": 9.71,
    "kappungSoll": 8.95,
    "kappungSollNot": 8.82,
    "wiedervermietungIst": 9.29,
    "wiedervermietungSoll": 9.7,
    "wiedervermietungSollNot": 8.82,
    "mietsenkungSoll": 10.58,
    "mietsenkungSollNot": 8.57,
  },
  {
    "name": "Hamburg",
    "marketCategory": 3,
    "active": false,
    "long": 10.01,
    "lat": 53.57,
    "marktMiete": 14.93,
    "bestandsMiete": 9.16,
    "mietspiegel": 9.32,
    "kappungIst": 9.95,
    "kappungSoll": 8.38,
    "kappungSollNot": 8.26,
    "wiedervermietungIst": 9.52,
    "wiedervermietungSoll": 9.09,
    "wiedervermietungSollNot": 8.26,
    "mietsenkungSoll": 9.91,
    "mietsenkungSollNot": 8.25,
  },
  {
    "name": "Hannover",
    "marketCategory": 2,
    "active": false,
    "long": 9.73,
    "lat": 52.37,
    "marktMiete": 10.47,
    "bestandsMiete": 7.61,
"mietspiegel": 7.8,    
"kappungIst": 7.4,
    "kappungSoll": 6.7,
    "kappungSollNot": 6.7,
    "wiedervermietungIst": 7.08,
    "wiedervermietungSoll": 7.26,
    "wiedervermietungSollNot": 7.26,
    "mietsenkungSoll": 7.92,
    "mietsenkungSollNot": 7.92,
  },
  {
    "name": "Karlsruhe",
    "marketCategory": 2,
    "active": false,
    "long": 8.4,
    "lat": 49,
    "marktMiete": 11.98,
    "bestandsMiete": 7.92,
    "mietspiegel": 8.47,
    "kappungIst": 8.75,
    "kappungSoll": 6.83,
    "kappungSollNot": 6.83,
    "wiedervermietungIst": 8.37,
    "wiedervermietungSoll": 7.4,
    "wiedervermietungSollNot": 7.4,
    "mietsenkungSoll": 8.08,
    "mietsenkungSollNot": 8.08,
  },
  {
    "name": "Köln",
    "marketCategory": 2,
    "active": false,
    "long": 6.95,
    "lat": 50.93,
    "marktMiete": 13.95,
    "bestandsMiete": 9.39,
    "mietspiegel": 8.39,
    "kappungIst": 9.95,
    "kappungSoll": 8.33,
    "kappungSollNot": 8.21,
    "wiedervermietungIst": 9.52,
    "wiedervermietungSoll": 9.03,
    "wiedervermietungSollNot": 8.21,
    "mietsenkungSoll": 9.85,
    "mietsenkungSollNot": 7.15,
  },
  {
    "name": "Leipzig",
    "marketCategory": 2,
    "active": false,
    "long": 12.37,
    "lat": 51.33,
    "marktMiete": 8.96,
    "bestandsMiete": 5.93,
    "mietspiegel": 5.83,
    "kappungIst": 5.73,
    "kappungSoll": 5.52,
    "kappungSollNot": 5.52,
    "wiedervermietungIst": 5.48,
    "wiedervermietungSoll": 5.98,
    "wiedervermietungSollNot": 5.98,
    "mietsenkungSoll": 6.53,
    "mietsenkungSollNot": 6.53,
  },
  {
    "name": "Mannheim",
    "marketCategory": 2,
    "active": false,
    "long": 8.47,
    "lat": 49.49,
    "marktMiete": 11.28,
    "bestandsMiete": 8.39,
    "mietspiegel": 7.47,
    "kappungIst": 8.2,
    "kappungSoll": 7.09,
    "kappungSollNot": 7.09,
    "wiedervermietungIst": 7.84,
    "wiedervermietungSoll": 7.69,
    "wiedervermietungSollNot": 7.69,
    "mietsenkungSoll": 8.39,
    "mietsenkungSollNot": 8.39,
  },
  {
    "name": "München",
    "marketCategory": 3,
    "active": false,
    "long": 11.57,
    "lat": 48.13,
    "marktMiete": 21.23,
    "bestandsMiete": 12.32,
    "mietspiegel": 12.08,
    "kappungIst": 12.02,
    "kappungSoll": 11.27,
    "kappungSollNot": 11.11,
    "wiedervermietungIst": 11.49,
    "wiedervermietungSoll": 12.22,
    "wiedervermietungSollNot": 11.11,
    "mietsenkungSoll": 13.33,
    "mietsenkungSollNot": 9.87,
  },
  {
    "name": "Münster",
    "marketCategory": 3,
    "active": false,
    "long": 7.62,
    "lat": 51.96,
    "marktMiete": 12.3,
    "bestandsMiete": 6.97,
    "mietspiegel": 7.41,
    "kappungIst": 7.88,
    "kappungSoll": 8,
    "kappungSollNot": 8,
    "wiedervermietungIst": 7.54,
    "wiedervermietungSoll": 8.68,
    "wiedervermietungSollNot": 8.68,
    "mietsenkungSoll": 9.47,
    "mietsenkungSollNot": 9.47,
  },
  {
    "name": "Nürnberg",
    "marketCategory": 2,
    "active": false,
    "long": 11.07,
    "lat": 49.45,
    "marktMiete": 11.59,
    "bestandsMiete": 8.21,
    "mietspiegel": 9.14,
    "kappungIst": 9.07,
    "kappungSoll": 7.14,
    "kappungSollNot": 7.14,
    "wiedervermietungIst": 8.68,
    "wiedervermietungSoll": 7.74,
    "wiedervermietungSollNot": 7.74,
    "mietsenkungSoll": 8.45,
    "mietsenkungSollNot": 8.45,
  },
  {
    "name": "Rostock",
    "marketCategory": 2,
    "active": false,
    "long": 12.14,
    "lat": 54.08,
    "marktMiete": 10.05,
    "bestandsMiete": 6.7,
"mietspiegel": 6.14,    
"kappungIst": 7.72,
    "kappungSoll": 7.32,
    "kappungSollNot": 7.32,
    "wiedervermietungIst": 6.71,
    "wiedervermietungSoll": 6.71,
    "wiedervermietungSollNot": 6.71,
    "mietsenkungSoll": 7.32,
    "mietsenkungSollNot": 7.32,
  },
  {
    "name": "Stuttgart",
    "marketCategory": 2,
    "active": false,
    "long": 9.17,
    "lat": 48.78,
    "marktMiete": 16.56,
    "bestandsMiete": 10.39,
    "mietspiegel": 10.09,
    "kappungIst": 11.46,
    "kappungSoll": 8.65,
    "kappungSollNot": 8.53,
    "wiedervermietungIst": 10.96,
    "wiedervermietungSoll": 9.38,
    "wiedervermietungSollNot": 8.53,
    "mietsenkungSoll": 10.24,
    "mietsenkungSollNot": 8.42,
  },
  {
    "name": "Wuppertal",
    "marketCategory": 2,
    "active": false,
    "long": 7.16,
    "lat": 50.77,
    "marktMiete": 7.77,
    "bestandsMiete": 6.1,
    "mietspiegel": 6,
    "kappungIst": 7.06,
    "kappungSoll": 6.89,
    "kappungSollNot": 6.89,
    "wiedervermietungIst": 6.18,
    "wiedervermietungSoll": 6.18,
    "wiedervermietungSollNot": 6.18,
    "mietsenkungSoll": 6.89,
    "mietsenkungSollNot": 6.89,
  }
];

d3.json(
  "map.geo.json"
).then(function (data) {
  let active = d3.select(null);
  let kappungsgrenzeActive = false;
  let mietobergrenzenActive = false;
  let mietabsenkungenActive = false;
  let sofortProgrammActive = false;
  let wohnungenotgebieteActive = false;
  let barScale = 5;
  let width = document.getElementById("customMietendeckelApplet").offsetWidth;
  let height = width / 0.625;
  let map, projection, path, g, tooltip, increaseBars, circleRadius, cityCircles, barWidth, marketBars, stopBars, averageBars, highestIncreaseBars, highestMarketBars;

  //////
  // Methods related to calculations and data
  //////
  function bestandsMiete(city) {
    if (mietabsenkungenActive) {
      if (wohnungenotgebieteActive) return city.mietsenkungSollNot.toFixed(2);
      return city.mietsenkungSoll.toFixed(2);
    }
    return 0;
  }

  function wiedervermietungsMiete(city) {
    if (mietobergrenzenActive) {
      if (wohnungenotgebieteActive) {
        if (mietabsenkungenActive) return Math.min(city.wiedervermietungSollNot.toFixed(2), bestandsMiete(city));
        return city.wiedervermietungSollNot.toFixed(2);
      }
      if (mietabsenkungenActive) return Math.min(city.wiedervermietungSoll.toFixed(2), bestandsMiete(city));
      return city.wiedervermietungSoll.toFixed(2);
    }
    if (mietabsenkungenActive) return Math.min(city.marktMiete.toFixed(2), bestandsMiete(city));
    return city.marktMiete.toFixed(2);
  }

  function mieterhoehung(city) {
    if (sofortProgrammActive) {
      if (city.marketCategory > 1) return (city.bestandsMiete).toFixed(2)
      return (city.bestandsMiete * 1.02).toFixed(2);
    }

    if (kappungsgrenzeActive) {
      if (wohnungenotgebieteActive) {
        if (mietabsenkungenActive) return Math.min(city.kappungSollNot.toFixed(2), bestandsMiete(city));
        return city.kappungSollNot.toFixed(2);
      }
      if (mietabsenkungenActive) return Math.min(city.kappungSoll.toFixed(2), bestandsMiete(city));
      return city.kappungSoll.toFixed(2);
    }
    if (mietabsenkungenActive) return Math.min(city.kappungIst.toFixed(2), bestandsMiete(city));
    return city.kappungIst.toFixed(2);
  }

  //////
  // Methods related to the visualization
  //////

  function showHintNoSelectedCity() {
    document.getElementById("consequences").innerHTML = '<p id="tutorial" class="callout">Wähle eine Stadt aus, um zu sehen wie sich die Maßnahmen auf die Mieten dort auswirken.</p>'
  }

  function getConsequencesContent(cityData) {
    let nameTag = "<h3>So wirken die Maßnahmen in " + cityData.name + ":</h3>";
    let leistbarNewTag
    if (!kappungsgrenzeActive && !mietabsenkungenActive && !mietobergrenzenActive && !wohnungenotgebieteActive) {
      leistbarNewTag =
        `<p>Aktiviere eine oder mehrere der Maßnahmen oben, um zu sehen, wie sich sich auf ${cityData.name} auswirken. Aktuell ist die Lage so:</p>`;
    }
    let averageTag =
      `<p class='in-box'><span style='color:#018E06;'>●</span> Momentan beträgt die durchschnittliche Miete: <b>` +
      cityData.bestandsMiete.toString().replace('.', ',') +
      "</b>€/m²</p>";
    let mieterhoehungsText = "Durchschnittlich mögliche Mieterhöhung auf"
    let mieterhoehungsTag =
      `<p class='in-box'><span style='color:#EBE415;'>●</span> ${mieterhoehungsText}: <b>` +
      mieterhoehung(cityData).toString().replace('.', ',') +
      "</b>€/m²</p>";
    let neuvermietungsText = "Durchschnittliche Miete bei Wiedervermietung"
    let neuvermietungsTag =
      `<p class='in-box'><span style='color:#0084FF;'>●</span> ${neuvermietungsText}: <b>` +
      wiedervermietungsMiete(cityData).toString().replace('.', ',') +
      "</b>€/m²</p>";
    let bestandsMietenTag =
      `<p class='in-box'><span style='color:#FF3300;'>●</span> Die durchschnittliche maximal erlaubte Höchstmiete beträgt: <b>` +
      bestandsMiete(cityData).toString().replace('.', ',') +
      "</b>€/m²</p>";
    return (
      nameTag +
      leistbarNewTag +
      "<div class='numbers-container'>" +
      averageTag +
      mieterhoehungsTag +
      neuvermietungsTag +
      ((mietabsenkungenActive ? bestandsMietenTag + "</div>" : "</div>"))
    );
  }

  function reset(calledFromUs) {
    if (!(calledFromUs === true) && document.getElementById("mapContainer").offsetWidth < 500) return;
    document.getElementById("citySelector").removeEventListener("change", citySelectorChanged);
    document.getElementById("citySelector").selectedIndex = 0;
    document.getElementById("citySelector").addEventListener("change", citySelectorChanged);
    active.classed("active", false);
    active = d3.select(null);
    cities.forEach(city => city.active = false)

    map.transition(750)
      .style("stroke-width", "1px")
      .attr("transform", "");

    map.selectAll(".tooltip")
      .style("visibility", "hidden");

    map.selectAll("text").style("visibility", "hidden");

    map
      .selectAll(".stopRect")
      .style("visibility", "hidden");
    map
      .selectAll(".marketRect")
      .style("visibility", "hidden");
    map
      .selectAll(".averageRect")
      .style("visibility", "hidden");
    map
      .selectAll(".increaseRect")
      .style("visibility", "hidden");

    map
      .selectAll(".highestIncreaseRect")
      .style("visibility", "hidden");

    map
      .selectAll(".highestMarketRect")
      .style("visibility", "hidden");

    cityCircles
      .style("visibility", "visible");

    showHintNoSelectedCity();
  }

  function citySelected() {
    return cities.some((city) => city.active)
  }

  function selectedCity() {
    return cities.filter((city) => city.active)[0]
  }

  function updateBarNumbers(city) {
    map.selectAll("text")
      .style("visibility", "hidden")

    averageBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => '⌀' + d.bestandsMiete.toString().replace('.', ','))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] - (2 * barWidth) + (d.bestandsMiete.toString().length == 5 ?
        0.3 :
        1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

    increaseBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => '⌀' + mieterhoehung(d).toString().replace('.', ','))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] - barWidth + (mieterhoehung(d).toString().length == 5 ?
        0.3 :
        1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

    marketBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => '⌀' + wiedervermietungsMiete(d).toString().replace('.', ','))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] + (wiedervermietungsMiete(d).toString().length == 5 ?
        0.3 :
        1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

    stopBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => (mietabsenkungenActive ? '⌀' + bestandsMiete(d).toString().replace('.', ',') : ''))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] + barWidth + (bestandsMiete(d).toString().length == 5 ?
        0.3 :
        1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

  }

  function updateConsequences(city) {
    updateBarNumbers(city);
    updateNotGebieteRegel();
    document.getElementById("consequences").innerHTML = getConsequencesContent(city);
  }

  function updateNotGebieteRegel() {
    let content = '';
    if (kappungsgrenzeActive) content = content + ` Hier gilt ein Mietenstopp - Mieterhöhungen sind vollständig ausgeschlossen.`;
    if (mietobergrenzenActive) content = content + ` Bei neu abgeschlossenen Verträgen dürfen die Mieten die <span id="modal-average-rent-dynamic" class="infolink"><span>örtliche Durchschnittsmiete</span></span> nicht übersteigen.`;
    if (mietabsenkungenActive) content = content + ` Überhöhte Miete werden stärker abgesenkt: Keine Miete darf die örtlich <span id="modal-affordable-rent" class="infolink"><span>leistbare Miete</span></span> um mehr als 20 % überschreiten.`;
    document.getElementById('notgebiet-regeln').innerHTML = content;
    if (mietobergrenzenActive) {
      document.getElementById('modal-average-rent-dynamic').onclick = () => {
        Swal.fire({
          title: 'Örtliche Durchschnittsmiete',
          html: '<p style="color: #545454;">In die Durchschnittsmiete fließen alle Mieten ein, anders als in den derzeitigen Mietspiegeln, die nur die Mietänderungen der vergangenen 6 Jahre berücksichtigen. Die Durchschnittsmiete liegt also in der Regel niedriger.<br>' +
            'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52741" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF3300",
          showClass: {
            backdrop: 'swal2-noanimation', // disable backdrop animation
            popup: '',                     // disable popup animation
            icon: ''                       // disable icon animation
          },
          hideClass: {
            popup: '',                     // disable popup fade-out animation
          },
        })
      };
    }
    if (mietabsenkungenActive) {
      document.getElementById('modal-affordable-rent').onclick = () => {
        Swal.fire({
          title: 'Leistbare Miete',
          html: '<p style="color: #545454;">Die leistbare Miete wird, anders als die Durchschnittsmiete, anhand der verfügbaren Einkommen berechnet. Als leistbar gilt eine Miete, wenn sie höchstens 30 Prozent des durchschnittlichen Nettohaushaltseinkommens in der Kommune beträgt.<br>' +
            'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52743" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF3300",
          showClass: {
            backdrop: 'swal2-noanimation', // disable backdrop animation
            popup: '',                     // disable popup animation
            icon: ''                       // disable icon animation
          },
          hideClass: {
            popup: '',                     // disable popup fade-out animation
          },
        })
      };
    }
  }

  let updateCitySelection = function (event, clickedData) {
    if (event) { // we are called by clicking a city
      if (document.getElementById("mapContainer").offsetWidth < 500) return; // small device mode, clicking is disabled
      event.stopPropagation();
      const dropdown = document.getElementById("citySelector")
      const cityOffset = cities.findIndex(city => city.name === clickedData.name);
      dropdown.selectedIndex = cityOffset + 1; // index is off by one due to help option
      return; // return early and trigger the actual update via the dropdown
    }
    if (!clickedData) return; // happens when we adjust the help text in the dropdown
    clickedData.active = !clickedData.active;
    cities.map(city => city.active = city.name == clickedData.name ? city.active : false)

    map.selectAll(".tooltip")
      .style("visibility", "hidden");

    map
      .selectAll(".averageRect")
      .style("visibility", "hidden");
    map
      .selectAll(".increaseRect")
      .style("visibility", "hidden");
    map
      .selectAll(".marketRect")
      .style("visibility", "hidden");
    map
      .selectAll(".highestIncreaseRect")
      .style("visibility", "hidden");
    map
      .selectAll(".highestMarketRect")
      .style("visibility", "hidden");
    map
      .selectAll(".stopRect")
      .style("visibility", "hidden");


    cityCircles
      .style("visibility", "visible");

    if (citySelected()) {

      updateConsequences(clickedData)

      var dx = 5 * barWidth,
        dy = clickedData.marktMiete * barScale + 10,
        x = ((projection([clickedData.long, clickedData.lat])[0])),
        y = ((projection([clickedData.long, clickedData.lat])[1]) + projection([clickedData.long, clickedData.lat])[1] - dy) / 2,
        scale = .9 / Math.max(dx / width, dy / height),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

      map.transition(750)
        .style("stroke-width", "0.1px")
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
    }
    else {
      map.selectAll("text")
        .style("visibility", "hidden")
      showHintNoSelectedCity()
      reset(true);
    };


    map
      .selectAll(".averageRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => d.bestandsMiete * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - d.bestandsMiete * barScale
      )
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".increaseRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => mieterhoehung(d) * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - mieterhoehung(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".marketRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => wiedervermietungsMiete(d) * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - wiedervermietungsMiete(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".stopRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => bestandsMiete(d) * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - bestandsMiete(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".highestMarketRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => d.marktMiete * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - d.marktMiete * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".highestIncreaseRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => d.kappungIst * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - d.kappungIst * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    cityCircles
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .style("visibility", clickedData.active ? "hidden" : "visible");
  };

  // TODO: Do we keep this? 
  function colorCityCircles(d) {
    // if (wohnungenotgebieteActive && !kappungsgrenzeActive && !mietabsenkungenActive && !mietobergrenzenActive) {
    //   if (d.marketCategory == 3) return "#ff3300"
    // }
    // else if (benefitingFromCurrentSelection().includes(d.name)) return "#ff3300";
    return "#2b3240"
  }

  function drawMap() {
    width = document.getElementById("mapContainer").offsetWidth;
    height = height = width / 0.625;
    if (width > 400) {
      width = 500;
      height = 400 / 0.625;
    }
    if (width < 400) {
      height = 500
    }
    document.getElementById("mapContainer").innerHTML = "";
    map = d3
      .select("#mapContainer")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    projection = d3
      .geoMercator()
      .center([10, 51.38])
      .scale(width * 5) // This is like the zoom
      .translate([width / 2, height / 2]);

    path = d3.geoPath().projection(projection);

    map.append("rect")
      .attr("class", "background")
      .attr("width", width)
      .attr("height", height)

    g = map
      .append("g").style("stroke-width", "1px")

    g.selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("fill", "#FFFFFF")
      .attr("d", path)
      .attr("class", "feature")
      .style("stroke", "darkgray")
      .on("click", reset);

    tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("border-radius", "1px")
      .style("background", "#2b3240")
      .style("opacity", 0.8)
      .style("padding", "3px")
      .style("color", "white")
      .style("visibility", "hidden");

    circleRadius = 3;

    cityCircles = map
      .selectAll("circles")
      .data(cities)
      .enter()
      .append("circle")
      .attr("class", "cityCircle")
      .attr("cx", function (d) {
        return projection([d.long, d.lat])[0];
      })
      .attr("cy", function (d) {
        return projection([d.long, d.lat])[1];
      })
      .attr("r", circleRadius)
      .attr("fill", colorCityCircles)
      .on("mousedown", updateCitySelection)
      .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("visibility", "visible");
        tooltip
          .html(d.name)
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function () {
        tooltip.transition().duration(200).style("visibility", "hidden");
      })
      .on("touchstart", function () {
        tooltip.transition().duration(0).style("visibility", "hidden");
      })

    barWidth = 10;

    // depicting bar for current average rentals
    averageBars = map
      .selectAll("averageBars")
      .data(cities)
      .enter()
      .append("g")

    averageBars
      .append("rect")
      .attr("class", "cityRect averageRect")
      .attr("width", barWidth)
      .attr("x", (d) => projection([d.long, d.lat])[0] - (2 * barWidth))
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#018E06")
      .attr("visibility", "hidden")
      .on("mousedown", reset);

    averageBars
      .append("text")

    // max increase
    highestIncreaseBars = map
      .selectAll("highestIncreaseBars")
      .data(cities)
      .enter()
      .append("g")

    highestIncreaseBars
      .append("rect")
      .attr("class", "cityRect highestIncreaseRect")
      .attr("width", barWidth)
      .attr("x", (d) => projection([d.long, d.lat])[0] - barWidth)
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#BDB710")
      .attr("opacity", 0.8)
      .attr("visibility", "hidden")
      .on("mousedown", reset);

    //depicting bars for possible increases in current rentals
    increaseBars = map
      .selectAll("increaseBars")
      .data(cities)
      .enter()
      .append("g")

    increaseBars
      .append("rect")
      .attr("class", "cityRect increaseRect")
      .attr("width", barWidth)
      .attr("x", (d) => projection([d.long, d.lat])[0] - barWidth)
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#EBE415")
      .attr("visibility", "hidden")
      .on("mousedown", reset);

    increaseBars
      .append("text")

    // max market
    highestMarketBars = map
      .selectAll("highestMarketBars")
      .data(cities)
      .enter()
      .append("g")

    highestMarketBars
      .append("rect")
      .attr("class", "cityRect highestMarketRect")
      .attr("width", barWidth)
      .attr("x", (d) => projection([d.long, d.lat])[0])
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#40A3FF")
      .attr("opacity", 0.8)
      .attr("visibility", "hidden")
      .on("mousedown", reset);

    // depicting bar for new rentals
    marketBars = map
      .selectAll("marketBars")
      .data(cities)
      .enter()
      .append("g")

    marketBars.append("rect")
      .attr("class", "cityRect marketRect")
      .attr("width", barWidth)
      .attr("x", (d) => projection([d.long, d.lat])[0])
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#0084FF")
      .attr("visibility", "hidden")
      .on("mousedown", reset)

    marketBars
      .append("text")

    // depicting bar for rent stop if applicable
    stopBars = map
      .selectAll("stopBars")
      .data(cities)
      .enter()
      .append("g")

    stopBars.append("rect")
      .attr("class", "cityRect stopRect")
      .attr("width", barWidth)
      .attr("x", (d) => projection([d.long, d.lat])[0] + barWidth)
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#FF3300")
      .attr("visibility", "hidden")
      .on("mousedown", reset)

    stopBars
      .append("text")
  }


  ////////
  // Functionality for the UI
  ////////

  function kappungsgrenzePressed() {
    let button = document.getElementById("kappungsgrenzen")
    if (button.nextElementSibling.className !== "closedItem") {
      button.nextElementSibling.className = "closedItem"
      button.textContent = "▸ " + 'Mieterhöhungen begrenzen';
    } else {
      button.textContent = "▾ " + 'Mieterhöhungen begrenzen';
      button.nextElementSibling.className = "openItem"
    }
  }

  function kappungsgrenzeToggled(status) {
    kappungsgrenzeActive = status;
    updateNotGebieteRegel();

    map.selectAll(".cityCircle")
      .attr("fill", colorCityCircles)

    map
      .selectAll(".increaseRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => mieterhoehung(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - mieterhoehung(d) * barScale
      );

    if (citySelected()) updateConsequences(selectedCity());
  }

  function mietabsenkungenPressed() {
    let button = document
      .getElementById("mietabsenkungen")
    if (button.nextElementSibling.className !== "closedItem") {
      button.nextElementSibling.className = "closedItem"
      button.textContent = "▸ " + button.textContent.replace(/ /g, '').replace(/\n/g, '').slice(1);
    } else {
      button.textContent = "▾ " + button.textContent.replace(/ /g, '').replace(/\n/g, '').slice(1);
      button.nextElementSibling.className = "openItem"
    }

  }

  function mietabsenkungenToggled(status) {
    mietabsenkungenActive = status;
    updateNotGebieteRegel();

    map.selectAll(".cityCircle")
      .attr("fill", colorCityCircles)

    map
      .selectAll(".increaseRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => mieterhoehung(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - mieterhoehung(d) * barScale
      );

    map
      .selectAll(".stopRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => bestandsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - bestandsMiete(d) * barScale
      );

    map
      .selectAll(".marketRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => wiedervermietungsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - wiedervermietungsMiete(d) * barScale
      );

    if (mietabsenkungenActive) {
      stopBars
        .selectAll("text")
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .style("opacity", 1)

    }

    if (citySelected()) updateConsequences(selectedCity());
  }

  function mietobergrenzenPressed() {
    let button = document
      .getElementById("mietobergrenzen")
    if (button.nextElementSibling.className !== "closedItem") {
      button.nextElementSibling.className = "closedItem"
      button.textContent = "▸ " + button.textContent.replace(/ /g, '').replace(/\n/g, '').slice(1);
    } else {
      button.textContent = "▾ " + button.textContent.replace(/ /g, '').replace(/\n/g, '').slice(1);
      button.nextElementSibling.className = "openItem"
    }
  }

  function mietobergrenzenToggled(status) {
    mietobergrenzenActive = status;
    updateNotGebieteRegel();

    map.selectAll(".cityCircle")
      .attr("fill", colorCityCircles)
    // adapt rent rects
    map
      .selectAll(".marketRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => wiedervermietungsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - wiedervermietungsMiete(d) * barScale
      );
    if (citySelected()) updateConsequences(selectedCity());
  }

  function sofortprogrammPressed() {
    let button = document.getElementById("sofortprogramm")
    if (button.nextElementSibling.className !== "closedItem") {
      button.nextElementSibling.className = "closedItem"
      button.textContent = "▸ " + 'Temporäres Sofortprogramm';
    } else {
      button.textContent = "▾ " + 'Temporäres Sofortprogramm';
      button.nextElementSibling.className = "openItem"
    }
  }

  function sofortProgrammToggled(status) {
    sofortProgrammActive = status;

    map
      .selectAll(".increaseRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => mieterhoehung(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - mieterhoehung(d) * barScale
      );

    if (citySelected()) updateConsequences(selectedCity());
  }

  //////
  // Bootstrap Visualization
  //////

  // let hint be visible in the beginning
  showHintNoSelectedCity()
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  drawMap()
  // make map responsive
  window.addEventListener('resize', function (event) {
    const dropdown = document.getElementById("citySelector");
    if (document.getElementById("mapContainer").offsetWidth < 500 && dropdown.selectedIndex === 0) {
      dropdown.disable();
      dropdown.selectedOption.label = 'Wähle eine Stadt aus der Liste aus.';
      dropdown.selectedIndex = 0;
      dropdown.enable();
    }
    else if (dropdown.selectedIndex === 0) {
      dropdown.disable();
      dropdown.selectedOption.label = 'Wähle eine Stadt aus der Liste oder klicke sie auf der Karte an.';
      dropdown.selectedIndex = 0;
      dropdown.enable();
    }
    if (window.innerWidth != windowWidth || window.innerHeight != windowHeight) {
      drawMap()
    }
  }, true);

  document.getElementById("kappungsgrenzen").onclick = kappungsgrenzePressed;
  document.getElementById("mietobergrenzen").onclick = mietobergrenzenPressed;
  document.getElementById("mietabsenkungen").onclick = mietabsenkungenPressed;
  document.getElementById("sofortprogramm").onclick = sofortprogrammPressed;

  document.getElementById("kappungsgrenzenCheckbox").checked = false;
  document.getElementById("mietobergrenzenCheckbox").checked = false;
  document.getElementById("mietabsenkungenCheckbox").checked = false;
  document.getElementById("sofortprogrammCheckbox").checked = false;

  document.getElementById("kappungsgrenzenCheckbox").addEventListener('change', e => {
    kappungsgrenzeToggled(e.target.checked);
  });
  document.getElementById("mietobergrenzenCheckbox").addEventListener('change', e => {
    mietobergrenzenToggled(e.target.checked);
  });
  document.getElementById("mietabsenkungenCheckbox").addEventListener('change', e => {
    mietabsenkungenToggled(e.target.checked);
  });
  document.getElementById("sofortprogrammCheckbox").addEventListener('change', e => {
    sofortProgrammToggled(e.target.checked);
  });
  document.getElementById("citySelector").addEventListener("change", citySelectorChanged);

  function citySelectorChanged(event) {
    const selectedCity = event.target.value;
    if (selectedCity === 'reset') {
      reset(true);
      return;
    }
    updateCitySelection(null, cities.find(city => city.name === selectedCity));
  };
  document.getElementById('modal-average-rent').onclick = () => {
    Swal.fire({
      title: 'Örtliche Durchschnittsmiete',
      html: '<p style="color: #545454;">In die Durchschnittsmiete fließen alle Mieten ein, anders als in den derzeitigen Mietspiegeln, die nur die Mietänderungen der vergangenen 6 Jahre berücksichtigen. Die Durchschnittsmiete liegt also in der Regel niedriger.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52741" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('modal-average-rent-top').onclick = () => {
    Swal.fire({
      title: 'Örtliche Durchschnittsmiete',
      html: '<p style="color: #545454;">In die Durchschnittsmiete fließen alle Mieten ein, anders als in den derzeitigen Mietspiegeln, die nur die Mietänderungen der vergangenen 6 Jahre berücksichtigen. Die Durchschnittsmiete liegt also in der Regel niedriger.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52741" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('modal-average-rent-senkung').onclick = () => {
    Swal.fire({
      title: 'Örtliche Durchschnittsmiete',
      html: '<p style="color: #545454;">In die Durchschnittsmiete fließen alle Mieten ein, anders als in den derzeitigen Mietspiegeln, die nur die Mietänderungen der vergangenen 6 Jahre berücksichtigen. Die Durchschnittsmiete liegt also in der Regel niedriger.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52741" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('modal-paper').onclick = () => {
    Swal.fire({
      title: 'Konzept für einen bundesweiten Mietendeckel',
      html: '<p style="color: #545454;">Diese Darstellung basiert auf einem Konzept das von Andrej Holm und Benjamin Raabe in ihrer Studie <a href="https://www.rosalux.de/publikation/id/44898/bundesweiter-mietendeckel-noetig-und-moeglich" target="_blank" rel="noopener noreferrer">' +
        '\"Bundesweiter Mietendeckel - Regelungsmöglichkeiten und Beitrag für eine soziale Wohnraumversorgung\"</a> erarbeitet wurde.<br>' +
        'Als Einführung in das Konzept haben die Autoren außerdem einen <a href="https://www.rosalux.de/publikation/id/45944" target="_blank" rel="noopener noreferrer">Standpunkte-Text</a> verfasst.</p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('first-angespannt').onclick = () => {
    Swal.fire({
      title: 'Angespannter Wohnungsmarkt',
      html: '<p style="color: #545454;">Die Bundesländer können Gebiete, in denen die Mieten besonders stark steigen und es an Wohnungen mangelt, als „angespannte Wohnungsmärkte“ festlegen. Dort gelten verschärfte Regeln für den Mieterschutz wie die Mietpreisbremse oder die abgesenkte Kappungsgrenze.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52740" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('second-angespannt').onclick = () => {
    Swal.fire({
      title: 'Angespannter Wohnungsmarkt',
      html: '<p style="color: #545454;">Die Bundesländer können Gebiete, in denen die Mieten besonders stark steigen und es an Wohnungen mangelt, als „angespannte Wohnungsmärkte“ festlegen. Dort gelten verschärfte Regeln für den Mieterschutz wie die Mietpreisbremse oder die abgesenkte Kappungsgrenze.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52740" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('mietpreisbremse').onclick = () => {
    Swal.fire({
      title: 'Mietpreisbremse',
      html: '<p style="color: #545454;">Seit dem diesem 2015 beschlossenen Gesetz dürfen Wohnungen nicht teurer als 10 Prozent über der örtlichen Referenzmiete vermietet werden. Ausgenommen sind Neubauten, umfassend modernisierte und Wohnungen, die schon vorher teurer vermietet wurden.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52744" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
  document.getElementById('wohnungsnotgebiete').onclick = () => {
    Swal.fire({
      title: 'Wohnungsnotgebiete',
      html: '<p style="color: #545454;">Die Mietendeckel-Studie schlägt vor, Städte und Gemeinden mit einer besonders gefährdeten Wohnungsversorgung als Wohnungsnotgebiete auszurufen. Dort soll ein besonders scharfes Mietrecht gelten, um die weitere Verdrängung von Menschen mit geringen Einkommen zu stoppen.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52749" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
      confirmButtonText: 'OK',
      confirmButtonColor: "#FF3300",
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    })
  };
});
