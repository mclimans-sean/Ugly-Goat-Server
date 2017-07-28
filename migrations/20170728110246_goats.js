
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goats', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('image_url').notNullable();
    table.integer('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goats');
};
