const path = require('path');
const bcrypt = require('bcrypt');
const signUpInfo = require(path.join(__dirname,'..','..','..','dbSchemas','signUpInfo'));

const signUp = async (req,res) => {
    let { name , reg , dep , email , bloodGroup , donate , phone , password } = req.body;
    let user;
    let lastDonation="0";
    let available='Yes';
    try{
        user = await signUpInfo.find({email}).exec();
        if(user.length){
            res.json({
                msg:'account already exists with this email'
            });
            return ;
        }
    }
    catch(err){
        console.log(err);
    }


    try{
        bcrypt.hash(password,11).then(async(hash)=>{
            signUpInfo.create({
                name,
                reg,
                dep,
                email,
                bloodGroup,
                donate,
                phone,
                password : hash ,
                lastDonation ,
                available ,
            })
        }).then(async()=>{
            res.json({
                msg:'signed up!'
            });
        });
    }
    catch(err){
        console.log(err);
    }
};


module.exports=signUp;