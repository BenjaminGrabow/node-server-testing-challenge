
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('username', 20)
    .notNullable()
    .unique();
    table
    .text('password', 20)
    .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
