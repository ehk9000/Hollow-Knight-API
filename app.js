// importing express library, knex database for server and database interaction
const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.set('port', process.env.PORT || 3000);
// setting port to 3000
app.use(express.json());
// initializing express library 

app.listen(app.get('port'), () => {
  console.log(`App is running ⚡️`)
});
// app is listening to 3000 port + initiation console log


app.get('/', (req, res) => {
  res.status(200).json('Visit https://hollow-knight.herokuapp.com/api/v1/hollow-knight/bosses, https://hollow-knight.herokuapp.com/api/v1/hollow-knight/friendly-npcs, or https://hollow-knight.herokuapp.com/api/v1/hollow-knight/locations to begin!');
});
// json message for route route

app.get('/api/v1/hollow-knight/bosses', (request, response) => {
  // get method and route for bosses table through 
  database('bosses').select()
  // selecting bosses table in knex
  .then((bosses) => {
    response.status(200).json(bosses);
    // returning status code 200 with json of all the bosses data
  })
  .catch((error) => {
    response.status(500).json({ error });
    // if we get a bad response, display error message 
  })
});


app.get('/api/v1/hollow-knight/locations', (request, response) => {
  // get method and route for locations table
  database('locations').select()
  // selecting locations table in knex
  .then((locations) => {
    response.status(200).json(locations)
    // returning status code 200 with json of all the location data
  })
  .catch((error) => {
    response.status(500).json({ error });
    // if we get a bad response, display error message
  })
});

app.get('/api/v1/hollow-knight/friendly-npcs', (request, response) => {
  // get method and route for friendly npcs table
  database('friendly npcs').select()
  // selecting friendly npcs table
  .then((npcs) => {
    response.status(200).json(npcs)
    // returning status code 200 with json of all the friendly npc data
  })
  .catch((error) => {
    response.status(500).json({ error })
    // if we get a bad response, display error message
  })
});

app.post('/api/v1/hollow-knight/bosses', (request, response) => {
  // post method and route for adding a new boss to the database
  const boss = request.body;
  // assigning a variable for the request body
  
  for (let requiredParameter of ['name', 'image', 'location']) {
    // setting up condition to ensure that the post has required parameters needed to make a new boss
    if (!boss[requiredParameter]) {
      // if a required parameter is missing...
      return response
        .status(422)
        .send({ error: `Expected format: {name: <String>, image: <String>, location:<String>. 
          You are missing "${requiredParameter}" property.`})
          // return status 422 with error message specifying the data structure that each required parameter needs, along with the first missing parameter
    }
  }

  let newBoss = {
    name: boss.name,
    image: boss.image
  }
  // assigning variable to the boss data that we are going to store in the database (minus locations, since we need that as the foreign key, but is not part of the data otherwise)

  database('locations').where({name: boss.location}).select('id')
  // selecting the locations table in knex to find a match in locations to assign the foreign key
    .then(locationId => {
      database('bosses').insert({...newBoss, location_id: locationId[0].id}, 'id')
      // select boss table, then spread in the info we want in the boss table, and assign the foreign key of location id as an additional key value
        .then(boss => {
          response.status(201).json({ id: boss[0] })
          // return response 201 with the newly assigned id for the boss object 
        })
        .catch(error => {
          response.status(500).json({ error })
          // error handling with status code 500
        })
    })
});

app.post('/api/v1/hollow-knight/friendly-npcs', (request, response) => {
    // post method and route for adding a new npc to the database
  const npc = request.body;
    // assigning a variable for the request body


  for (let requiredParameter of ['name', 'image', 'location']) {
      // setting up condition to ensure that the post has required parameters needed to make a new npc

    if (!npc[requiredParameter]) {
         // if a required parameter is missing...
      return response 
        .status(422)
        .send({ error: `Expected format: {name: <String>, image: <String>, location: <String>}.
          You are missing "${requiredParameter}" property.`})
        // return status 422 with error message specifying the data structure that each required parameter needs, along with the first missing parameter

    }
  }

  let newNpc = {
    name: npc.name,
    image: npc.image
  }
  // assigning variable to the npc data that we are going to store in the database (minus locations, since we need that as the foreign key, but is not part of the data otherwise)


  database('locations').where({name: npc.location}).select('id')
    // selecting the locations table in knex to find a match in locations to assign the foreign key
    .then(locationId => {
      database('friendly npcs').insert({...newNpc, location_id: locationId[0].id}, 'id')
        // select npc table, then spread in the info we want in the boss table, and assign the foreign key of location id as an additional key value
      .then(npc => {
        response.status(201).json({ id: npc[0] })
         // return response 201 with the newly assigned id for the boss object 
      })
      .catch(error => {
        response.status(500).json({ error })
        // error handling with status code 500
      })
    })
})

