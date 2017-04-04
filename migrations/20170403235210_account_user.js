
exports.up = (knex, Promise) => {
  return knex.schema.createTable('account_user', account_user => {
      account_user.text('account').references('account.id');
      account_user.integer('user').references('user.id');
      account_user.primary(['account', 'user']);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('account_user');
};