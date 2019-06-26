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

app.get('/api/v1/hollowknight/bosses', (request, response) => {
  database('bosses').select()
    .then((bosses) => {
      response.status(200).json(bosses);
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
});