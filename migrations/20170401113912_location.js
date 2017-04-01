
exports.up = (knex, Promise) => {
  return knex.schema.createTable('location', location => {
    location.integer('id').primary();
    location.text('title');
    location.text('address');
    location.text('unit');
    location.text('city');
    location.text('state');
    location.text('postcode');
    location.text('gps');
    location.integer('type').references('location_type.id').onDelete('cascade');
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('location');
};
