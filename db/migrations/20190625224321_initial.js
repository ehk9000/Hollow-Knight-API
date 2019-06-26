
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Friendly NPC', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.json('image');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('Bosses', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.json('image');

      table.timestamps(true, true);
    })
  ])
  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Friendly NPC'),
    knex.schema.dropTable('Bosses')
  ])
  
};
