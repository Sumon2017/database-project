const path = require('path');
const vaccineInfo = require(path.join(__dirname,'..','..','..','dbSchemas','vaccineInfo'));

const delMyVaccine = async (req,res) => {

    const email = res.locals.email;
    const vaccine = req.body.vaccine;

    try{
        let vac = await vaccineInfo.find({vaccine , email});
        if( vac.length == 0){
            res.json({
                msg : 'you didnt take it'
            })
            return ;
        }
        

        vac=vac[0];


        vaccineInfo.findByIdAndDelete(vac._id).then( async ()=> {
            res.json({
                msg : 'success'
            })
        });
    }
    catch(err){
        console.log(err);
    }
    
};

module.exports=delMyVaccine;