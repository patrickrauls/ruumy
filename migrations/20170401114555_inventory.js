
exports.up = (knex, Promise) => {
    return knex.schema.createTable('inventory', inventory => {
        inventory.integer('id').primary();
        inventory.integer('product').references('product.id').onDelete('cascade');
        inventory.integer('location').references('location.id').onDelete('cascade');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('inventory');
};
