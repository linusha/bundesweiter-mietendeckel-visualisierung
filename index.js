import * as d3 from "d3";
import Swal from 'sweetalert2';
import 'select-pure/dist/index.js';

function arraySum(array) {
  return array.reduce((accumVariable, curValue) => accumVariable + curValue, 0);
}

// marketCategory:
// 1 - balanced market
// 2 - strained market
// 3 - distressed market
let cities = [
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
    "mietsenkungSoll": 8.22,
    "mietsenkungSollNot": 8.22,
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
    "mietsenkungSoll": 8.02,
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
    "mietsenkungSoll": 7.43,
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
    "mietsenkungSoll": 6.89,
    "mietsenkungSollNot": 6.89,
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
    "mietsenkungSoll": 9.52,
    "mietsenkungSollNot": 9.52,
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
    "mietsenkungSoll": 7.49,
    "mietsenkungSollNot": 7.49,
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
    "mietsenkungSoll": 6.02,
    "mietsenkungSollNot": 6.02,
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
    "mietsenkungSoll": 6.86,
    "mietsenkungSollNot": 6.86,
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
    "mietsenkungSoll": 7.34,
    "mietsenkungSollNot": 7.34,
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
    "mietsenkungSoll": 6.64,
    "mietsenkungSollNot": 6.64,
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
    "mietsenkungSoll": 9.53,
    "mietsenkungSollNot": 9.53,
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
    "mietsenkungSoll": 7,
    "mietsenkungSollNot": 7,
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
    "mietsenkungSoll": 7.3,
    "mietsenkungSollNot": 7.3,
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
    "mietsenkungSoll": 10.58,
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
    "mietsenkungSoll": 9.6,
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
    "mietsenkungSoll": 6.05,
    "mietsenkungSollNot": 6.05,
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
    "mietsenkungSoll": 9.91,
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
    "mietsenkungSoll": 6.59,
    "mietsenkungSollNot": 6.59,
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
    "mietsenkungSoll": 7.92,
    "mietsenkungSollNot": 7.92,
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
    "mietsenkungSoll": 9.85,
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
    "mietsenkungSoll": 8.08,
    "mietsenkungSollNot": 8.08,
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
    "mietsenkungSoll": 8.24,
    "mietsenkungSollNot": 8.24,
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
    "mietsenkungSoll": 9.85,
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
    "mietsenkungSoll": 7.08,
    "mietsenkungSollNot": 7.08,
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
    "mietsenkungSoll": 6.53,
    "mietsenkungSollNot": 6.53,
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
    "mietsenkungSoll": 7.57,
    "mietsenkungSollNot": 7.57,
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
    "mietsenkungSoll": 7.84,
    "mietsenkungSollNot": 7.84,
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
    "mietsenkungSoll": 7.46,
    "mietsenkungSollNot": 7.46,
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
    "mietsenkungSoll": 9.95,
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
    "mietsenkungSoll": 8.39,
    "mietsenkungSollNot": 8.39,
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
    "mietsenkungSoll": 7.16,
    "mietsenkungSollNot": 7.16,
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
    "mietsenkungSoll": 7.48,
    "mietsenkungSollNot": 7.48,
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
    "mietsenkungSoll": 13.33,
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
    "mietsenkungSoll": 9.47,
    "mietsenkungSollNot": 9.47,
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
    "mietsenkungSoll": 8.45,
    "mietsenkungSollNot": 8.45,
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
    "mietsenkungSoll": 6.32,
    "mietsenkungSollNot": 6.32,
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
    "mietsenkungSoll": 7.32,
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
    "mietsenkungSoll": 8.38,
    "mietsenkungSollNot": 8.38,
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
    "mietsenkungSoll": 7.32,
    "mietsenkungSollNot": 7.32,
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
    "mietsenkungSoll": 10.24,
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
    "mietsenkungSoll": 9.85,
    "mietsenkungSollNot": 9.85,
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
    "mietsenkungSoll": 6.89,
    "mietsenkungSollNot": 6.89,
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
  }
];

