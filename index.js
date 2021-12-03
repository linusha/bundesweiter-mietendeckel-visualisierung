// Code partially from d3-graph-gallery.com
// https://www.d3-graph-gallery.com/graph/backgroundmap_country.html
// https://bl.ocks.org/mbostock/4699541 [GPLv3]

import * as d3 from "d3";

let active = d3.select(null);

function arraySum(array) {
  return array.reduce((accumVariable, curValue) => accumVariable + curValue, 0);
}
// marketCategory:
// 1 - balanced market
// 2 - strained market
// 3 - distress market
// for balanced markets is maximalRent == increasedRent
let cities = [
  {
    "name": "Bochum",
    "marketCategory": 1,
    "active": false,
    "long": 7.12,
    "lat": 51.48,
    "marktMiete": 6.66,
    "bestandsMiete": 5.74,
    "kappungIst": 7.06,
    "kappungSoll": 6.89,
    "kappungSollNot": 6.89,
    "wiedervermietungIst": 6.66,
    "wiedervermietungSoll": 6.66,
    "wiedervermietungSollNot": 6.66,
    "mietsenkungSoll": 5.67,
    "mietsenkungSollNot": 5.67,
    "geschütztKappung": 2182,
    "geschütztKappungNot": 2182,
    "leistbarkeitsdifferenzKappung": 233,
    "geschütztMietsenkung": 2281,
    "geschütztMietsenkungNot": 2281,
    "leistbarkeitsdifferenzMietsenkung": 152,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 112132
  },
  {
    "name": "Chemnitz",
    "marketCategory": 1,
    "active": false,
    "long": 12.92,
    "lat": 50.83,
    "marktMiete": 4.97,
    "bestandsMiete": 5.02,
    "kappungIst": 6.23,
    "kappungSoll": 6.02,
    "kappungSollNot": 6.02,
    "wiedervermietungIst": 4.97,
    "wiedervermietungSoll": 4.97,
    "wiedervermietungSollNot": 4.97,
    "mietsenkungSoll": 4.95,
    "mietsenkungSollNot": 4.95,
    "geschütztKappung": 2238,
    "geschütztKappungNot": 2238,
    "leistbarkeitsdifferenzKappung": 140,
    "geschütztMietsenkung": 2149,
    "geschütztMietsenkungNot": 2149,
    "leistbarkeitsdifferenzMietsenkung": 89,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 94978
  },
  {
    "name": "Dortmund",
    "marketCategory": 1,
    "active": false,
    "long": 7.46,
    "lat": 51.51,
    "marktMiete": 6.88,
    "bestandsMiete": 5.72,
    "kappungIst": 6.73,
    "kappungSoll": 6.86,
    "kappungSollNot": 6.86,
    "wiedervermietungIst": 6.88,
    "wiedervermietungSoll": 6.88,
    "wiedervermietungSollNot": 6.88,
    "mietsenkungSoll": 5.64,
    "mietsenkungSollNot": 5.64,
    "geschütztKappung": 2372,
    "geschütztKappungNot": 2372,
    "leistbarkeitsdifferenzKappung": 209,
    "geschütztMietsenkung": 4593,
    "geschütztMietsenkungNot": 4593,
    "leistbarkeitsdifferenzMietsenkung": 154,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 192054
  },
  {
    "name": "Duisburg",
    "marketCategory": 1,
    "active": false,
    "long": 6.76,
    "lat": 51.43,
    "marktMiete": 5.9,
    "bestandsMiete": 5.53,
    "kappungIst": 7.06,
    "kappungSoll": 6.64,
    "kappungSollNot": 6.64,
    "wiedervermietungIst": 5.9,
    "wiedervermietungSoll": 5.9,
    "wiedervermietungSollNot": 5.9,
    "mietsenkungSoll": 5.56,
    "mietsenkungSollNot": 5.56,
    "geschütztKappung": 2386,
    "geschütztKappungNot": 2386,
    "leistbarkeitsdifferenzKappung": 214,
    "geschütztMietsenkung": 2643,
    "geschütztMietsenkungNot": 2643,
    "leistbarkeitsdifferenzMietsenkung": 145,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 162263
  },
  {
    "name": "Erfurt",
    "marketCategory": 1,
    "active": false,
    "long": 11.03,
    "lat": 50.97,
    "marktMiete": 7.13,
    "bestandsMiete": 5.83,
    "kappungIst": 7.81,
    "kappungSoll": 7,
    "kappungSollNot": 7,
    "wiedervermietungIst": 7.13,
    "wiedervermietungSoll": 7.13,
    "wiedervermietungSollNot": 7.13,
    "mietsenkungSoll": 5.7,
    "mietsenkungSollNot": 5.7,
    "geschütztKappung": 7397,
    "geschütztKappungNot": 7397,
    "leistbarkeitsdifferenzKappung": 201,
    "geschütztMietsenkung": 2044,
    "geschütztMietsenkungNot": 2044,
    "leistbarkeitsdifferenzMietsenkung": 118,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 74062
  },
  {
    "name": "Essen",
    "marketCategory": 1,
    "active": false,
    "long": 7.01,
    "lat": 51.45,
    "marktMiete": 6.85,
    "bestandsMiete": 6.08,
    "kappungIst": 8.3,
    "kappungSoll": 7.3,
    "kappungSollNot": 7.3,
    "wiedervermietungIst": 6.85,
    "wiedervermietungSoll": 6.85,
    "wiedervermietungSollNot": 6.85,
    "mietsenkungSoll": 5.97,
    "mietsenkungSollNot": 5.97,
    "geschütztKappung": 16674,
    "geschütztKappungNot": 16674,
    "leistbarkeitsdifferenzKappung": 267,
    "geschütztMietsenkung": 4371,
    "geschütztMietsenkungNot": 4371,
    "leistbarkeitsdifferenzMietsenkung": 161,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 198670
  },
  {
    "name": "Gelsenkirchen",
    "marketCategory": 1,
    "active": false,
    "long": 7.12,
    "lat": 51.5,
    "marktMiete": 5.72,
    "bestandsMiete": 5.04,
    "kappungIst": 6.81,
    "kappungSoll": 6.05,
    "kappungSollNot": 6.05,
    "wiedervermietungIst": 5.72,
    "wiedervermietungSoll": 5.72,
    "wiedervermietungSollNot": 5.72,
    "mietsenkungSoll": 4.93,
    "mietsenkungSollNot": 4.93,
    "geschütztKappung": 4812,
    "geschütztKappungNot": 4812,
    "leistbarkeitsdifferenzKappung": 193,
    "geschütztMietsenkung": 2420,
    "geschütztMietsenkungNot": 2420,
    "leistbarkeitsdifferenzMietsenkung": 129,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 86273
  },
  {
    "name": "Hamm",
    "marketCategory": 1,
    "active": false,
    "long": 7.82,
    "lat": 51.68,
    "marktMiete": 5.94,
    "bestandsMiete": 5.49,
    "kappungIst": 7.14,
    "kappungSoll": 6.59,
    "kappungSollNot": 6.59,
    "wiedervermietungIst": 5.94,
    "wiedervermietungSoll": 5.94,
    "wiedervermietungSollNot": 5.94,
    "mietsenkungSoll": 5.19,
    "mietsenkungSollNot": 5.19,
    "geschütztKappung": 3193,
    "geschütztKappungNot": 3193,
    "leistbarkeitsdifferenzKappung": 250,
    "geschütztMietsenkung": 1656,
    "geschütztMietsenkungNot": 1656,
    "leistbarkeitsdifferenzMietsenkung": 159,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 41322
  },
  {
    "name": "Krefeld",
    "marketCategory": 1,
    "active": false,
    "long": 6.58,
    "lat": 51.33,
    "marktMiete": 6.61,
    "bestandsMiete": 5.9,
    "kappungIst": 7.31,
    "kappungSoll": 7.08,
    "kappungSollNot": 7.08,
    "wiedervermietungIst": 6.61,
    "wiedervermietungSoll": 6.61,
    "wiedervermietungSollNot": 6.61,
    "mietsenkungSoll": 5.68,
    "mietsenkungSollNot": 5.68,
    "geschütztKappung": 2417,
    "geschütztKappungNot": 2417,
    "leistbarkeitsdifferenzKappung": 246,
    "geschütztMietsenkung": 2038,
    "geschütztMietsenkungNot": 2038,
    "leistbarkeitsdifferenzMietsenkung": 153,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 59916
  },
  {
    "name": "Mönchengladbach",
    "marketCategory": 1,
    "active": false,
    "long": 6.44,
    "lat": 51.18,
    "marktMiete": 6.41,
    "bestandsMiete": 5.97,
    "kappungIst": 7.14,
    "kappungSoll": 7.16,
    "kappungSollNot": 7.16,
    "wiedervermietungIst": 6.41,
    "wiedervermietungSoll": 6.41,
    "wiedervermietungSollNot": 6.41,
    "mietsenkungSoll": 5.78,
    "mietsenkungSollNot": 5.78,
    "geschütztKappung": 1115,
    "geschütztKappungNot": 1115,
    "leistbarkeitsdifferenzKappung": 248,
    "geschütztMietsenkung": 1017,
    "geschütztMietsenkungNot": 1017,
    "leistbarkeitsdifferenzMietsenkung": 166,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 59338
  },
  {
    "name": "Mühlheim an der Ruhr",
    "marketCategory": 1,
    "active": false,
    "long": 8.83,
    "lat": 50.11,
    "marktMiete": 6.65,
    "bestandsMiete": 6.23,
    "kappungIst": 7.81,
    "kappungSoll": 7.48,
    "kappungSollNot": 7.48,
    "wiedervermietungIst": 6.65,
    "wiedervermietungSoll": 6.65,
    "wiedervermietungSollNot": 6.65,
    "mietsenkungSoll": 6.15,
    "mietsenkungSollNot": 6.15,
    "geschütztKappung": 1133,
    "geschütztKappungNot": 1133,
    "leistbarkeitsdifferenzKappung": 256,
    "geschütztMietsenkung": 416,
    "geschütztMietsenkungNot": 416,
    "leistbarkeitsdifferenzMietsenkung": 158,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 49470
  },
  {
    "name": "Oberhausen",
    "marketCategory": 1,
    "active": false,
    "long": 6.88,
    "lat": 51.47,
    "marktMiete": 6.02,
    "bestandsMiete": 5.27,
    "kappungIst": 6.98,
    "kappungSoll": 6.32,
    "kappungSollNot": 6.32,
    "wiedervermietungIst": 6.02,
    "wiedervermietungSoll": 6.02,
    "wiedervermietungSollNot": 6.02,
    "mietsenkungSoll": 5.15,
    "mietsenkungSollNot": 5.15,
    "geschütztKappung": 3758,
    "geschütztKappungNot": 3758,
    "leistbarkeitsdifferenzKappung": 224,
    "geschütztMietsenkung": 1866,
    "geschütztMietsenkungNot": 1866,
    "leistbarkeitsdifferenzMietsenkung": 144,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 61800
  },
  {
    "name": "Rostock",
    "marketCategory": 1,
    "active": false,
    "long": 12.14,
    "lat": 54.08,
    "marktMiete": 6.71,
    "bestandsMiete": 6.1,
    "kappungIst": 7.72,
    "kappungSoll": 7.32,
    "kappungSollNot": 7.32,
    "wiedervermietungIst": 6.71,
    "wiedervermietungSoll": 6.71,
    "wiedervermietungSollNot": 6.71,
    "mietsenkungSoll": 5.78,
    "mietsenkungSollNot": 5.78,
    "geschütztKappung": 23549,
    "geschütztKappungNot": 23549,
    "leistbarkeitsdifferenzKappung": 293,
    "geschütztMietsenkung": 1903,
    "geschütztMietsenkungNot": 1903,
    "leistbarkeitsdifferenzMietsenkung": 135,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 95719
  },
  {
    "name": "Wuppertal",
    "marketCategory": 1,
    "active": false,
    "long": 7.16,
    "lat": 50.77,
    "marktMiete": 6.18,
    "bestandsMiete": 5.74,
    "kappungIst": 7.06,
    "kappungSoll": 6.89,
    "kappungSollNot": 6.89,
    "wiedervermietungIst": 6.18,
    "wiedervermietungSoll": 6.18,
    "wiedervermietungSollNot": 6.18,
    "mietsenkungSoll": 5.6,
    "mietsenkungSollNot": 5.6,
    "geschütztKappung": 3987,
    "geschütztKappungNot": 3987,
    "leistbarkeitsdifferenzKappung": 214,
    "geschütztMietsenkung": 2130,
    "geschütztMietsenkungNot": 2130,
    "leistbarkeitsdifferenzMietsenkung": 154,
    "geschütztWiedervermietung": 0,
    "geschütztWiedervermietungNot": 0,
    "leistbarkeitsDifferenzWiedervermietung": 0,
    "haushalte": 101941
  },
  {
    "name": "Aachen",
    "marketCategory": 2,
    "active": false,
    "long": 6.08,
    "lat": 50.77,
    "marktMiete": 8.31,
    "bestandsMiete": 6.85,
    "kappungIst": 8.04,
    "kappungSoll": 6.95,
    "kappungSollNot": 6.95,
    "wiedervermietungIst": 7.69,
    "wiedervermietungSoll": 7.53,
    "wiedervermietungSollNot": 7.53,
    "mietsenkungSoll": 6.67,
    "mietsenkungSollNot": 6.67,
    "geschütztKappung": 3333,
    "geschütztKappungNot": 3333,
    "leistbarkeitsdifferenzKappung": 256,
    "geschütztMietsenkung": 3521,
    "geschütztMietsenkungNot": 3521,
    "leistbarkeitsdifferenzMietsenkung": 170,
    "geschütztWiedervermietung": 5043,
    "geschütztWiedervermietungNot": 5043,
    "leistbarkeitsDifferenzWiedervermietung": 257,
    "haushalte": 79119
  },
  {
    "name": "Bonn",
    "marketCategory": 2,
    "active": false,
    "long": 7.09,
    "lat": 50.73,
    "marktMiete": 9.44,
    "bestandsMiete": 7.93,
    "kappungIst": 8.91,
    "kappungSoll": 8.04,
    "kappungSollNot": 8.04,
    "wiedervermietungIst": 8.53,
    "wiedervermietungSoll": 8.72,
    "wiedervermietungSollNot": 8.72,
    "mietsenkungSoll": 7.76,
    "mietsenkungSollNot": 7.76,
    "geschütztKappung": 5928,
    "geschütztKappungNot": 5928,
    "leistbarkeitsdifferenzKappung": 287,
    "geschütztMietsenkung": 2031,
    "geschütztMietsenkungNot": 2031,
    "leistbarkeitsdifferenzMietsenkung": 207,
    "geschütztWiedervermietung": 4833,
    "geschütztWiedervermietungNot": 4833,
    "leistbarkeitsDifferenzWiedervermietung": 278,
    "haushalte": 90619
  },
  {
    "name": "Braunschweig",
    "marketCategory": 2,
    "active": false,
    "long": 10.52,
    "lat": 52.26,
    "marktMiete": 7.99,
    "bestandsMiete": 6.24,
    "kappungIst": 6.92,
    "kappungSoll": 6.33,
    "kappungSollNot": 6.33,
    "wiedervermietungIst": 6.62,
    "wiedervermietungSoll": 6.86,
    "wiedervermietungSollNot": 6.86,
    "mietsenkungSoll": 6.18,
    "mietsenkungSollNot": 6.18,
    "geschütztKappung": 4197,
    "geschütztKappungNot": 4197,
    "leistbarkeitsdifferenzKappung": 206,
    "geschütztMietsenkung": 2166,
    "geschütztMietsenkungNot": 2166,
    "leistbarkeitsdifferenzMietsenkung": 149,
    "geschütztWiedervermietung": -297,
    "geschütztWiedervermietungNot": -297,
    "leistbarkeitsDifferenzWiedervermietung": 197,
    "haushalte": 76599
  },
  {
    "name": "Dresden",
    "marketCategory": 2,
    "active": false,
    "long": 13.73,
    "lat": 51.05,
    "marktMiete": 7.17,
    "bestandsMiete": 6.12,
    "kappungIst": 7.16,
    "kappungSoll": 6.21,
    "kappungSollNot": 6.21,
    "wiedervermietungIst": 6.85,
    "wiedervermietungSoll": 6.73,
    "wiedervermietungSollNot": 6.73,
    "mietsenkungSoll": 6.08,
    "mietsenkungSollNot": 6.08,
    "geschütztKappung": 15931,
    "geschütztKappungNot": 15931,
    "leistbarkeitsdifferenzKappung": 176,
    "geschütztMietsenkung": 4198,
    "geschütztMietsenkungNot": 4198,
    "leistbarkeitsdifferenzMietsenkung": 130,
    "geschütztWiedervermietung": 17597,
    "geschütztWiedervermietungNot": 17597,
    "leistbarkeitsDifferenzWiedervermietung": 164,
    "haushalte": 216632
  },
  {
    "name": "Düsseldorf",
    "marketCategory": 2,
    "active": false,
    "long": 6.77,
    "lat": 51.22,
    "marktMiete": 10.09,
    "bestandsMiete": 7.94,
    "kappungIst": 9.63,
    "kappungSoll": 8.05,
    "kappungSollNot": 8.05,
    "wiedervermietungIst": 9.21,
    "wiedervermietungSoll": 8.73,
    "wiedervermietungSollNot": 8.73,
    "mietsenkungSoll": 7.83,
    "mietsenkungSollNot": 7.83,
    "geschütztKappung": 10829,
    "geschütztKappungNot": 10829,
    "leistbarkeitsdifferenzKappung": 314,
    "geschütztMietsenkung": 10402,
    "geschütztMietsenkungNot": 10402,
    "leistbarkeitsdifferenzMietsenkung": 203,
    "geschütztWiedervermietung": 21804,
    "geschütztWiedervermietungNot": 21804,
    "leistbarkeitsDifferenzWiedervermietung": 314,
    "haushalte": 219382
  },
  {
    "name": "Hannover",
    "marketCategory": 2,
    "active": false,
    "long": 9.73,
    "lat": 52.37,
    "marktMiete": 8.85,
    "bestandsMiete": 6.6,
    "kappungIst": 7.4,
    "kappungSoll": 6.7,
    "kappungSollNot": 6.7,
    "wiedervermietungIst": 7.08,
    "wiedervermietungSoll": 7.26,
    "wiedervermietungSollNot": 7.26,
    "mietsenkungSoll": 6.45,
    "mietsenkungSollNot": 6.45,
    "geschütztKappung": 9501,
    "geschütztKappungNot": 9501,
    "leistbarkeitsdifferenzKappung": 230,
    "geschütztMietsenkung": 4579,
    "geschütztMietsenkungNot": 4579,
    "leistbarkeitsdifferenzMietsenkung": 171,
    "geschütztWiedervermietung": 214,
    "geschütztWiedervermietungNot": 214,
    "leistbarkeitsDifferenzWiedervermietung": 208,
    "haushalte": 185086
  },
  {
    "name": "Karlsruhe",
    "marketCategory": 2,
    "active": false,
    "long": 8.4,
    "lat": 49,
    "marktMiete": 10.1,
    "bestandsMiete": 6.73,
    "kappungIst": 8.75,
    "kappungSoll": 6.83,
    "kappungSollNot": 6.83,
    "wiedervermietungIst": 8.37,
    "wiedervermietungSoll": 7.4,
    "wiedervermietungSollNot": 7.4,
    "mietsenkungSoll": 6.7,
    "mietsenkungSollNot": 6.7,
    "geschütztKappung": 8163,
    "geschütztKappungNot": 8163,
    "leistbarkeitsdifferenzKappung": 292,
    "geschütztMietsenkung": 3918,
    "geschütztMietsenkungNot": 3918,
    "leistbarkeitsdifferenzMietsenkung": 186,
    "geschütztWiedervermietung": 12378,
    "geschütztWiedervermietungNot": 12378,
    "leistbarkeitsDifferenzWiedervermietung": 274,
    "haushalte": 87423
  },
  {
    "name": "Kiel",
    "marketCategory": 2,
    "active": false,
    "long": 10.13,
    "lat": 54.32,
    "marktMiete": 7.88,
    "bestandsMiete": 6.87,
    "kappungIst": 7.32,
    "kappungSoll": 6.97,
    "kappungSollNot": 6.97,
    "wiedervermietungIst": 7,
    "wiedervermietungSoll": 7.56,
    "wiedervermietungSollNot": 7.56,
    "mietsenkungSoll": 6.74,
    "mietsenkungSollNot": 6.74,
    "geschütztKappung": 3199,
    "geschütztKappungNot": 3199,
    "leistbarkeitsdifferenzKappung": 212,
    "geschütztMietsenkung": 2282,
    "geschütztMietsenkungNot": 2282,
    "leistbarkeitsdifferenzMietsenkung": 163,
    "geschütztWiedervermietung": 595,
    "geschütztWiedervermietungNot": 595,
    "leistbarkeitsDifferenzWiedervermietung": 198,
    "haushalte": 80994
  },
  {
    "name": "Leipzig",
    "marketCategory": 2,
    "active": false,
    "long": 12.37,
    "lat": 51.33,
    "marktMiete": 6.19,
    "bestandsMiete": 5.44,
    "kappungIst": 5.73,
    "kappungSoll": 5.52,
    "kappungSollNot": 5.52,
    "wiedervermietungIst": 5.48,
    "wiedervermietungSoll": 5.98,
    "wiedervermietungSollNot": 5.98,
    "mietsenkungSoll": 5.32,
    "mietsenkungSollNot": 5.32,
    "geschütztKappung": 12997,
    "geschütztKappungNot": 12997,
    "leistbarkeitsdifferenzKappung": 131,
    "geschütztMietsenkung": 8516,
    "geschütztMietsenkungNot": 8516,
    "leistbarkeitsdifferenzMietsenkung": 105,
    "geschütztWiedervermietung": 10473,
    "geschütztWiedervermietungNot": 10473,
    "leistbarkeitsDifferenzWiedervermietung": 128,
    "haushalte": 231582
  },
  {
    "name": "Leverkusen",
    "marketCategory": 2,
    "active": false,
    "long": 6.98,
    "lat": 51.03,
    "marktMiete": 7.6,
    "bestandsMiete": 6.31,
    "kappungIst": 7.56,
    "kappungSoll": 6.4,
    "kappungSollNot": 6.4,
    "wiedervermietungIst": 7.23,
    "wiedervermietungSoll": 6.94,
    "wiedervermietungSollNot": 6.94,
    "mietsenkungSoll": 6.25,
    "mietsenkungSollNot": 6.25,
    "geschütztKappung": 2102,
    "geschütztKappungNot": 2102,
    "leistbarkeitsdifferenzKappung": 236,
    "geschütztMietsenkung": 632,
    "geschütztMietsenkungNot": 632,
    "leistbarkeitsdifferenzMietsenkung": 161,
    "geschütztWiedervermietung": 1764,
    "geschütztWiedervermietungNot": 1764,
    "leistbarkeitsDifferenzWiedervermietung": 218,
    "haushalte": 44262
  },
  {
    "name": "Lübeck",
    "marketCategory": 2,
    "active": false,
    "long": 10.68,
    "lat": 53.86,
    "marktMiete": 8.05,
    "bestandsMiete": 6.53,
    "kappungIst": 7.64,
    "kappungSoll": 6.62,
    "kappungSollNot": 6.62,
    "wiedervermietungIst": 7.31,
    "wiedervermietungSoll": 7.18,
    "wiedervermietungSollNot": 7.18,
    "mietsenkungSoll": 6.36,
    "mietsenkungSollNot": 6.36,
    "geschütztKappung": 3462,
    "geschütztKappungNot": 3462,
    "leistbarkeitsdifferenzKappung": 228,
    "geschütztMietsenkung": 1546,
    "geschütztMietsenkungNot": 1546,
    "leistbarkeitsdifferenzMietsenkung": 171,
    "geschütztWiedervermietung": 3677,
    "geschütztWiedervermietungNot": 3677,
    "leistbarkeitsDifferenzWiedervermietung": 216,
    "haushalte": 66237
  },
  {
    "name": "Ludwigshafen am Rhein",
    "marketCategory": 2,
    "active": false,
    "long": 8.44,
    "lat": 49.48,
    "marktMiete": 8.27,
    "bestandsMiete": 6.22,
    "kappungIst": 7.32,
    "kappungSoll": 6.31,
    "kappungSollNot": 6.31,
    "wiedervermietungIst": 7,
    "wiedervermietungSoll": 6.84,
    "wiedervermietungSollNot": 6.84,
    "mietsenkungSoll": 6.12,
    "mietsenkungSollNot": 6.12,
    "geschütztKappung": 2619,
    "geschütztKappungNot": 2619,
    "leistbarkeitsdifferenzKappung": 223,
    "geschütztMietsenkung": 529,
    "geschütztMietsenkungNot": 529,
    "leistbarkeitsdifferenzMietsenkung": 163,
    "geschütztWiedervermietung": 314,
    "geschütztWiedervermietungNot": 314,
    "leistbarkeitsDifferenzWiedervermietung": 209,
    "haushalte": 41289
  },
  {
    "name": "Mannheim",
    "marketCategory": 2,
    "active": false,
    "long": 8.47,
    "lat": 49.49,
    "marktMiete": 9.04,
    "bestandsMiete": 6.99,
    "kappungIst": 8.2,
    "kappungSoll": 7.09,
    "kappungSollNot": 7.09,
    "wiedervermietungIst": 7.84,
    "wiedervermietungSoll": 7.69,
    "wiedervermietungSollNot": 7.69,
    "mietsenkungSoll": 6.76,
    "mietsenkungSollNot": 6.76,
    "geschütztKappung": 5996,
    "geschütztKappungNot": 5996,
    "leistbarkeitsdifferenzKappung": 262,
    "geschütztMietsenkung": 2076,
    "geschütztMietsenkungNot": 2076,
    "leistbarkeitsdifferenzMietsenkung": 183,
    "geschütztWiedervermietung": 7234,
    "geschütztWiedervermietungNot": 7234,
    "leistbarkeitsDifferenzWiedervermietung": 263,
    "haushalte": 93868
  },
  {
    "name": "Münster",
    "marketCategory": 2,
    "active": false,
    "long": 7.62,
    "lat": 51.96,
    "marktMiete": 9.54,
    "bestandsMiete": 7.89,
    "kappungIst": 7.88,
    "kappungSoll": 8,
    "kappungSollNot": 8,
    "wiedervermietungIst": 7.54,
    "wiedervermietungSoll": 8.68,
    "wiedervermietungSollNot": 8.68,
    "mietsenkungSoll": 7.71,
    "mietsenkungSollNot": 7.71,
    "geschütztKappung": 3781,
    "geschütztKappungNot": 3781,
    "leistbarkeitsdifferenzKappung": 259,
    "geschütztMietsenkung": 3484,
    "geschütztMietsenkungNot": 3484,
    "leistbarkeitsdifferenzMietsenkung": 196,
    "geschütztWiedervermietung": 2637,
    "geschütztWiedervermietungNot": 2637,
    "leistbarkeitsDifferenzWiedervermietung": 265,
    "haushalte": 86397
  },
  {
    "name": "Nürnberg",
    "marketCategory": 2,
    "active": false,
    "long": 11.07,
    "lat": 49.45,
    "marktMiete": 9.19,
    "bestandsMiete": 7.04,
    "kappungIst": 9.07,
    "kappungSoll": 7.14,
    "kappungSollNot": 7.14,
    "wiedervermietungIst": 8.68,
    "wiedervermietungSoll": 7.74,
    "wiedervermietungSollNot": 7.74,
    "mietsenkungSoll": 6.71,
    "mietsenkungSollNot": 6.71,
    "geschütztKappung": 11369,
    "geschütztKappungNot": 11369,
    "leistbarkeitsdifferenzKappung": 284,
    "geschütztMietsenkung": 5112,
    "geschütztMietsenkungNot": 5112,
    "leistbarkeitsdifferenzMietsenkung": 168,
    "geschütztWiedervermietung": 22219,
    "geschütztWiedervermietungNot": 22219,
    "leistbarkeitsDifferenzWiedervermietung": 286,
    "haushalte": 146766
  },
  {
    "name": "Potsdam",
    "marketCategory": 2,
    "active": false,
    "long": 13.06,
    "lat": 52.39,
    "marktMiete": 9,
    "bestandsMiete": 6.98,
    "kappungIst": 7.32,
    "kappungSoll": 7.08,
    "kappungSollNot": 7.08,
    "wiedervermietungIst": 7,
    "wiedervermietungSoll": 7.68,
    "wiedervermietungSollNot": 7.68,
    "mietsenkungSoll": 6.67,
    "mietsenkungSollNot": 6.67,
    "geschütztKappung": 5168,
    "geschütztKappungNot": 5168,
    "leistbarkeitsdifferenzKappung": 217,
    "geschütztMietsenkung": 2301,
    "geschütztMietsenkungNot": 2301,
    "leistbarkeitsdifferenzMietsenkung": 158,
    "geschütztWiedervermietung": 6126,
    "geschütztWiedervermietungNot": 6126,
    "leistbarkeitsDifferenzWiedervermietung": 233,
    "haushalte": 64357
  },
  {
    "name": "Wiesbaden",
    "marketCategory": 2,
    "active": false,
    "long": 8.24,
    "lat": 50.08,
    "marktMiete": 10.08,
    "bestandsMiete": 8.21,
    "kappungIst": 9.87,
    "kappungSoll": 8.33,
    "kappungSollNot": 8.33,
    "wiedervermietungIst": 9.44,
    "wiedervermietungSoll": 9.03,
    "wiedervermietungSollNot": 9.03,
    "mietsenkungSoll": 8.08,
    "mietsenkungSollNot": 8.08,
    "geschütztKappung": 6134,
    "geschütztKappungNot": 6134,
    "leistbarkeitsdifferenzKappung": 334,
    "geschütztMietsenkung": 1094,
    "geschütztMietsenkungNot": 1094,
    "leistbarkeitsdifferenzMietsenkung": 217,
    "geschütztWiedervermietung": 5260,
    "geschütztWiedervermietungNot": 5260,
    "leistbarkeitsDifferenzWiedervermietung": 320,
    "haushalte": 82690
  },
  {
    "name": "Berlin",
    "marketCategory": 3,
    "active": false,
    "long": 13.41,
    "lat": 52.52,
    "marktMiete": 10.19,
    "bestandsMiete": 6.68,
    "kappungIst": 8.06,
    "kappungSoll": 6.78,
    "kappungSollNot": 6.68,
    "wiedervermietungIst": 7.71,
    "wiedervermietungSoll": 7.35,
    "wiedervermietungSollNot": 6.68,
    "mietsenkungSoll": 6.65,
    "mietsenkungSollNot": 7.24,
    "geschütztKappung": 94790,
    "geschütztKappungNot": 227106,
    "leistbarkeitsdifferenzKappung": 225,
    "geschütztMietsenkung": 52467,
    "geschütztMietsenkungNot": 123810,
    "leistbarkeitsdifferenzMietsenkung": 164,
    "geschütztWiedervermietung": 186773,
    "geschütztWiedervermietungNot": 227106,
    "leistbarkeitsDifferenzWiedervermietung": 246,
    "haushalte": 1374537
  },
  {
    "name": "Bielefeld",
    "marketCategory": 3,
    "active": false,
    "long": 8.53,
    "lat": 52.03,
    "marktMiete": 7.24,
    "bestandsMiete": 6.19,
    "kappungIst": 7.64,
    "kappungSoll": 6.28,
    "kappungSollNot": 6.19,
    "wiedervermietungIst": 7.31,
    "wiedervermietungSoll": 6.81,
    "wiedervermietungSollNot": 6.19,
    "mietsenkungSoll": 6.05,
    "mietsenkungSollNot": 5.56,
    "geschütztKappung": 6004,
    "geschütztKappungNot": 12364,
    "leistbarkeitsdifferenzKappung": 244,
    "geschütztMietsenkung": 3512,
    "geschütztMietsenkungNot": 9161,
    "leistbarkeitsdifferenzMietsenkung": 165,
    "geschütztWiedervermietung": 11033,
    "geschütztWiedervermietungNot": 12364,
    "leistbarkeitsDifferenzWiedervermietung": 237,
    "haushalte": 87434
  },
  {
    "name": "Frankfurt am Main",
    "marketCategory": 3,
    "active": false,
    "long": 8.68,
    "lat": 50.11,
    "marktMiete": 12.72,
    "bestandsMiete": 8.82,
    "kappungIst": 9.71,
    "kappungSoll": 8.95,
    "kappungSollNot": 8.82,
    "wiedervermietungIst": 9.29,
    "wiedervermietungSoll": 9.7,
    "wiedervermietungSollNot": 8.82,
    "mietsenkungSoll": 8.67,
    "mietsenkungSollNot": 8.57,
    "geschütztKappung": 12990,
    "geschütztKappungNot": 28267,
    "leistbarkeitsdifferenzKappung": 317,
    "geschütztMietsenkung": 11381,
    "geschütztMietsenkungNot": 27437,
    "leistbarkeitsdifferenzMietsenkung": 226,
    "geschütztWiedervermietung": 16129,
    "geschütztWiedervermietungNot": 28267,
    "leistbarkeitsDifferenzWiedervermietung": 323,
    "haushalte": 258693
  },
  {
    "name": "Freiburg im Breisgau",
    "marketCategory": 3,
    "active": false,
    "long": 7.85,
    "lat": 47.99,
    "marktMiete": 11.73,
    "bestandsMiete": 8,
    "kappungIst": 8.91,
    "kappungSoll": 8.12,
    "kappungSollNot": 8,
    "wiedervermietungIst": 8.53,
    "wiedervermietungSoll": 8.8,
    "wiedervermietungSollNot": 8,
    "mietsenkungSoll": 8,
    "mietsenkungSollNot": 7.2,
    "geschütztKappung": 4190,
    "geschütztKappungNot": 5339,
    "leistbarkeitsdifferenzKappung": 296,
    "geschütztMietsenkung": 3290,
    "geschütztMietsenkungNot": 8345,
    "leistbarkeitsdifferenzMietsenkung": 208,
    "geschütztWiedervermietung": 4704,
    "geschütztWiedervermietungNot": 5339,
    "leistbarkeitsDifferenzWiedervermietung": 286,
    "haushalte": 65689
  },
  {
    "name": "Hamburg",
    "marketCategory": 3,
    "active": false,
    "long": 10.01,
    "lat": 53.57,
    "marktMiete": 11.04,
    "bestandsMiete": 8.26,
    "kappungIst": 9.95,
    "kappungSoll": 8.38,
    "kappungSollNot": 8.26,
    "wiedervermietungIst": 9.52,
    "wiedervermietungSoll": 9.09,
    "wiedervermietungSollNot": 8.26,
    "mietsenkungSoll": 8.05,
    "mietsenkungSollNot": 8.25,
    "geschütztKappung": 34534,
    "geschütztKappungNot": 67582,
    "leistbarkeitsdifferenzKappung": 299,
    "geschütztMietsenkung": 27540,
    "geschütztMietsenkungNot": 72134,
    "leistbarkeitsdifferenzMietsenkung": 206,
    "geschütztWiedervermietung": 55138,
    "geschütztWiedervermietungNot": 67582,
    "leistbarkeitsDifferenzWiedervermietung": 308,
    "haushalte": 634664
  },
  {
    "name": "Heidelberg",
    "marketCategory": 3,
    "active": false,
    "long": 8.69,
    "lat": 49.4,
    "marktMiete": 11.28,
    "bestandsMiete": 8.21,
    "kappungIst": 8.99,
    "kappungSoll": 8.33,
    "kappungSollNot": 8.21,
    "wiedervermietungIst": 8.6,
    "wiedervermietungSoll": 9.03,
    "wiedervermietungSollNot": 8.21,
    "mietsenkungSoll": 7.89,
    "mietsenkungSollNot": 7,
    "geschütztKappung": 1408,
    "geschütztKappungNot": 4443,
    "leistbarkeitsdifferenzKappung": 305,
    "geschütztMietsenkung": 1295,
    "geschütztMietsenkungNot": 5524,
    "leistbarkeitsdifferenzMietsenkung": 205,
    "geschütztWiedervermietung": 2201,
    "geschütztWiedervermietungNot": 4443,
    "leistbarkeitsDifferenzWiedervermietung": 321,
    "haushalte": 39520
  },
  {
    "name": "Köln",
    "marketCategory": 3,
    "active": false,
    "long": 6.95,
    "lat": 50.93,
    "marktMiete": 10.67,
    "bestandsMiete": 8.21,
    "kappungIst": 9.95,
    "kappungSoll": 8.33,
    "kappungSollNot": 8.21,
    "wiedervermietungIst": 9.52,
    "wiedervermietungSoll": 9.03,
    "wiedervermietungSollNot": 8.21,
    "mietsenkungSoll": 8.09,
    "mietsenkungSollNot": 7.15,
    "geschütztKappung": 17268,
    "geschütztKappungNot": 36403,
    "leistbarkeitsdifferenzKappung": 320,
    "geschütztMietsenkung": 14408,
    "geschütztMietsenkungNot": 43196,
    "leistbarkeitsdifferenzMietsenkung": 206,
    "geschütztWiedervermietung": 26311,
    "geschütztWiedervermietungNot": 36403,
    "leistbarkeitsDifferenzWiedervermietung": 320,
    "haushalte": 335035
  },
  {
    "name": "Mainz",
    "marketCategory": 3,
    "active": false,
    "long": 8.27,
    "lat": 49.98,
    "marktMiete": 10.97,
    "bestandsMiete": 8.29,
    "kappungIst": 8.67,
    "kappungSoll": 8.41,
    "kappungSollNot": 8.29,
    "wiedervermietungIst": 8.3,
    "wiedervermietungSoll": 9.12,
    "wiedervermietungSollNot": 8.29,
    "mietsenkungSoll": 7.91,
    "mietsenkungSollNot": 7.12,
    "geschütztKappung": 2187,
    "geschütztKappungNot": 1572,
    "leistbarkeitsdifferenzKappung": 282,
    "geschütztMietsenkung": 2266,
    "geschütztMietsenkungNot": 7552,
    "leistbarkeitsdifferenzMietsenkung": 209,
    "geschütztWiedervermietung": 770,
    "geschütztWiedervermietungNot": 1572,
    "leistbarkeitsDifferenzWiedervermietung": 266,
    "haushalte": 60048
  },
  {
    "name": "München",
    "marketCategory": 3,
    "active": false,
    "long": 11.57,
    "lat": 48.13,
    "marktMiete": 17.02,
    "bestandsMiete": 11.11,
    "kappungIst": 12.02,
    "kappungSoll": 11.27,
    "kappungSollNot": 11.11,
    "wiedervermietungIst": 11.49,
    "wiedervermietungSoll": 12.22,
    "wiedervermietungSollNot": 11.11,
    "mietsenkungSoll": 10.45,
    "mietsenkungSollNot": 9.87,
    "geschütztKappung": 25389,
    "geschütztKappungNot": 41190,
    "leistbarkeitsdifferenzKappung": 377,
    "geschütztMietsenkung": 30098,
    "geschütztMietsenkungNot": 61219,
    "leistbarkeitsdifferenzMietsenkung": 269,
    "geschütztWiedervermietung": 30855,
    "geschütztWiedervermietungNot": 41190,
    "leistbarkeitsDifferenzWiedervermietung": 375,
    "haushalte": 496879
  },
  {
    "name": "Osnabrück",
    "marketCategory": 3,
    "active": false,
    "long": 8.04,
    "lat": 52.27,
    "marktMiete": 7.73,
    "bestandsMiete": 6.1,
    "kappungIst": 7.24,
    "kappungSoll": 6.19,
    "kappungSollNot": 6.1,
    "wiedervermietungIst": 6.93,
    "wiedervermietungSoll": 6.71,
    "wiedervermietungSollNot": 6.1,
    "mietsenkungSoll": 6.08,
    "mietsenkungSollNot": 5.14,
    "geschütztKappung": 3439,
    "geschütztKappungNot": 4318,
    "leistbarkeitsdifferenzKappung": 207,
    "geschütztMietsenkung": 1730,
    "geschütztMietsenkungNot": 4367,
    "leistbarkeitsdifferenzMietsenkung": 142,
    "geschütztWiedervermietung": 916,
    "geschütztWiedervermietungNot": 4318,
    "leistbarkeitsDifferenzWiedervermietung": 197,
    "haushalte": 45195
  },
  {
    "name": "Stuttgart",
    "marketCategory": 3,
    "active": false,
    "long": 9.17,
    "lat": 48.78,
    "marktMiete": 12.79,
    "bestandsMiete": 8.53,
    "kappungIst": 11.46,
    "kappungSoll": 8.65,
    "kappungSollNot": 8.53,
    "wiedervermietungIst": 10.96,
    "wiedervermietungSoll": 9.38,
    "wiedervermietungSollNot": 8.53,
    "mietsenkungSoll": 8.46,
    "mietsenkungSollNot": 8.42,
    "geschütztKappung": 14415,
    "geschütztKappungNot": 31262,
    "leistbarkeitsdifferenzKappung": 362,
    "geschütztMietsenkung": 8642,
    "geschütztMietsenkungNot": 13790,
    "leistbarkeitsdifferenzMietsenkung": 222,
    "geschütztWiedervermietung": 29268,
    "geschütztWiedervermietungNot": 31262,
    "leistbarkeitsDifferenzWiedervermietung": 364,
    "haushalte": 169403
  }
 ];

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// Map and projection
const projection = d3
  .geoMercator()
  .center([10, 51])
  .scale(980) // This is like the zoom
  .translate([400 / 2, 300 / 2]);

