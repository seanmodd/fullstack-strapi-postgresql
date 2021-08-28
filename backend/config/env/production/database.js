const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env('DATABASE_URL'));
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false },
        },
        options: {
          ssl: false,
        },
      },
    },
  };
};

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env.DATABASE_URL);
//   return {
//     client: 'pg',
//     connection: {
//       host,
//       port,
//       user,
//       password,
//       database,
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//     },
//   };
// };
