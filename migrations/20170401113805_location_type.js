
exports.up = (knex, Promise) => {
    return knex.schema.createTable('location_type', location_type => {
        location_type.increments('id');
        location_type.text('title');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('location_type');
};