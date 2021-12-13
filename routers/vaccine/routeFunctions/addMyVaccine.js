const path = require('path');
const vaccineInfo = require(path.join(__dirname,'..','..','..','dbSchemas','vaccineInfo'));
const signUpInfo = require(path.join(__dirname,'..','..','..','dbSchemas','signUpInfo'));

const addMyVaccine = async (req,res) => {

    const email = res.locals.email;
    const vaccine = req.body.vaccine;

    try{
        let vac = await vaccineInfo.find({vaccine , email});
        if( vac.length != 0){
            res.json({
                msg : 'already added this vaccine'
            })
            return ;
        }
        

        let data = await signUpInfo.find({email});
        data = data[0];


        vaccineInfo.create({
            vaccine,
            name : data.name ,
            reg : data.reg ,
            dep : data.dep ,
            email ,
            lastBooster : '0'
        }).then( async ()=> {
            res.json({
                msg : 'success'
            })
        });
    }
    catch(err){
        console.log(err);
    }
    
};

module.exports=addMyVaccine;