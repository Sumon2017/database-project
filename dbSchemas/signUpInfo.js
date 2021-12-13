const mongoose = require('mongoose');

let signUpInfo = new mongoose.Schema({
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
        unique : true , 
        maxLength : [50,'email should be within 50 characters'],
    },
    bloodGroup : {
        type : String ,
        require : true ,
    },
    donate : {
        type : String ,
        require : true ,
    },
    phone : {
        type : String ,
        require : true ,
    },
    password : {
        type : String,
        require : true ,
    },
    lastDonation : {
        type : String ,
        require : true ,
    },
    available : {
        type : String ,
        require : true ,
    },

});

module.exports = mongoose.model('signUpInfo',signUpInfo);