
exports.up = (knex, Promise) => {
    return knex.schema.createTable('account', account => {
        account.text('id').primary();
        account.text('super').references('account.id').onDelete('cascade');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('account');
};
