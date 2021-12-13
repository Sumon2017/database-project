const makeTable = function(str=""){

    let our_table = document.querySelector('#bgtable');
    let i,j,row;

    let send_obj = {
        filter_val : str 
    };


    fetch('http://localhost:3001/blooddonation/bloodgrouplist',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(send_obj)
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data)
            if(data.msg){
                if(data.msg=='no access token , pls login'||data.msg=='expired login again'){
                    alert(data.msg);
                    return ;
                }
            }
            setTimeout(()=>{

                our_table.innerHTML=`<tr>
                    <th>Registration No.</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Blood Group</th>
                    <th>Phone</th>
                    </tr>`;

                i=1;
                data.forEach(element => {
                    row = our_table.insertRow(i);
                    i=i+1;
                    j=0;
                    for( prop in element ){
                        row.insertCell(j).innerHTML=`${element[prop]}`;
                        j=j+1;
                    }
                });
                console.log('success');
            },500)
        })
        .catch(err=>{
            console.log("could not fetch");
            console.log(err);
        })

};

const pressFilter = function(){
    let filter_val_str = document.querySelector("#filter_val").value;
    makeTable(filter_val_str);
};