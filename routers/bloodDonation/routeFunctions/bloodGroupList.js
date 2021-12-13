const path = require('path');
const signUpInfo = require(path.join(__dirname,'..','..','..','dbSchemas','signUpInfo'));

const bloodGroupList = async (req,res) => {

    let filter_val = req.body.filter_val;
    let filter_obj;
    if( filter_val == ""){
        filter_obj = {}
    }
    else{
        filter_obj = {bloodGroup:filter_val}
    }

    try{
        let result = await signUpInfo.find(filter_obj).exec();
        if(result.length==0){
            res.json([]);
        }
        else{
            let arr = [];
            result.forEach(element => {
                let { reg , name , dep , bloodGroup , phone } = element;
                arr.push({
                    reg ,
                    name ,
                    dep ,
                    bloodGroup ,
                    phone ,
                });
            });
            res.json(arr);
        }
    }
    catch(err){
        console.log(err);
    }

};


module.exports=bloodGroupList;