const path = require('path');
const vaccineInfo = require(path.join(__dirname,'..','..','..','dbSchemas','vaccineInfo'));

const addMyBooster = async (req,res) => {

    const email = res.locals.email;
    const vaccine = req.body.vaccine;
    const boosterTime = req.body.boosterTime;

    try{
        let data = await vaccineInfo.find({vaccine , email});
        if( data.length == 0){
            res.json({
                msg : `you are not vaccinated against ${vaccine}`
            });
            return ;
        }
        data = data[0];

        vaccineInfo.findByIdAndUpdate(data._id , {
            lastBooster : boosterTime
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

module.exports=addMyBooster;