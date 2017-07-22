var mongoose = require('mongoose');

var schema = mongoose.Schema,
    prodSchema = new schema({
    	prodID: String,
        prodName: String,
        summ: String,
        img: String,
        addDate: { type: Date },
    }, {collection: 'products'});

    
var product = mongoose.model('product', prodSchema);

module.exports = product;