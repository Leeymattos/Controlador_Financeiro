
exports.up = function(knex) {
  return knex.schema.createTable('purchases', function(table){
    table.increments('id')
    table.string('userId').notNullable()
    table.string('purchaseName').notNullable()
    table.string('date').notNullable()
    table.string('value').notNullable()
    table.string('payment').notNullable()

    table.foreign('userId').references('id').inTable('users')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('purchases')
};