d3.json(
  "https://www.rosalux.de/fileadmin/static/mietendeckel/map.geo.json"
).then(function (data) {
  let active = d3.select(null);
  let kappungsgrenzeActive = false;
  let mietobergrenzenActive = false;
  let mietabsenkungenActive = false;
  let wohnungenotgebieteActive = false;
  let barScale = 5;
  let width = document.getElementById("customMietendeckelApplet").offsetWidth;
  let height = width / 0.625;
  let map, projection, path, g, tooltip, increaseBars, circleRadius, cityCircles, barWidth, marketBars, stopBars, averageBars, highestIncreaseBars, highestMarketBars;

  //////
  // Methods related to calculations and data
  //////

  function calculateNewLeistbareWohnverhaeltnisse(cityData) {
    if (
      !kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive
    )
      return 0;
    if (
      !kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztMietsenkung;
    if (
      !kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztMietsenkungNot;
    if (
      !kappungsgrenzeActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztWiedervermietung;
    if (
      !kappungsgrenzeActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztWiedervermietungNot;
    if (
      !kappungsgrenzeActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztMietsenkung + cityData.geschütztWiedervermietung;
    if (
      !kappungsgrenzeActive &&
      mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return (
        cityData.geschütztMietsenkungNot + cityData.geschütztWiedervermietungNot
      );
    if (
      kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztKappung;
    if (
      kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztKappungNot;
    if (
      kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztKappung + cityData.geschütztMietsenkung;
    if (
      kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return cityData.geschütztKappungNot + cityData.geschütztMietsenkungNot;
    if (
      kappungsgrenzeActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      !wohnungenotgebieteActive
    )
      return cityData.geschütztWiedervermietung + cityData.geschütztKappung;
    if (
      kappungsgrenzeActive &&
      mietobergrenzenActive &&
      !mietabsenkungenActive &&
      wohnungenotgebieteActive
    )
      return (
        cityData.geschütztKappungNot + cityData.geschütztWiedervermietungNot
      );
    if (
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      !kappungsgrenzeActive &&
      !mietobergrenzenActive &&
      !mietabsenkungenActive
    )
      return 0;
    if (
      !kappungsgrenzeActive &&
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
      !kappungsgrenzeActive &&
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
      !kappungsgrenzeActive &&
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
      !kappungsgrenzeActive &&
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
      !kappungsgrenzeActive &&
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
      !kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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
      kappungsgrenzeActive &&
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

  function getEquivalentSubjektfoerderungString() {
    const sum = calculateEquivalentSubjektfoerderung();
    if (sum > 1_000_000_000) { // more than one billion
     return (sum / 1_000_000_000).toFixed(1).toString().replace('.', ',') + ' Milliarden €' 
    }
    return (sum / 1_000_000).toFixed(1).toString().replace('.', ',') + ' Millionen €'
  }

  function benefitsFromKappungsgrenze(city) {
    return city.geschütztKappung > 0;
  }

  function benefitsFromMietobergrenzen(city) {
    return city.geschütztWiedervermietung > 0;
  }

  function benefitsFromMietabsenkungen(city) {
    return city.geschütztMietsenkung > 0;
  }

  function benefitsFromNotgebiete(city) {
    return city.geschütztKappungNot > 0 || city.geschütztMietsenkungNot > 0 || city.geschütztWiedervermietungNot > 0;
  }

  function benefitingFromCurrentSelection() {
    let benefitingKappung = [];
    let benefitingWiedervermietung = [];
    let benefitingAbsenkung = [];
    let benefitingNot = [];
    if (kappungsgrenzeActive) benefitingKappung = cities.filter(city => benefitsFromKappungsgrenze(city));
    if (mietobergrenzenActive) benefitingWiedervermietung = cities.filter(city => benefitsFromMietobergrenzen(city));
    if (mietabsenkungenActive) benefitingAbsenkung = cities.filter(city => benefitsFromMietabsenkungen(city));
    if (wohnungenotgebieteActive) benefitingNot = cities.filter(city => benefitsFromNotgebiete(city));

    return [...new Set((benefitingKappung.concat(benefitingWiedervermietung, benefitingAbsenkung, benefitingNot)).map(city => city.name))]
  }

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

  function profitingHouseholds(city) {
    let percent = calculateNewLeistbareWohnverhaeltnisse(city) / city.haushalte
    return Math.round(1 / percent);
  }

  //////
  // Methods related to the visualization
  //////

  function showHintNoSelectedCity() {
    document.getElementById("consequences").innerHTML = '<p id="tutorial" class="callout">Wähle eine Stadt aus, um zu sehen wie sich die Maßnahmen auf die Mieten dort auswirken.</p>'
  }

  function updateSubjektfoerderungsCallout() {
    let text, allBenefiting;
    if (!kappungsgrenzeActive && !mietabsenkungenActive && !mietobergrenzenActive) {
      text =
        `<p class="callout">Aktiviere eine oder mehrere der Maßnahmen, um zu sehen, wie sie sich insgesamt auswirken.</p>`;
    } else {
      allBenefiting = arraySum(cities.map((city) => calculateNewLeistbareWohnverhaeltnisse(city))).toLocaleString("de-DE")
      text = "<h3>So wirken die ausgewählten Maßnahmen bundesweit:</h3><div class='numbers-container'><p class='custom-bold in-box'>Die aktivierten Maßnahmen entlasten <b>" + allBenefiting.toString().replaceAll('.', ' ') + ` Haushalte in ${benefitingFromCurrentSelection().length} Städten.</b> ` +
        `Um eine ähnlichen Entlastung für die Haushalte zu erzielen müssten pro Jahr zusätzlich <b>${getEquivalentSubjektfoerderungString()}</b> an <span class="infolink" id="wohngeld"><span>Mietzuschüssen (zum Beispiel durch Wohngeld)</span></span> aufgewendet werden.</p></div>`
    }
    document.getElementById("subjektfoerderung").innerHTML = text;
    if (!document.getElementById("wohngeld")) return;
    document.getElementById("wohngeld").onclick = () => {
      Swal.fire({
        title: 'Mietzuschüsse',
        html: '<p style="color: #545454;">Der Staat subventioniert den „privaten Wohnungsmarkt“ in Milliardenhöhe. Der Großteil (zuletzt 17,5 Mrd. Euro im Jahr) fließt in direkte Zuschüsse zur Miete. Dazu zählt das Wohngeld, aber auch die Übernahme von Wohnkosten durch Jobcenter und Sozialämter in „angemessener“ Höhe.<br>' +
        'Weitere Infos findest Du im <a href="https://www.rosalux.de/?id=29945#c52747" target="_blank" rel="noopener noreferrer">Glossar</a>.<p>',
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

  function getConsequencesContent(cityData) {
    let nameTag = "<h3>So wirken die Maßnahmen in " + cityData.name + ":</h3>";
    let leistbarNewTag
    if (calculateNewLeistbareWohnverhaeltnisse(cityData) > 0) {
      leistbarNewTag =
        "<p>" +
        calculateNewLeistbareWohnverhaeltnisse(cityData).toLocaleString("de-DE") +
        ` leistbare Mietverhältnisse entstehen in ${cityData.name} oder werden dort erhalten. ` + "<b>Jeder " + profitingHouseholds(cityData) + `. Haushalt in ${cityData.name} profitiert davon.</b>` + "</p>";
    } else {
      leistbarNewTag =
        `<p>Die ausgewählten Maßnahmen haben keinen Effekt auf die Mietpreise in ${cityData.name}.</p>`;
    }
    if (!kappungsgrenzeActive && !mietabsenkungenActive && !mietobergrenzenActive && !wohnungenotgebieteActive) {
      leistbarNewTag =
        `<p>Aktiviere eine oder mehrere der Maßnahmen oben, um zu sehen, wie sich sich auf ${cityData.name} auswirken. Aktuell ist die Lage so:</p>`;
    }
    let averageTag = 
      `<p class='in-box'><span style='color:#018E06;'>●</span> Momentan beträgt die durchschnittliche Miete: <b>` +
      cityData.bestandsMiete.toString().replace('.',',') +
      "</b>€/m²</p>"; 
    let mieterhoehungsText = "Durchschnittlich mögliche Mieterhöhung auf"
    let mieterhoehungsTag =
      `<p class='in-box'><span style='color:#EBE415;'>●</span> ${mieterhoehungsText}: <b>` +
      mieterhoehung(cityData).toString().replace('.',',') +
      "</b>€/m²</p>";
    let neuvermietungsText = "Durchschnittliche Miete bei Wiedervermietung"
    let neuvermietungsTag =
      `<p class='in-box'><span style='color:#0084FF;'>●</span> ${neuvermietungsText}: <b>` +
      wiedervermietungsMiete(cityData).toString().replace('.',',') +
      "</b>€/m²</p>";
    let bestandsMietenTag =
      `<p class='in-box'><span style='color:#FF3300;'>●</span> Die durchschnittliche maximal erlaubte Höchstmiete beträgt: <b>` +
      bestandsMiete(cityData).toString().replace('.',',') +
      "</b>€/m²</p>";
    return (
      nameTag +
      leistbarNewTag +
      "<div class='numbers-container'>" +
      averageTag + 
      mieterhoehungsTag +
      neuvermietungsTag +
      ((mietabsenkungenActive ? bestandsMietenTag + "</div>" : "</div>") )
    );
  }

  function reset() {
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
      .text((d) => 'Ø ' + d.bestandsMiete.toString().replace('.',','))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] - (2 * barWidth) + (d.bestandsMiete.toString().length == 5 ?
        0.5 :
        1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

    increaseBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => 'Ø ' + mieterhoehung(d).toString().replace('.',','))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] - barWidth + (mieterhoehung(d).toString().length == 5 ?
         0.5 :
         1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

    marketBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => 'Ø ' + wiedervermietungsMiete(d).toString().replace('.',','))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] + (wiedervermietungsMiete(d).toString().length == 5 ?
        0.5 :
         1)
      )
      .style("visibility", "visible")
      .style("font-size", "2pt")
      .style("fill", "#2b3240")

    stopBars
      .selectAll("text")
      .filter((d) => d.name == city.name)
      .text((d) => (mietabsenkungenActive ? 'Ø ' + bestandsMiete(d).toString().replace('.',',') : ''))
      .attr("y", (d) => projection([d.long, d.lat])[1] - 10)
      .attr("x", (d) => projection([d.long, d.lat])[0] + barWidth + (bestandsMiete(d).toString().length == 5 ?
        0.5 :
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

  function updateNotGebieteRegel(){
    let content = '';
    if (kappungsgrenzeActive) content = content + ` Hier gilt ein Mietenstopp - Mieterhöhungen sind vollständig ausgeschlossen.`;
    if (mietobergrenzenActive) content = content + ` Bei neu abgeschlossenen Verträgen dürfen die Mieten die <span id="modal-average-rent-dynamic" class="infolink"><span>örtliche Durchschnittsmiete</span></span> nicht übersteigen.`;
    if (mietabsenkungenActive) content = content + ` Überhöhte Miete werden stärker abgesenkt: Keine Miete darf die örtlich <span id="modal-affordable-rent" class="infolink"><span>leistbare Miete</span></span> um mehr als 20 % überschreiten.`;
    document.getElementById('notgebiet-regeln').innerHTML = content;
    if (mietobergrenzenActive){
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
      })};
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
      reset();
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
      .attr("y",(d) => projection([d.long, d.lat])[1] - bestandsMiete(d) * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".highestMarketRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => d.marktMiete * barScale)
      .attr("y",(d) => projection([d.long, d.lat])[1] - d.marktMiete * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    map
      .selectAll(".highestIncreaseRect")
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .attr("height", (d) => d.kappungIst * barScale)
      .attr("y",(d) => projection([d.long, d.lat])[1] - d.kappungIst * barScale)
      .style("visibility", clickedData.active ? "visible" : "hidden");

    cityCircles
      .filter((d) => d.name == clickedData.name)
      .transition(2000)
      .style("visibility", clickedData.active ? "hidden" : "visible");
  };

  function colorCityCircles(d) {
    if (wohnungenotgebieteActive && !kappungsgrenzeActive && !mietabsenkungenActive && !mietobergrenzenActive) {
      if (d.marketCategory == 3) return "#ff3300"
    }
    else if (benefitingFromCurrentSelection().includes(d.name)) return "#ff3300";
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
      .on("mousedown", updateCitySelection);

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
      .on("mousedown", updateCitySelection);

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
      .on("mousedown", updateCitySelection)

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
      .on("mousedown", updateCitySelection)

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

  function kappungsgrenzeToggled (status) {
    kappungsgrenzeActive = status;
    updateNotGebieteRegel();
    updateSubjektfoerderungsCallout();

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
      button.textContent = "▸ " + button.textContent.replace(/ /g,'').replace(/\n/g,'').slice(1);
    } else {
      button.textContent = "▾ " + button.textContent.replace(/ /g,'').replace(/\n/g,'').slice(1);
      button.nextElementSibling.className = "openItem"
    }
    
  }

  function mietabsenkungenToggled(status) {
    mietabsenkungenActive = status;
    updateNotGebieteRegel();
    updateSubjektfoerderungsCallout();

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

    if (mietabsenkungenActive){
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
      button.textContent = "▸ " + button.textContent.replace(/ /g,'').replace(/\n/g,'').slice(1);
    } else {
      button.textContent = "▾ " + button.textContent.replace(/ /g,'').replace(/\n/g,'').slice(1);
      button.nextElementSibling.className = "openItem"
    }
  }

  function mietobergrenzenToggled(status) {
    mietobergrenzenActive = status;
    updateNotGebieteRegel();
    updateSubjektfoerderungsCallout();

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

  function wohnungenotgebietePressed() {
    let button = document.getElementById("wohnungenotgebiete")
    if (button.nextElementSibling.className !== "closedItem") {
      button.nextElementSibling.className = "closedItem"
      button.textContent = "▸ " + 'Wohnungsnotgebiete ausweisen';
    } else {
      button.textContent = "▾ " + 'Wohnungsnotgebiete ausweisen';
      button.nextElementSibling.className = "openItem"
    }
  }

  function wohnungenotgebieteToggled (status) {
    wohnungenotgebieteActive = status;
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

    updateSubjektfoerderungsCallout();
    if (citySelected()) updateConsequences(selectedCity());
  }

  //////
  // Bootstrap Visualization
  //////

  // let hint be visible in the beginning
  showHintNoSelectedCity()
  drawMap()
  // make map responsive
  window.addEventListener('resize', function (event) {
    const dropdown = document.getElementById("citySelector");
    if (document.getElementById("mapContainer").offsetWidth < 500 && dropdown.selectedIndex === 0){
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
    drawMap()
  }, true);

  document.getElementById("kappungsgrenzen").onclick = kappungsgrenzePressed;
  document.getElementById("mietobergrenzen").onclick = mietobergrenzenPressed;
  document.getElementById("mietabsenkungen").onclick = mietabsenkungenPressed;

  document.getElementById("kappungsgrenzenCheckbox").checked = false;
  document.getElementById("mietobergrenzenCheckbox").checked = false;
  document.getElementById("mietabsenkungenCheckbox").checked = false;
  document.getElementById("wohnungsnotgebieteCheckbox").checked = false;

  document.getElementById("kappungsgrenzenCheckbox").addEventListener('change', e => {
    kappungsgrenzeToggled(e.target.checked);
  });
  document.getElementById("mietobergrenzenCheckbox").addEventListener('change', e => {
    mietobergrenzenToggled(e.target.checked);
  });
  document.getElementById("mietabsenkungenCheckbox").addEventListener('change', e => {
    mietabsenkungenToggled(e.target.checked);
  });
  document.getElementById("wohnungsnotgebieteCheckbox").addEventListener('change', e => {
    wohnungenotgebieteToggled(e.target.checked);
  });
  document.getElementById("wohnungenotgebiete").onclick = wohnungenotgebietePressed;
  document.getElementById("citySelector").addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    if (selectedCity === 'reset') {
      reset();
      return;
    }
    updateCitySelection(null, cities.find(city => city.name === selectedCity));
  });
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
  updateSubjektfoerderungsCallout();
});
