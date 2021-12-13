const addvaccine = function(){
    document.querySelector('#v1').classList.add('addremove');
    document.querySelector('#v2').classList.remove('addremove');
};

const addbooster = function(){
    document.querySelector('#b1').classList.add('addremove');
    document.querySelector('#b2').classList.remove('addremove');
};

const removevaccine = function(){
    document.querySelector('#rv1').classList.add('addremove');
    document.querySelector('#rv2').classList.remove('addremove');
};


let vacines = [];

fetch('http://localhost:3001/vaccine/getvaccinenames',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            if(data.msg){
                if( data.msg == 'no access token , pls login' || data.msg == 'expired login again'){
                    alert(data.msg);
                    if(1)
                    window.location.href = "/index.html" ;
                    
                }
            }
            else{
                let vac_select = document.querySelector('#vac_select');
                let vac_select2 = document.querySelector('#vac_select2');
                let vac_select3 = document.querySelector('#vac_select3');
                data.forEach(element => {
                    vac_select.add( new Option(`${element.name}`,`${element.name}`) , undefined );
                    vac_select2.add( new Option(`${element.name}`,`${element.name}`) , undefined );
                    vac_select3.add( new Option(`${element.name}`,`${element.name}`) , undefined );
                });
            }
            
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });


fetch('http://localhost:3001/vaccine/myvaccineinfo',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.json())
    .then(data => {
        console.log(data)
        if(data.msg){

                return ;
        }
        setTimeout(()=>{

            let our_table = document.querySelector('#vtable');
            let i,j,row;
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
    });

const addv = function(){

    let vaccine = document.querySelector('#vac_select').value;
    if(vaccine==""){
        alert('input field should not be null');
        return ;
    }
    let send_obj = {
        vaccine,
    };
    fetch('http://localhost:3001/vaccine/addmyvaccine',{
        method: 'POST',
        credentials : 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(send_obj)
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            document.querySelector('#v1').classList.remove('addremove');
            document.querySelector('#v2').classList.add('addremove');
            alert(data.msg)
            console.log('success');
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};

const addb = function(){

    let vaccine = document.querySelector('#vac_select2').value;
    if(vaccine==""){
        alert('input field should not be null');
        return ;
    }

    let boosterTime = document.querySelector('#lastBooster').value;
    

    let send_obj = {
        vaccine,
        boosterTime
    };
    fetch('http://localhost:3001/vaccine/addmybooster',{
        method: 'POST',
        credentials : 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(send_obj)
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            document.querySelector('#b1').classList.remove('addremove');
            document.querySelector('#b2').classList.add('addremove');
            alert(data.msg)
            console.log('success');
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};


const delv = function(){

    let vaccine = document.querySelector('#vac_select3').value;
    if(vaccine==""){
        alert('input field should not be null');
        return ;
    }
    let send_obj = {
        vaccine,
    };
    fetch('http://localhost:3001/vaccine/delmyvaccine',{
        method: 'POST',
        credentials : 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(send_obj)
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            document.querySelector('#rv1').classList.remove('addremove');
            document.querySelector('#rv2').classList.add('addremove');
            alert(data.msg)
            console.log('success');
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};