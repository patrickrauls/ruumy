
exports.up = (knex, Promise) => {
  return knex.schema.createTable('order', order => {
    order.increments('id');
    order.integer('user').references('user.id').onDelete('cascade');
    order.text('account').references('account.id').onDelete('cascade');
    order.integer('location').references('location.id').onDelete('cascade');
    order.timestamps();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('order');
};
