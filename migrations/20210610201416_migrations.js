exports.up =  function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipes_id')
        tbl.string('recipes_name', 128).notNullable().unique()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredients_id')
        tbl.string('ingredients_name', 128).notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.integer('step_number')
        tbl.string('step_instructions', 128).notNullable()
        tbl.integer('recipes_id')
          .unsigned()
          .notNullable()
          .references('recipes_id')
          .inTable('recipes')
          .onDelete('RESTRICT')
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredients_id')
        tbl.integer('step_id')
          .unsigned()
          .notNullable()
          .references('step_id')
          .inTable('steps')
          .onDelete('RESTRICT')
        tbl.integer('ingredients_id')
          .unsigned()
          .notNullable()
          .references('ingredients_id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
        tbl.string('quantity', 128).notNullable()  
    })
  };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
