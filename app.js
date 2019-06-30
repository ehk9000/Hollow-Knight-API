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

app.post('/api/v1/hollow-knight/bosses', (request, response) => {
  const boss = request.body;
  
  for (let requiredParameter of ['name', 'image', 'location']) {
    if (!boss[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {name: <String>, image: <String>, location:<String> 
          You are missing "${requiredParameter}" property.`})
    }
  }

  let newBoss = {
    name: boss.name,
    image: boss.image
  }

  database('locations').where({name: boss.location}).select('id')
    .then(locationId => {
      database('bosses').insert({...newBoss, location_id: locationId[0].id}, 'id')
        .then(boss => {
          response.status(201).json({ id: boss[0] })
        })
        .catch(error => {
          response.status(500).json({ error })
        })
    })
});

app.post('/api/v1/hollow-knight/friendly-npcs', (request, response) => {
  const npc = request.body;

  for (let requiredParameter of ['name', 'image', 'location']) {
    if (!npc[requiredParameter]) {
      return response 
        .status(422)
        .send({ error: `Expected format: {name: <String>, image: <String>, location: <String>}
          You are missing "${requiredParameter}" property.`})
    }
  }

  let newNpc = {
    name: npc.name,
    image: npc.image
  }

  database('locations').where({name: npc.location}).select('id')
    .then(locationId => {
      database('friendly npcs').insert({...newNpc, location_id: locationId[0].id}, 'id')
      .then(npc => {
        response.status(201).json({ id: npc[0] })
      })
      .catch(error => {
        response.status(500).json({ error })
      })
    })
})

app.get('/api/v1/hollow-knight/bosses:id', (request, response) => {
  database('bosses').where('id', request.params.id).select()
    .then(boss => {
      if (boss.length) {
        response.status(200).json(boss);
      } else {
        response.status(404).json({
          error: `Could not find boss with id ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    })
})



