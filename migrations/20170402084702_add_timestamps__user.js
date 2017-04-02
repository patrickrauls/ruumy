
exports.up = (knex, Promise) => {
    return knex.schema.table('user', user => {
        user.timestamps();
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.table('user', user => {
        user.dropTimestamps();
    })
};
