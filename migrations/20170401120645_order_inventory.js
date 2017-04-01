
exports.up = (knex, Promise) => {
  return knex.schema.createTable('order_inventory', order_inventory => {
    order_inventory.integer('order').references('order.id').onDelete('cascade');
    order_inventory.integer('inventory').references('inventory.id').onDelete('cascade');
    order_inventory.primary(['order', 'inventory']);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('order_inventory');
};

