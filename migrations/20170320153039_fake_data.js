/*

item - integer
user_id - integer
gender - text
age - integer
transaction_date - date
store - text
brand - text
location - text
category - text
price - integer

*/


exports.up = function(knex, Promise) {
  return knex.schema.createTable('fakedata', (table) => {
    table.integer('item');
    table.integer('user_id');
    table.text('gender');
    table.integer('age');
    table.datetime('transaction_date');
    table.text('store');
    table.text('brand');
    table.text('location');
    table.text('category');
    table.integer('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fakedata');
};
