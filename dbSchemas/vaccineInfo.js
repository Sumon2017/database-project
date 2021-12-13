const mongoose = require('mongoose');

let vaccineInfo = new mongoose.Schema({
    vaccine : {
        type : String ,
        require : true ,
    },
    name : {
        type : String ,
        require : true ,
    },
    reg : {
        type : String ,
        require : true ,
    },
    dep : {
        type : String ,
        require : true ,
    },
    email : {
        type : String,
        required : [true,'give an email'],
        trim : true , 
        maxLength : [50,'email should be within 50 characters'],
    },
    lastBooster : {
        type : String ,
        require : true ,
    }

});

module.exports = mongoose.model('vaccineInfo',vaccineInfo);