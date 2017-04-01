
exports.up = (knex, Promise) => {
    return knex.schema.createTable('product', product => {
        product.integer('id').primary();
        product.varchar('title', 255);
        product.text('avatar');
        product.text('description');
        product.text('dimensions');
        product.integer('stock').notNullable().defaultTo(0);
        product.decimal('price');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('product');
};
