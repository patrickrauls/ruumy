
exports.up = (knex, Promise) => {
  return knex.schema.createTable('cart_product', cart_product => {
    cart_product.increments('id');
    cart_product.integer('cart').references('cart.id').onDelete('cascade').notNullable();
    cart_product.integer('product').references('product.id').onDelete('cascade').notNullable();
    cart_product.integer('quantity').notNullable().defaultTo(0);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cart_product');
};

