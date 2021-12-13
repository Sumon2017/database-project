const path = require('path');
const vaccineInfo = require(path.join(__dirname,'..','..','..','dbSchemas','vaccineInfo'));

const myVaccineInfo = async (req,res) => {

    const email = res.locals.email;

    try{
        let result = await vaccineInfo.find({email});
        if(result.length==0){
            res.json([]);
        }
        else{
            let arr = [];
            result.forEach(element => {
                let { vaccine , name , reg , dep  , lastBooster } = element;
                arr.push({
                    vaccine ,
                    name ,
                    reg ,
                    dep ,
                    lastBooster ,
                });
            });
            res.json(arr);
        }
    }
    catch(err){
        console.log(err);
    }
};

module.exports=myVaccineInfo;