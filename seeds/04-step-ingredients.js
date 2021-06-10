exports.seed = function(knex, Promise) {
  return knex('step_ingredients').insert([
    {step_id: '1', ingredients_id: '1', quantity: '1 Box'},
    {step_id: '2', ingredients_id: '2', quantity: '1 Pot full'},
    {step_id: '1', ingredients_id: '3', quantity: '1 Can of red sauce'},
    {step_id: '1', ingredients_id: '4', quantity: '1 Bag of ravioli'},
    {step_id: '2', ingredients_id: '6', quantity: '1 18oz bottle'},
    {step_id: '3', ingredients_id: '5', quantity: '1 Kbar Knife'}
  ]);
};
