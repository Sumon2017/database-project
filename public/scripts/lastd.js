const ld = function(){

    let date = document.querySelector('#lastdonate').value;

    if(date==""){
        alert('input fields should not be null');
        return;
    }

    let send_obj = {
        date
    };

    fetch('http://localhost:3001/blooddonation/updatelastdonation',{
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
            alert(data.msg)
            console.log('success');
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};


const av = function(){


    fetch('http://localhost:3001/blooddonation/available',{
        method: 'GET',
        credentials : 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            alert(data.msg)
            console.log('success');
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};


const nav = function(){


    fetch('http://localhost:3001/blooddonation/notavailable',{
        method: 'GET',
        credentials : 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.json())
    .then(data => {
        setTimeout(()=>{
            alert(data.msg)
            console.log('success');
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    });

};