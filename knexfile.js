// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/fakedata',
    },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
