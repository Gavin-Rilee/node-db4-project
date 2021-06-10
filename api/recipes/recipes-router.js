const router = require('express').Router();
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res) => {
    const id = req.params.recipe_id;
    Recipe.getRecipeById(id)
    .then(recipe => {
        if(!recipe){
            res.status(404).json({
                message:`recipe with id ${id} could not be found`
            })
        } else {
            res.json(recipe)
        }
    })
    .catch(err => res.status(500).json({err}))
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in router',
        message: err.message,
        stack: err.stack,

    })
})

module.exports = router