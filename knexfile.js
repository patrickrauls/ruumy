// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};