const path = require('path');
const signUpInfo = require(path.join(__dirname,'..','..','..','dbSchemas','signUpInfo'));

const updateLastDonation = async ( req , res ) => {

    const email = res.locals.email;
    let data = await signUpInfo.find({email});
    data=data[0];
    let date = req.body.date;

    signUpInfo.findByIdAndUpdate(data._id,{ lastDonation : date } ,function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated User : ", docs);
                };
            }

    );

    res.json({
        msg : 'last donation date updated',
    });

};

module.exports = updateLastDonation ;