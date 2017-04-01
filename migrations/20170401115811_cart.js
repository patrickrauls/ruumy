
exports.up = (knex, Promise) => {
  return knex.schema.createTable('cart', cart => {
    cart.increments('id');
    cart.integer('user').references('user.id').onDelete('cascade');
    cart.text('account').references('account.id').onDelete('cascade');
    cart.timestamps();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cart');
};
