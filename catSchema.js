var mongoose = require('mongoose');

var schema = mongoose.Schema,
    catSchema = new schema({
        CatName: String,
        CatId: String
    }, {collection: 'category'});

    
var cat = mongoose.model('cat', catSchema);

module.exports = cat;
