
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredients_name: 'Box of kraft mac and cheese'},
    {ingredients_name: 'Water'},
    {ingredients_name: 'Red sauce'},
    {ingredients_name: 'A bag of cheese ravioli'},
    {ingredients_name: 'Knife'},
    {ingredients_name: 'Peanut oil'}
  ]);
};
