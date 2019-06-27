const locations = require('../../../locations');
// const bosses = require('../../../bosses');
// const npcs = require('../../../npcs');

const createLocations = (knex, location) => {
  return knex('locations').insert({
    name: location.name,
    image: location.image
  }, 'id')
  .then(locationId => {
    const bossPromises = [];

    location.bosses.forEach(boss => {
      if (boss === location.name) {
        bossPromises.push(
          createBosses(knex, locationId[0], boss));
      }
    });
    return Promise.all(bossPromises);
  });
};

const createBosses = (knex, locationId, boss) => {
  return knex('bosses').insert({
    name: boss.name,
    image: boss.image,
    location: locationId
  }, 'id')
  .then(locationId => {
    const npcPromises = [];

    location.name.forEach(npc => {
      
    });
  }) 
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bosses').del()
  .then(() => knex('friendly npcs').del())
  .then(() => knex('locations').del())
  .then(() => )
  .catch(() => console.log('Error seeding file'));
};
