"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var seasonName = '2023REG'; // Replace with the desired season name
var weekNumber = '5'; // Replace with the desired week number
var stat = 'rushing_yards'; // Replace with the desired statistic type
var apiKey = '8ff9212d03e8437393997ea716d1e54e'; // Replace with your API key
var apiUrl = "https://baker-api.sportsdata.io/baker/v2/nfl/projections/players/".concat(seasonName, "/").concat(weekNumber, "/stat/").concat(stat, "/avg?key=").concat(apiKey);
axios_1.default
    .get(apiUrl)
    .then(function (response) {
    console.log(response.data);
})
    .catch(function (error) {
    console.error('Error:', error);
});
