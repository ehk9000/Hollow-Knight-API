const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(3000, () => {
  console.log(`App is running ⚡️ on port ${port}`)
});

app.get('/api/v1/hollow-knight/bosses', (request, response) => {
  database('bosses').select()
    .then((bosses) => {
      response.status(200).json(bosses);
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
});

app.get('/api/v1/hollow-knight/locations', (request, response) => {
  database('locations').select()
    .then((locations) => {
      response.status(200).json(locations)
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
});

app.get('/api/v1/hollow-knight/friendly-npcs', (request, response) => {
  database('friendly npcs').select()
    .then((npcs) => {
      response.status(200).json(npcs)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});
