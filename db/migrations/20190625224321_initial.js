
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('locations', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.json('image');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('bosses', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.json('image');
      table.string('location');
      table.integer('location_id').unsigned()
      table.foreign('location_id')
        .references('locations.id');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('friendly npcs', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.json('image');
      table.string('location');
      table.integer('location_id').unsigned()
      table.foreign('location_id')
        .references('locations.id');

      table.timestamps(true, true);
    })
  ])
  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('friendly npcs'),
    knex.schema.dropTable('bosses'),
    knex.schema.dropTable('locations')
  ])
  
};
