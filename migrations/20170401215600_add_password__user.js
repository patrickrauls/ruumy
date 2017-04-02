
exports.up = (knex, Promise) => {
  return knex.schema.table('user', user => {
      user.text('password').notNullable();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.table('user', user => {
      user.dropColumn('password');
  })
};
