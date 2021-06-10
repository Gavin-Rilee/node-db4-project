exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {step_number: '1', step_instructions: 'Boil a pot of water', recipes_id: '1'},
    {step_number: '2', step_instructions: 'Add the box of kraft mac and cheese and wait 8 mins then strain and stir in cheese sauce packet', recipes_id: '1'},
    {step_number: '3', step_instructions: 'Serve', recipes_id: '1'},
    {step_number: '1', step_instructions: 'Put red sauce in a pot heat to a boil then simmer at the same time put water onto boil for the ravioli', recipes_id: '2'},
    {step_number: '2', step_instructions: 'Cook ravioli “al dente” according to package directions. Strain pasta', recipes_id: '2'},
    {step_number: '3', step_instructions: 'Pour red sauce over ravioli and serve!', recipes_id: '2'},
    {step_number: '1', step_instructions: 'Find a bear in the woods', recipes_id: '3'},
    {step_number: '2', step_instructions: 'Get naked and grease up with peanut oil and ready to run', recipes_id: '3'},
    {step_number: '3', step_instructions: 'Pull the knife out and run straight for its paws the oil should make him slip right off you', recipes_id: '3'},
    {step_number: '4', step_instructions: 'Cut off paw and go home to bake for 45 minutes then enjoy :)', recipes_id: '3'}
  ]);
};