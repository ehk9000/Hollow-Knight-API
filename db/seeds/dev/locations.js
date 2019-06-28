const locationsData = require('../../../locations.js');

const createLocations = (knex, location) => {
  return knex('locations').insert({
    name: location.name,
    image: location.image
  }, 'id')
  .then(locationId => {
    const promises = [];
    if (location.bosses) {
      location.bosses.forEach(boss => {
        promises.push(
            createBosses(knex, {
              name: boss.name,
              image: boss.image,
              location_id:locationId[0]
            })
          )
      });
    }

    if (location.npcs) {
      location.npcs.forEach(npc => {
        promises.push(
          createNpcs(knex, {
            name: npc.name,
            image: npc.image,
            location_id: locationId[0]
          })
        )
      });
    }
    return Promise.all(promises);
  }) 
};

const createBosses = (knex, boss) => {
  return knex('bosses').insert(boss)
}

const createNpcs = (knex, npcs) => {
  return knex('friendly npcs').insert(npcs)
}


exports.seed = (knex) => { 
  return knex('bosses').del()
    .then(() => knex('friendly npcs').del())
    .then(() => knex('locations').del())
    .then(() => {
      let locationPromises = [];

      locationsData.forEach(location => {
        locationPromises.push(createLocations(knex, location))
      });

      return Promise.all(locationPromises);
    })
  .catch((error) => console.log(`Error seeding data: ${error}`));
};
