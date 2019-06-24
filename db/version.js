// version.js
const options = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'test_db',
        password: 'test_db',
        database: 'test_db'
    }
};

const knex = require('knex')(options);

knex.raw("SELECT * FROM famous_people")
  .then((version) => console.log((version[0][0])))
  .catch((err) => { console.log( err); throw err })
  .finally(() => {
      knex.destroy();
});