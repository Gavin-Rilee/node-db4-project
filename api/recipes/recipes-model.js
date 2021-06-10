// const db = require('../../data/db-config')

// async function getRecipeById(recipe_id) {
//    const recipesObj = await db('recipes as r')
//    .where('recipe_id', recipe_id).first()

//    const stepsArray = await db('steps as s')
//    .where('s.recipe_id', recipe_id)
//    .select('s.step_id', 's.step_number', 's.step_instructions')

//    const ingredientsArray = await db('ingredients as i')
//    .leftJoin('step_ingredients as si', 'i.ingredients_id','si.ingredient_id')
//    .select('i.ingredient_id', 'i.ingredient_name', 'si.quantity')

//     stepsArray.foreach(steps => {
//         if(steps.step_id){
//             stepsArray.push({
//                 ingredients:[{
//                     ingredient_id: ingredientsArray.ingredient_id,
//                     ingredient_name: ingredientsArray.ingredient_name,
//                     quantity:ingredientsArray.quantity
//                 }]
//             })
//         }
//     })

//    recipesObj.steps = stepsArray
//    return recipesObj
       
// }

// module.exports = {getRecipeById}


const db = require('../../data/db-config');
async function getRecipeById(recipe_id) {
const cookbook = await db('recipes as r')
     .leftJoin('steps as s', 'r.recipes_id', 's.recipes_id')
     .leftJoin('step_ingredients as si','s.step_id','si.step_id')
     .leftJoin('ingredients as i','si.ingredients_id','i.ingredients_id')
     .select('r.recipes_id', 'r.recipes_name', 'r.created_at', 's.step_id', 's.step_number', 's.step_instructions','i.ingredients_id', 'i.ingredients_name', 'si.quantity')
     .where('r.recipes_id', recipe_id)

    const recipes = {
        recipe_id: cookbook[0].recipe_id,
        recipes_name: cookbook[0].recipe_name,
        steps: cookbook.reduce((acc, row) => {
            if(!row.ingredients_id){
                return acc.concat({
                    step_id: row.step_id, 
                    step_number: row.step_number, 
                    step_instructions: row.step_instructions,
                    ingredients: [
                        {
                         ingredients_id: row.ingredients_id, 
                         ingredients_name: row.ingredients_name, 
                         quantity: row.quantity   
                        }
                    ]
                })

            }
            const currentStep = acc.find(step => step.step_id === row.step_id)
            currentStep.ingredients.push({
                ingredients_id: row.ingredients_id,
                ingredients_name: row.ingredients_name,
                quantity: row.quantity,
            })
            return acc
        },[])
    }
    return recipes

    
       
}