app.post('/api/v1/hollow-knight/locations', (request, response) => {
  // post method and route for adding a new npc to the database
  const location = request.body;

  for (let requiredParameter of ['name', 'image']) {
      // setting up condition to ensure that the post has required parameters needed to make a new npc
    if (!location[requiredParameter]) {
         // if a required parameter is missing...
      return response
        .status(422)
        .send({ error: `Expected format: {name: <String>, image:<String>}. "${requiredParameter}" property` })
        // return status 422 with error message specifying the data structure that each required parameter needs, along with the first missing parameter
    }
  }
  
  database('locations').insert(location, 'id')
    // selecting the locations table in knex to find a match in locations to assign the foreign key
    .then(location => {
      response.status(201).json({ id: location[0]})
      // return response 201 with the newly assigned id for the locations object 

    })
    .catch(error => {
      response.status(500).json({ error })
      // error handling 
    })
})

app.get('/api/v1/hollow-knight/bosses/:id', (request, response) => {
  // get method and route for specific boss
  database('bosses').where('id', request.params.id).select()
  // selecting bosses table and finding the id that matches the id in the route
    .then(boss => {
      if (boss.length) {
        // if that boss has length 
        response.status(200).json(boss);
        // return status code 200 with json boss object we are looking for 
      } else {
        response.status(404).json({
          error: `Could not find boss with id ${request.params.id}`
          // error handling if the boss id is not found, but was not issue with server 
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error });
      // error handling if there is a server error
    })
})

app.get('/api/v1/hollow-knight/friendly-npcs/:id', (request, response) => {
  // get method and route for specific npc  
  database('friendly npcs').where('id', request.params.id).select()
  // selecting npc table and finding the id that matches the id in the route
    .then(npc => {
      if (npc.length) {
        // if that npc has length
        response.status(200).json(npc);
        // return status code 200 with json npc object we are looking for 
      } else {
        response.status(404).json({
          error: `Could not find npc with id ${request.params.id}`
          // error handling if the npc id is not found, but was not issue with server 
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
      // error handling if there is a server error
    })
})

app.get('/api/v1/hollow-knight/locations/:id', (request, response) => {
  // get method and route for specific npc  
  database('locations').where('id', request.params.id).select()
  // selecting locations table and finding the id that matches the id in the route
    .then(location => {
      if (location.length) {
        // if location has length
        response.status(200).json(location);
        // return status code 200 with json location object we are looking for 
      } else {
        response.status(404).json({
          error: `Could not find location with id ${request.params.id}`
          // error handling if the npc id is not found, but was not issue with server 
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
      // error handling if there is a server error
    })
})

app.delete('/api/v1/hollow-knight/bosses/:id', (request,response) => {
  // delete method and route for specific boss we want to delete
  database('bosses').where('id', request.params.id).delete()
  // selecting bosses table and finding the boss that matches the id in the route and deleting it
    .then(boss => {
      if (boss) {
        // if the boss is truthy
        response.status(200).json(`Boss with id ${request.params.id} was successfully deleted`)
        // return status 200 with success message
      } else {
        response.status(422).json({error: `Could not find Boss with id ${request.params.id}`})
        // if it is falsy return code 422 with error message 
      }
    })
    .catch(error => {
      response.status(500).json({ error })
      // error handling if there is a server issue
    })
})

app.delete('/api/v1/hollow-knight/friendly-npcs/:id', (request, response) => {
  // delete method and route for specific npc we want to delete
  database('friendly npcs').where('id', request.params.id).delete()
  // selecting npc table and finding the npc that matches the id in the route and deleting it
    .then(npc => {
      if (npc) {
        // if the npc is truthy
        response.status(200).json(`Friendly Npc with id ${request.params.id} was successfully deleted`)
        // return status 200 with success message
      } else {
        response.status(422).json({error: `Could not find Friendly Npc with id ${request.params.id}`})
        // if it is falsy return code 422 with error message
      }
    })
    .catch(error => {
      response.status(500).json({ error })
      // error handling if there is a server issue
    })
})

app.delete('/api/v1/hollow-knight/locations/:id', (request, response) => {
  // delete method and route for specific location we want to delete
  database('locations').where('id', request.params.id).delete()
  // selecting locations table and finding the location that matches the id in the route and deleting it
    .then(location => {
      if (location) {
        // if the npc is truthy 
        response.status(200).json(`Location with id ${request.params.id} was successfully deleted`)
        // return status 200 with success message
      } else {
        response.status(422).json({error: `Could not find Location with id ${request.params.id}`})
        // if it is falsy return code 422 with error message
      }
    })
    .catch(error => {
      response.status(500).json({ error }) 
      // error handling if there is a server issue
    })
})
