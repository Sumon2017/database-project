const mongoose = require('mongoose');

let vaccineNames = new mongoose.Schema({
    name : {
        type : String ,
        require : true 
    }
});

module.exports = mongoose.model('vaccineNames',vaccineNames);