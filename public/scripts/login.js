const clickLogin = function(){
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pass').value;
    if(email==""||password==""){
        alert('input field should not be null');
        return ;
    }
    let send_obj = {
        email,
        password
    };
    fetch('http://localhost:3001/account/login',{
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
            if( data.msg == 'you are logged in')
            window.location.href = "/index.html" ;
        },500)
    })
    .catch(err=>{
        console.log("could not fetch");
        console.log(err);
    })
};