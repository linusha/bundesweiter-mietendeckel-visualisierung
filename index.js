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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.2
  },
  {
    "name": "Bochum",
    "marketCategory": 1,
    "active": false,
    "long": 7.12,
    "lat": 51.48,
    "marktMiete": 8.00,
    "bestandsMiete": 6.25,
    "mietspiegel": 5.71,
    "kappungsgrenze": 0.2
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
  },
  {
    "name": "Dortmund",
    "marketCategory": 2,
    "active": false,
    "long": 7.46,
    "lat": 51.51,
    "marktMiete": 8.90,
    "bestandsMiete": 6.45,
    "mietspiegel": 5.79,
    "kappungsgrenze": 0.2
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.2
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
  },
  {
    "name": "Essen",
    "marketCategory": 1,
    "active": false,
    "long": 7.01,
    "lat": 51.45,
    "marktMiete": 8.40,
    "bestandsMiete": 6.72,
    "mietspiegel": 6.24,
    "kappungsgrenze": 0.2
  },
  {
    "name": "Frankfurt am Main",
    "marketCategory": 2,
    "active": false,
    "long": 8.68,
    "lat": 50.11,
    "marktMiete": 17.19,
    "bestandsMiete": 10.58,
    "mietspiegel": 8.30,
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
  },
  {
    "name": "Hannover",
    "marketCategory": 2,
    "active": false,
    "long": 9.73,
    "lat": 52.37,
    "marktMiete": 10.47,
    "bestandsMiete": 7.61,
    "mietspiegel": 7.80,
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
  },
  {
    "name": "Rostock",
    "marketCategory": 2,
    "active": false,
    "long": 12.14,
    "lat": 54.08,
    "marktMiete": 10.05,
    "bestandsMiete": 6.70,
    "mietspiegel": 6.14,
    "kappungsgrenze": 0.15
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
    "kappungsgrenze": 0.15
  },
  {
    "name": "Wuppertal",
    "marketCategory": 2,
    "active": false,
    "long": 7.16,
    "lat": 50.77,
    "marktMiete": 7.77,
    "bestandsMiete": 6.10,
    "mietspiegel": 6.00,
    "kappungsgrenze": 0.2
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
  let partial = false;
  let full = false;
  let barScale = 5;
  let width = document.getElementById("customMietendeckelApplet").offsetWidth;
  let height = width / 0.625;
  let map, projection, path, g, tooltip, circleRadius, cityCircles, barWidth, marketBars, stopBars, averageBars, highestMarketBars;

  //////
  // Methods related to calculations and data
  //////
  function mietsenkungAuf(city) {
    if (mietabsenkungenActive) {
      return (city.bestandsMiete * 1.2).toFixed(2);
    }
    return 0;
  }

  function wiedervermietungsMiete(city) {
    if (mietobergrenzenActive) {
      if (city.marketCategory == 1) return (city.bestandsMiete * 1.1).toFixed(2)
      if (city.marketCategory == 2) return (city.bestandsMiete * 1.06).toFixed(2)
      if (city.marketCategory == 3) return (city.bestandsMiete).toFixed(2)
    }
    return city.marktMiete.toFixed(2);
  }

  //////
  // Methods related to the visualization
  //////

  function showHintNoSelectedCity() {
    document.getElementById("consequences").innerHTML = '<p id="tutorial" class="callout">Wähle eine Stadt aus, um zu sehen, wie Mieter*innen dort entlastet werden können.</p>'
  }

  function getConsequencesContent(cityData) {
    let introTag;
    introTag =
      `<p>Aktiviere eine oder mehrere der Maßnahmen des Mietendeckels, um zu sehen, wie sie Mieter*innen in ${cityData.name} entlastet.`;

    const statusString = () => {
      if (!sofortProgrammActive && !partial && !full) return " jetzt"
      if (sofortProgrammActive && !partial && !full) return " mit Sofortprogramm"
      if (partial && !full) return " mit teilweisem Mietendeckel"
      if (full) return " mit Mietendeckel"
    }
    let nameTag = "<h3>Lage in " + cityData.name + `${statusString()}:</h3>`

    let typeTag = () => {
      if (cityData.marketCategory == 1) return `<p class='in-box'>${cityData.name} hat einen nicht angespannten Wohnungsmarkt.</p>`
      if (cityData.marketCategory == 2) return `<p class='in-box'>${cityData.name} hat einen <strong style='color:#ff9e48'>angespannten Wohnungsmarkt.</strong></p>`
      if (cityData.marketCategory == 3) return `<p class='in-box'>In ${cityData.name} herrscht eine <strong style='color:#ff5e35'>Wohnungsnotlage</strong>.</p>`
    }

    let averageTag =
      `<p class='in-box'><span style='color:#018E06;'>●</span> Momentan beträgt die durchschnittliche Bestandsmiete: <b>` +
      cityData.bestandsMiete.toString().replace('.', ',') +
      "</b>€/m²</p>";
    // TODO: Add explanation why rents will forever increase
    let mieterhoehungsTag = () => {
      if (!sofortProgrammActive && !kappungsgrenzeActive) return `<p class='in-box'>Bei Mietverträgen mit einer Miete bis ${cityData.mietspiegel.toString().replaceAll('.', ',')}€/m², sind häufig Mietsteigerungen von bis zu <strong>${cityData.kappungsgrenze * 100}% in 3 Jahren</strong> möglich. So steigen die Mieten immer weiter.</p>`;
      if (sofortProgrammActive && !kappungsgrenzeActive && cityData.marketCategory > 1) return "<p class='in-box'>Mit einem temporären Mietenstopp durch das Sofortprogramm sind keine Mieterhöhungen im Bestand mehr möglich.</p>"
      if (sofortProgrammActive && !kappungsgrenzeActive && cityData.marketCategory == 1) return `<p class='in-box'>Durch das Sofortprogramm sind Mieterhöhungen im Bestand nur um 2% pro Jahr möglich, und auch nur bis maximal ${cityData.mietspiegel.toString().replaceAll('.', ',')}€/m².</p>`
      if (kappungsgrenzeActive && cityData.marketCategory == 1) return `<p class='in-box'>Durch den Mietendeckel sind Mieterhöhungen im Bestand auf 10% in 3 Jahren begrenzt, und auch nur bis maximal ${cityData.bestandsMiete.toString().replaceAll('.', ',')}€/m².</p>`
      if (kappungsgrenzeActive && cityData.marketCategory == 2) return `<p class='in-box'>Durch den Mietendeckel sind Mieterhöhungen im Bestand auf 6% in 3 Jahren begrenzt, und auch nur bis maximal ${cityData.bestandsMiete.toString().replaceAll('.', ',')}€/m².</p>`
      if (kappungsgrenzeActive && cityData.marketCategory == 3) return `<p class='in-box'>Durch den Mietendeckel sind keine Mieterhöhungen im Bestand mehr möglich.</p>`
    };

    let neuvermietungsText = "Durchschnittliche Miete bei neuen Verträgen"
    let neuvermietungsTag =
      `<p class='in-box'><span style='color:#0084FF;'>●</span> ${neuvermietungsText}: <b>` +
      wiedervermietungsMiete(cityData).toString().replace('.', ',') +
      "</b>€/m²</p>";

    let neuVermietungsExplainer = () => {
      if (mietobergrenzenActive && cityData.marketCategory == 1) return `<p class='in-box'>Durch den Mietendeckel dürfen die Mieten bei Vertragsschluss nur noch maximal 10% höher liegen als die örtliche Durchschnittsmiete von ${cityData.bestandsMiete.toString().replaceAll('.', ',')}€/m².</p>`
      if (mietobergrenzenActive && cityData.marketCategory == 2) return `<p class='in-box'>Durch den Mietendeckel dürfen die Mieten bei Vertragsschluss nur noch maximal 6% höher liegen als die örtliche Durchschnittsmiete von ${cityData.bestandsMiete.toString().replaceAll('.', ',')}€/m².</p>`
      if (mietobergrenzenActive && cityData.marketCategory == 3) return `<p class='in-box'>Durch den Mietendeckel dürfen die Mieten bei Vertragsschluss nicht höher liegen als die örtliche Durchschnittsmiete von ${cityData.bestandsMiete.toString().replaceAll('.', ',')}€/m².</p>`
      return '';
    }
    let bestandsMietenTag = () => {
      return `<p class='in-box'><span style='color:#FF3300;'>●</span> Die durchschnittliche maximal erlaubte Höchstmiete beträgt: <b>` +
        mietsenkungAuf(cityData).toString().replace('.', ',') +
        "</b>€/m²</p>" +
        "<p class='in-box'>Der Mietendeckel erlaubt es, höhere Miete auf diesen Betrag abzusenken. Durch eine Umsetzung über das Wirtschaftsstrafrecht, müssen Mieter*innen hierfür nicht selbst Klage einreichen.</p>";
    }

    return (
      nameTag +
      "<div class='numbers-container'>" +
      typeTag() +
      averageTag +
      mieterhoehungsTag() +
      neuvermietungsTag +
      neuVermietungsExplainer() +
      ((mietabsenkungenActive ? bestandsMietenTag() + "</div>" : "</div>")) +
      introTag
    );
  }

  function reset(calledFromUs) {
    if (!(calledFromUs === true) && document.getElementById("mapContainer").offsetWidth < 500) return;

    map.selectAll('.backgroundbox').remove()

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
    map.selectAll('.backgroundbox').remove()

    map.selectAll("text")
      .style("visibility", "hidden")

    const padding = 1;
    var xScopeFix; // var is important here, as we hack our way around the d3 scope below

    // General idea behind centered multi-line text:
    // Insert tspan elements inside of empty text
    // calculate width of the characters
    // center a box on the bar that fits the characters
    // center the characters inside of the box

    const avgText = averageBars
      .selectAll("text")
      .filter((d) => d.name == city.name)

    avgText.text('')
      .style("visibility", "visible")
      .style("font-size", "4pt")
      .style("font-weight", "bold")
      .style("fill", "#2b3240")
      .html(function (d) {
        return `<tspan x='0' y='${projection([d.long, d.lat])[1] - 10}'>` + d.bestandsMiete.toFixed(2).replace('.', ',') + `</tspan>`
          + `<tspan style="font-size:2pt" x='0' y='${projection([d.long, d.lat])[1] - 7}'>` + "⌀ in €/m²" + `</tspan>`;
      })

    let bbox = avgText.node().getBBox();
    averageBars.filter((d) => d.name == city.name)
      .insert("rect", "text")
      .attr("class", "backgroundbox")
      .attr("x", (d) => {
        // xpos - bar offset beginning + half a bar - half width of the box
        xScopeFix = projection([d.long, d.lat])[0] - (2 * barWidth - 5) + barWidth / 2 - (bbox.width + 2 * padding) / 2
        return xScopeFix
      })
      .attr("y", bbox.y - padding)
      .attr("width", bbox.width + (padding * 2))
      .attr("height", bbox.height + (padding * 2))
      .style("fill", "#018E06")
      .style("opacity", 0.8);

    avgText.selectAll('tspan')
      .attr("x", () => {
        return xScopeFix + padding
      })

    const marketText = marketBars
      .selectAll("text")
      .filter((d) => d.name == city.name)

    marketText.text('')
      .style("visibility", "visible")
      .style("font-size", "4pt")
      .style("font-weight", "bold")
      .style("fill", "#2b3240")
      .html(function (d) {
        return `<tspan y='${projection([d.long, d.lat])[1] - 23}' x='0'>` + wiedervermietungsMiete(d).toString().replace('.', ',') + `</tspan>`
          + `<tspan style="font-size:2pt" y='${projection([d.long, d.lat])[1] - 20}' x='0'>` + "⌀ in €/m²" + `</tspan>`;
      })

    bbox = marketText.node().getBBox();
    marketBars.filter((d) => d.name == city.name)
      .insert("rect", "text")
      .attr("class", "backgroundbox")
      .attr("x", (d) => {
        // xpos + half a bar - half width of the box
        xScopeFix = projection([d.long, d.lat])[0] + barWidth / 2 - (bbox.width + 2 * padding) / 2
        return xScopeFix
      })
      .attr("y", bbox.y - padding)
      .attr("width", bbox.width + (padding * 2))
      .attr("height", bbox.height + (padding * 2))
      .style("fill", "#0084ff")
      .style("opacity", 0.8);

    marketText.selectAll('tspan')
      .attr("x", () => {
        return xScopeFix + padding
      })

    const stopTexts = stopBars
      .selectAll("text")
      .filter((d) => d.name == city.name)

    if (mietabsenkungenActive) {
      stopTexts.text('')
        .style("font-weight", "bold")
        .style("visibility", "visible")
        .style("font-size", "4pt")
        .style("fill", "#2b3240")
        .html(function (d) {
          return `<tspan y='${projection([d.long, d.lat])[1] - 10}' x='0'>` + mietsenkungAuf(d).replace('.', ',') + `</tspan>`
            + `<tspan style="font-size:2pt" y='${projection([d.long, d.lat])[1] - 7}' x='0'>` + "in €/m²" + `</tspan>`;
        })

      bbox = stopTexts.node().getBBox();
      stopBars.filter((d) => d.name == city.name)
        .insert("rect", "text")
        .attr("class", "backgroundbox")
        .attr("x", (d) => {
          // xpos + bar offset beginning + half a bar - half width of the box
          xScopeFix = projection([d.long, d.lat])[0] + (barWidth + 5) + barWidth / 2 - (bbox.width + 2 * padding) / 2
          return xScopeFix
        })
        .attr("y", bbox.y - padding)
        .attr("width", bbox.width + (padding * 2))
        .attr("height", bbox.height + (padding * 2))
        .style("fill", "#ff3300")
        .style("opacity", 0.8)

      stopTexts.selectAll('tspan')
        .attr("x", () => {
          return xScopeFix + padding
        })
    }
  }

  function updateConsequences(city) {
    updateBarNumbers(city);
    document.getElementById("consequences").innerHTML = getConsequencesContent(city);
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
      .selectAll(".marketRect")
      .style("visibility", "hidden");
    map
      .selectAll(".highestMarketRect")
      .style("visibility", "hidden");
    map
      .selectAll(".stopRect")
      .style("visibility", "hidden");


    cityCircles
      .style("visibility", "hidden");

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
      .attr("height", (d) => mietsenkungAuf(d) * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - mietsenkungAuf(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".highestMarketRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => d.marktMiete * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - d.marktMiete * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    cityCircles
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .style("visibility", clickedData.active ? "hidden" : "visible");
  };

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
      .attr("fill", "#2b3240")
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
      .attr("x", (d) => projection([d.long, d.lat])[0] - (2 * barWidth - 5))
      .attr("y", (d) => projection([d.long, d.lat])[1])
      .attr("fill", "#018E06")
      .attr("visibility", "hidden")
      .on("mousedown", reset);

    averageBars
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
      .attr("x", (d) => projection([d.long, d.lat])[0] + barWidth + 5)
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

    if (mietabsenkungenActive || kappungsgrenzeActive || mietobergrenzenActive) partial = true
    else partial = false;
    if (mietabsenkungenActive && kappungsgrenzeActive && mietobergrenzenActive) {
      partial = false;
      full = true;
    } else full = false;

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

    if (mietabsenkungenActive || kappungsgrenzeActive || mietobergrenzenActive) partial = true
    else partial = false;

    if (mietabsenkungenActive && kappungsgrenzeActive && mietobergrenzenActive) {
      partial = false;
      full = true;
    } else full = false;

    map
      .selectAll(".stopRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => mietsenkungAuf(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - mietsenkungAuf(d) * barScale
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

    if (mietabsenkungenActive || kappungsgrenzeActive || mietobergrenzenActive) partial = true
    else partial = false;

    if (mietabsenkungenActive && kappungsgrenzeActive && mietobergrenzenActive) {
      partial = false;
      full = true;
    } else full = false;

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

    if (mietabsenkungenActive || kappungsgrenzeActive || mietobergrenzenActive) partial = true
    else partial = false;
    if (mietabsenkungenActive && kappungsgrenzeActive && mietobergrenzenActive) {
      partial = false;
      full = true;
    } else full = false;

    if (citySelected()) updateConsequences(selectedCity());
  }

  //////
  // Bootstrap Visualization
  //////
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  function resize(event) {
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

  //////
  // Modals
  //////

  Array.from(document.getElementsByClassName('referenzmiete')).forEach((e) => e.onclick = () => {
    Swal.fire({
      title: 'Örtliche Durchschnittsmiete',
      html: '<p style="color: #545454;">In die Durchschnittsmiete fließen alle Mieten ein, anders als in den derzeitigen Mietspiegeln, die nur die Mietänderungen der vergangenen 6 Jahre berücksichtigen. Die Durchschnittsmiete liegt also in der Regel niedriger.<br><p>',
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
  });

  Array.from(document.getElementsByClassName('angespannt')).forEach((e) => e.onclick = () => {
    Swal.fire({
      title: 'Angespannter Wohnungsmarkt',
      html: '<p style="color: #545454;">Die Bundesländer können Gebiete, in denen die Mieten besonders stark steigen und es an Wohnungen mangelt, als „angespannte Wohnungsmärkte“ festlegen. Dort gelten verschärfte Regeln für den Mieterschutz wie die Mietpreisbremse oder die abgesenkte Kappungsgrenze.<br><p>',
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
  });

  // TODO: adapt text
  Array.from(document.getElementsByClassName('nichtangespannt')).forEach((e) => e.onclick = () => {
    Swal.fire({
      title: 'Wohnungsnotgebiete',
      html: '<p style="color: #545454;">Die Mietendeckel-Studie schlägt vor, Städte und Gemeinden mit einer besonders gefährdeten Wohnungsversorgung als Wohnungsnotgebiete auszurufen. Dort soll ein besonders scharfes Mietrecht gelten, um die weitere Verdrängung von Menschen mit geringen Einkommen zu stoppen.<br><p>',
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
  });

  // TODO: adapt text
  Array.from(document.getElementsByClassName('wohnungsnotlage')).forEach((e) => e.onclick = () => {
    Swal.fire({
      title: 'Wohnungsnotgebiete',
      html: '<p style="color: #545454;">Die Mietendeckel-Studie schlägt vor, Städte und Gemeinden mit einer besonders gefährdeten Wohnungsversorgung als Wohnungsnotgebiete auszurufen. Dort soll ein besonders scharfes Mietrecht gelten, um die weitere Verdrängung von Menschen mit geringen Einkommen zu stoppen.<br><p>',
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
  });
});
