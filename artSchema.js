var mongoose = require('mongoose');
	

var schema = mongoose.Schema,
    artSchema = new schema({
    	artID: String,
        artName: String,
        artBody: String,
        addDate: { type: Date },
        img: String
    }, {collection: 'articles'});

    
var article = mongoose.model('article', artSchema);

module.exports = article;