// Load external data and boot
d3.json(
  "map.geo.json"
  //"https://www.rosalux.de/fileadmin/static/mietendeckel/map.geo.json"
).then(function (data) {
  let map = d3
    .select("#mapContainer")
    .append("svg")
    .attr("width", 400)
    .attr("height", 300)
    .append("g");
  //.attr("transform",
  //  "translate(" + margin.left + "," + margin.top + ")");

  let mietsteigerungActive = false;
    let mietobergrenzenActive = false;
    let mietabsenkungenActive = false;
    let wohnungenotgebieteActive = false;

  function showTutorial() {
    document.getElementById("consequences").innerHTML = '<p id="tutorial">Durch klicken kann eine Stadt ausgewählt werden um die Auswirkungen der aktivierten Maßnahmen auf die Stadt genauer zu betrachten.</p>'  
  }
  // let tutorial be visible in the beginning

  showTutorial()
  //////
  // HELPER METHODS
  //////
  function calculateNewLeistbareWohnverhaeltnisse(cityData) {
    if (
      !mietsteigerungActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive
    )
      return 0;
    if (
      !mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztMietsenkung;
    if (
      !mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztMietsenkungNot;
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztWiedervermietung;
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztWiedervermietungNot;
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztMietsenkung + cityData.geschütztWiedervermietung;
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return (
        cityData.geschütztMietsenkungNot + cityData.geschütztWiedervermietungNot
      );
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztKappung;
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztKappungNot;
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztKappung + cityData.geschütztMietsenkung;
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztKappungNot + cityData.geschütztMietsenkungNot;
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztWiedervermietung + cityData.geschütztKappung;
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return (
        cityData.geschütztKappungNot + cityData.geschütztWiedervermietungNot
      );
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return (
        cityData.geschütztKappung +
        cityData.geschütztMietsenkung +
        cityData.geschütztWiedervermietung
      );
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return (
        cityData.geschütztKappungNot +
        cityData.geschütztMietsenkungNot +
        cityData.geschütztWiedervermietungNot
      );
  }

  function calculateEquivalentSubjektfoerderung() {
    if (
      !mietsteigerungActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive
    )
      return 0;
    if (
      !mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return arraySum(
        cities.map(
          (city) =>
            city.geschütztMietsenkung * city.leistbarkeitsdifferenzMietsenkung
        )
      );
    }
    if (
      !mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztMietsenkungNot *
              city.leistbarkeitsdifferenzMietsenkung
          )
        )
      );
    }
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztWiedervermietung *
              city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztWiedervermietungNot *
              city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztMietsenkung *
                city.leistbarkeitsdifferenzMietsenkung +
              city.geschütztWiedervermietung *
                city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
    if (
      !mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztMietsenkungNot *
                city.leistbarkeitsdifferenzMietsenkung +
              city.geschütztWiedervermietungNot *
                city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) => city.geschütztKappung * city.leistbarkeitsdifferenzKappung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztKappungNot * city.leistbarkeitsdifferenzKappung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztKappung * city.leistbarkeitsdifferenzKappung +
              city.geschütztMietsenkung * city.leistbarkeitsdifferenzMietsenkung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztKappungNot * city.leistbarkeitsdifferenzKappung +
              city.geschütztMietsenkungNot *
                city.leistbarkeitsdifferenzMietsenkung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztWiedervermietung *
                city.leistbarkeitsDifferenzWiedervermietung +
              city.geschütztKappung * city.leistbarkeitsdifferenzKappung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztKappungNot * city.leistbarkeitsdifferenzKappung +
              city.geschütztWiedervermietungNot *
                city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztKappung * city.leistbarkeitsdifferenzKappung +
              city.geschütztMietsenkung *
                city.leistbarkeitsdifferenzMietsenkung +
              city.geschütztWiedervermietung *
                city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
    if (
      mietsteigerungActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    ) {
      return (
        12 *
        arraySum(
          cities.map(
            (city) =>
              city.geschütztKappungNot * city.leistbarkeitsdifferenzKappung +
              city.geschütztMietsenkungNot *
                city.leistbarkeitsdifferenzMietsenkung +
              city.geschütztWiedervermietungNot *
                city.leistbarkeitsDifferenzWiedervermietung
          )
        )
      );
    }
  }

  function getEquivalentSubjektfoerderungString(){
    return calculateEquivalentSubjektfoerderung().toLocaleString("de-DE") + "€";
  }

  function updateSubjektfoerderungsShowcase() {
    let befitingCities = `Von den ausgewählten Maßnahmen profitieren Haushalte in ${benefitingFromCurrentSelection().length} Städten. `
    let subjektfoerderung = `Um den Effekt der gerade ausgewählten Maßnahmen durch die Zahlung von Subjektfoederung zu erzielen, müssten pro Jahr ${getEquivalentSubjektfoerderungString()} aufgewendet werden. Die aktuell ausgewählten Maßnahmen erreichen ${Math.round(((calculateEquivalentSubjektfoerderung()/maximumSubjektfoerderung).toFixed(2) * 100)) }% des nach dem Konzept maximal möglichen Effektes. Dieser entspräche einem Einsatz von ${maximumSubjektfoerderung.toLocaleString("de-DE")} €.`
    document.getElementById("subjektfoerderung").textContent = befitingCities + subjektfoerderung 
  }

  function benefitsFromMietsteigerung(city){
    return city.geschütztKappung > 0;
  }
  
  function benefitsFromMietobergrenzen(city){
    return city.geschütztWiedervermietung > 0;
  }
  
  function benefitsFromMietabsenkungen(city){
    return city.geschütztMietsenkung > 0;
  }

  function benefitsFromNotgebiete(city){
    return city.geschütztKappungNot > 0 || city.geschütztMietsenkungNot > 0 || city.geschütztWiedervermietungNot > 0;
  }

  function benefitingFromCurrentSelection(){
    let benefitingKappung = [];
    let benefitingWiedervermietung = [];
    let benefitingAbsenkung = [];
    let benefitingNot = [];
    if (mietsteigerungActive) benefitingKappung = cities.filter(city => benefitsFromMietsteigerung(city));
    if (mietobergrenzenActive) benefitingWiedervermietung = cities.filter(city => benefitsFromMietobergrenzen(city));
    if (mietabsenkungenActive) benefitingAbsenkung = cities.filter(city => benefitsFromMietabsenkungen(city));
    if (wohnungenotgebieteActive) benefitingNot = cities.filter(city => benefitsFromNotgebiete(city));
    
    return [...new Set((benefitingKappung.concat(benefitingWiedervermietung, benefitingAbsenkung, benefitingNot)).map(city => city.name ))]
  }

  let maximumSubjektfoerderung =
    (
      12 *
      arraySum(
        cities.map(
          (city) =>
            city.geschütztWiedervermietungNot *
              city.leistbarkeitsDifferenzWiedervermietung +
            city.geschütztKappungNot * city.leistbarkeitsdifferenzKappung +
            city.geschütztMietsenkungNot *
              city.leistbarkeitsdifferenzMietsenkung
        )
      )
    );

  function bestandsMiete(city) {
    if (mietabsenkungenActive) {
      if (wohnungenotgebieteActive) return city.mietsenkungSollNot;
      return city.mietsenkungSoll;
    }
    return city.bestandsMiete;
  }

  function neuvermietungsMiete(city) {
    if (mietobergrenzenActive) {
      if (wohnungenotgebieteActive) return city.wiedervermietungSollNot;
      return city.wiedervermietungSoll;
    }
    return city.wiedervermietungIst;
  }

  function mieterhoehung(city) {
    if (mietsteigerungActive) {
      if (wohnungenotgebieteActive) return city.kappungSollNot;
      return city.kappungSoll;
    }
    return city.kappungIst;
  }

  function profitingHouseholds(city) {
    let percent = calculateNewLeistbareWohnverhaeltnisse(city)/city.haushalte
    return Math.round(1/percent);
  }

  function getConsequencesContent(cityData) {
    let nameTag = "<p style='font-weight: bold;'>" + cityData.name + "</p>";
    let leistbarNewTag =
      "<p>" +
      calculateNewLeistbareWohnverhaeltnisse(cityData).toLocaleString("de-DE") +
      " leistbare Mietverhältnisse entstehen oder werden erhalten. Das ist jeder " + profitingHouseholds(cityData) + ". Haushalt." + "</p>";
    let bestandsMietenTag =
      "<p>Durchschnittliche Miete im Bestand: " +
      bestandsMiete(cityData) +
      " €/m²</p>";
    let neuvermietungsTag =
      "<p>Durchschnittliche Neuvermietungsmiete: " +
      neuvermietungsMiete(cityData) +
      " €/m²</p>";
    let mieterhoehungsTag =
      "<p>Durchschnittlich mögliche Mieterhöhung auf: " +
      mieterhoehung(cityData) +
      " €/m²</p>";
    return (
      nameTag +
      leistbarNewTag +
      bestandsMietenTag +
      neuvermietungsTag +
      mieterhoehungsTag
    );
  }

  let barScale = 5, width = 400, height = 300;
  

  function clicked(event, d) {
    if (active.node() === this) return reset();
    active.classed("active", false);
    active = d3.select(this).classed("active", true);

    var bounds = path.bounds(d),
      dx = bounds[1][0] - bounds[0][0],
      dy = bounds[1][1] - bounds[0][1],
      x = (bounds[0][0] + bounds[1][0]) / 2,
      y = (bounds[0][1] + bounds[1][1]) / 2,
      scale = .9 / Math.max(dx / width, dy / height),
      translate = [width / 2 - scale * x, height / 2 - scale * y];

    map.transition(750)
      .style("stroke-width", "0.1px")
      .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
  }

  function reset() {
    active.classed("active", false);
    active = d3.select(null);
  
    map.transition(750)
      .style("stroke-width", "1px")
      .attr("transform", "");
  }

  // Draw the map
  var path = d3.geoPath().projection(projection);
  
    map.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .on("click", reset);

  let g = map
    .append("g").style("stroke-width", "1px")
    
    g.selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("fill", "#d3dfee")
    .attr("d", path)
    .attr("class", "feature")
    .style("stroke", "darkgray")
    .on("click", clicked);

  let tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("border", "1px solid black")
    .style("border-radius", "3px")
    .style("background", "white")
    .style("visibility", "hidden");

  function citySelected() {
    return cities.some((city) => city.active)
  }

  function selectedCity() {
    return cities.filter((city) => city.active)[0]
  }

  function updateConsequences(city) {
    document.getElementById("consequences").innerHTML = getConsequencesContent(city)
  }
  // a city has been toggled by clicking on it
  let updateCitySelection = function (event, clickedData) {
    clickedData.active = !clickedData.active;
    cities.map(city => city.active = city.name == clickedData.name ? city.active : false)
    
    map
      .selectAll(".marketRect")
      .style("visibility", "hidden");
    map
      .selectAll(".portfolioRect")
      .style("visibility", "hidden");
    map
      .selectAll(".increaseRect")
      .style("visibility", "hidden");
    cityCircles
      .style("visibility", "visible");
  
    if (citySelected()) {
      updateConsequences(clickedData)
    

      var dx = 5 * barWidth,
        dy = neuvermietungsMiete(clickedData) * barScale + 10,
        x = ((projection([clickedData.long, clickedData.lat])[0] - barWidth) + projection([clickedData.long, clickedData.lat])[0] + barWidth) / 2,
        y = ((projection([clickedData.long, clickedData.lat])[1]) + projection([clickedData.long, clickedData.lat])[1] - dy) / 2,
        scale = .9 / Math.max(dx / width, dy / height),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

      map.transition(750)
      .style("stroke-width", "0.1px")
      .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
    } 
    else {
      showTutorial()
    };
    
    
    map
      .selectAll(".marketRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => neuvermietungsMiete(d) * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - neuvermietungsMiete(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".increaseRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => mieterhoehung(d) * barScale)
      .attr("y", (d) => projection([d.long, d.lat])[1] - mieterhoehung(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".portfolioRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => bestandsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - bestandsMiete(d) * barScale
      )
      .style("visibility", clickedData.active ? "visible" : "hidden");

    cityCircles
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .style("visibility", clickedData.active ? "hidden" : "visible");
  };

  function colorCityCircles(d) {
    if (d.marketCategory == 1) return "#00ff00";
    if (d.marketCategory == 2) return "#ff9900";
    if (d.marketCategory == 3) return "#ff0000";
  }

  function colorMarketBars(d) {
    if (d.marketCategory == 1) return "#00ff00";
    if (d.marketCategory == 2) return "#ff9900";
    if (d.marketCategory == 3) return "#ff0000";
  }

  function colorPortfolioBars(d) {
    if (d.marketCategory == 1) return "#009900";
    if (d.marketCategory == 2) return "#b36b00";
    if (d.marketCategory == 3) return "#990000";
  }

  let circleRadius = 2;

  let cityCircles = map
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
      tooltip.transition().duration(500).style("visibility", "hidden");
    });

  let barWidth = 10;

  // depicting bar for new rentals
  map
    .selectAll("marketBars")
    .data(cities)
    .enter()
    .append("rect")
    .attr("class", "cityRect marketRect")
    .attr("width", barWidth)
    .attr("x", (d) => projection([d.long, d.lat])[0] + barWidth)
    .attr("y", (d) => projection([d.long, d.lat])[1])
    .attr("fill", colorMarketBars)
    .attr("visibility", "hidden")
    .on("mousedown", updateCitySelection);

  // depicting bar for current rentals
  map
    .selectAll("portfolioBars")
    .data(cities)
    .enter()
    .append("rect")
    .attr("class", "cityRect portfolioRect")
    .attr("width", barWidth)
    .attr("x", (d) => projection([d.long, d.lat])[0] - barWidth)
    .attr("y", (d) => projection([d.long, d.lat])[1])
    .attr("fill", colorPortfolioBars)
    .attr("visibility", "hidden")
    .on("mousedown", updateCitySelection);

  //depicting bars for possible increases in current rentals
  map
    .selectAll("increaseBars")
    .data(cities)
    .enter()
    .append("rect")
    .attr("class", "cityRect increaseRect")
    .attr("width", barWidth)
    .attr("x", (d) => projection([d.long, d.lat])[0])
    .attr("y", (d) => projection([d.long, d.lat])[1])
    .attr("fill", "black")
    .attr("opacity", "0.5")
    .attr("visibility", "hidden")
    .on("mousedown", updateCitySelection);

  ////////
  // FUNCTIONALITY FOR THE BUTTONS
  ////////

  function mietsteigerungPressed() {
    if (mietsteigerungActive) {
      document.getElementById("mietsteigerung").setAttribute("selected", false);
      mietsteigerungActive = false;
    } else {
      document.getElementById("mietsteigerung").setAttribute("selected", true);
      mietsteigerungActive = true;
    }
    updateSubjektfoerderungsShowcase();
  
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
    if (mietabsenkungenActive) {
      document
        .getElementById("mietabsenkungen")
        .setAttribute("selected", false);
      mietabsenkungenActive = false;
    } else {
      document.getElementById("mietabsenkungen").setAttribute("selected", true);
      mietabsenkungenActive = true;
    }
    updateSubjektfoerderungsShowcase();
    map
      .selectAll(".portfolioRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => bestandsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - bestandsMiete(d) * barScale
      );
      if (citySelected()) updateConsequences(selectedCity());
  }

  function mietobergrenzenPressed() {
    if (mietobergrenzenActive) {
      document
        .getElementById("mietobergrenzen")
        .setAttribute("selected", false);
      mietobergrenzenActive = false;
    } else {
      document.getElementById("mietobergrenzen").setAttribute("selected", true);
      mietobergrenzenActive = true;
    }
    updateSubjektfoerderungsShowcase();
    // adapt rent rects
    map
      .selectAll(".marketRect")
      .transition()
      .duration(1000)
      .attr("height", (d) => neuvermietungsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - neuvermietungsMiete(d) * barScale
      );
      if (citySelected()) updateConsequences(selectedCity());
  }

  function wohnungenotgebietePressed() {
    if (wohnungenotgebieteActive) {
      document
        .getElementById("wohnungenotgebiete")
        .setAttribute("selected", false);
      wohnungenotgebieteActive = false;
    } else {
      document
        .getElementById("wohnungenotgebiete")
        .setAttribute("selected", true);
      wohnungenotgebieteActive = true;
    }

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
      .selectAll(".portfolioRect")
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
      .attr("height", (d) => neuvermietungsMiete(d) * barScale)
      .attr(
        "y",
        (d) => projection([d.long, d.lat])[1] - neuvermietungsMiete(d) * barScale
      );

    updateSubjektfoerderungsShowcase();
      if (citySelected()) updateConsequences(selectedCity());
  }

  ////////
  // WIRE UP BUTTONS AND THEIR METHODS
  ////////
  document.getElementById("mietsteigerung").onclick = mietsteigerungPressed;
  document.getElementById("mietobergrenzen").onclick = mietobergrenzenPressed;
  document.getElementById("mietabsenkungen").onclick = mietabsenkungenPressed;
  document.getElementById("wohnungenotgebiete").onclick = wohnungenotgebietePressed;
  updateSubjektfoerderungsShowcase();
});
