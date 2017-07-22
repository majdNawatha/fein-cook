var mongoose = require('mongoose'),
	cat = require('./catSchema');

var schema = mongoose.Schema,
    recipeSchema = new schema({
    	recipeID: String,
        recipeName: String,
        Cat: String,
        lvl: String,
        addDate: { type: Date , default: Date.addDate },
        howTo: [String],
        img: [String],
        summ: String,
        prod :[String]
    }, {collection: 'recipes'});

    
var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;