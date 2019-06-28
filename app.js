const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.listen(app.get('port'), () => {
  console.log(`App is running ⚡️`)
});

app.get('/', (req, res) => {
    res.status(200).json('Hello world!');
});

app.get('/favicon.ico', (req, res) => {
  res.status(200).json('Hello world!');
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
