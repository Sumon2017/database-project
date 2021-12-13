const clickSignUp = function(){

    let name = document.querySelector('#fullname').value;
    let reg = document.querySelector('#reg').value;
    let dep = document.querySelector('#dpt').value;
    let email = document.querySelector('#mail').value;
    let bloodGroup = document.querySelector('#bgp').value;
    let donate = document.querySelector('#avail').value;
    let phone = document.querySelector('#phone').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#confirmpass').value;

    if( name == "" || reg == "" || dep == "" || email == "" || bloodGroup == "" || donate == "" || phone == "" || password == "" || password2 == "" ){
        alert('input field should not be null');
        return ;
    }

    if( password != password2 ){
        alert('passwords didn\'t match');
        return ;
    }

    let send_obj = {
        name,
        reg,
        dep,
        email,
        bloodGroup,
        donate,
        phone,
        password
    };
    fetch('http://localhost:3001/account/signup',{
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
            if( data.msg == 'signed up!')
            window.location.href = "/index.html" ;
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    })
};