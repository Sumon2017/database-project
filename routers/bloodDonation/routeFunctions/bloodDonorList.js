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
                if(element.donate == 'Yes'){
                    let { reg , name , bloodGroup , lastDonation , phone , available } = element ;
                    arr.push({
                        reg ,
                        name ,
                        bloodGroup ,
                        lastDonation ,
                        phone ,
                        available ,
                    });
                }
            });
            res.json(arr);
        }
    }
    catch(err){
        console.log(err);
    }

};


module.exports=bloodGroupList;