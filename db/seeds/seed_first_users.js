
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  // return knex.schema.dropTable('users')  // it is not suppose to work  because the table is gone..
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'rowValue1', email: "fake1@email.com"},
        {username: 'rowValue2'},
        {username: 'rowValue3'}
      ]);
    });
};
