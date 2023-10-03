import axios from 'axios';

const seasonName = '2023REG'; // Replace with the desired season name
const weekNumber = '5'; // Replace with the desired week number
const stat = 'rushing_yards'; // Replace with the desired statistic type
const apiKey = '8ff9212d03e8437393997ea716d1e54e'; // Replace with your API key

const apiUrl = `https://baker-api.sportsdata.io/baker/v2/nfl/projections/players/${seasonName}/${weekNumber}/stat/${stat}/avg?key=${apiKey}`;

axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
