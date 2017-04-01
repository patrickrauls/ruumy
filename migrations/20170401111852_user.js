
exports.up = (knex, Promise) => {
    return knex.schema.createTable('user', user => {
        user.increments('id');
        user.varchar('email', 255).notNullable().unique();
        user.text('firstname');
        user.text('lastname');
        user.text('phone');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user');
};
