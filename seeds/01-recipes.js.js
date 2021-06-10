exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipes_id: 1, recipes_name: 'Mac and cheese'},
    {recipes_id: 2, recipes_name: 'Cheese ravioli'},
    {recipes_id: 3, recipes_name: 'Bear paw'}
  ]);
};
