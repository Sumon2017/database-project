const path = require('path');
const vaccineNames = require(path.join(__dirname,'..','..','..','dbSchemas','vaccineNames'));

const getVaccineNames = async (req,res) => {

    const email = res.locals.email;

    try{
        let result = await vaccineNames.find({});
        if(result.length==0){
            res.json([]);
        }
        else{
            let arr = [];
            result.forEach(element => {
                let { name } = element;
                arr.push({
                    name
                });
            });
            res.json(arr);
        }
    }
    catch(err){
        console.log(err);
    }
};

module.exports=getVaccineNames;