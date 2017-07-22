const consts = require('./consts'),
      mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
mongoose.connect(consts.MLAB_KEY);
const conn = mongoose.connection;
    
console.log("loaded monngose");

conn.on('error',
    (err) => {
        console.log(`connection error: ${err}`);
    });


