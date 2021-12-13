


const logout = function(){

    fetch('http://localhost:3001/account/logout',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            
            alert(data.msg);
            window.location.href = "/index.html";
            
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};


fetch('http://localhost:3001/vaccine/getvaccinenames',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.json())
    .then(data => {
            if(data.msg){
                if( data.msg == 'no access token , pls login' || data.msg == 'expired login again'){
                    document.querySelector('#corner1').classList.remove('addremove');
                    document.querySelector('#corner2').classList.add('addremove');
                }
            }
            else{
                document.querySelector('#corner1').classList.add('addremove');
                document.querySelector('#corner2').classList.remove('addremove');
            }
            
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });