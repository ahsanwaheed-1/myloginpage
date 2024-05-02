const button = document.getElementById('loginButton');
const whiteModeButton = document.getElementById('whiteModeBtn');
const loginBtn = document.getElementById('loginButton');

button.addEventListener('click', function() {

    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;  

    console.log("Email: " +email);
    console.log("Password", +password);
});

set_colors();

function set_colors() {
    document.getElementById('top').style.backgroundColor = 'darkslategray';
    document.getElementById('sub').style.backgroundColor = 'gray';
    document.getElementById('Login').style.backgroundColor = '#584141';
    document.getElementById('whiteModeBtn').innerHTML = 'Light Mode';
    document.getElementById('whiteModeBtn').style.backgroundColor = 'black';
    document.getElementById('whiteModeBtn').style.color = 'white';
}

whiteModeButton.addEventListener('click', function() {

    if(document.getElementById('top').style.backgroundColor == 'darkslategray') 
    {
        document.getElementById('top').style.backgroundColor = 'pink';
        document.getElementById('sub').style.backgroundColor = 'lightgray';
        document.getElementById('Login').style.backgroundColor = 'white';
        document.getElementById('header').style.color = 'black';
        document.getElementById('whiteModeBtn').innerHTML = 'Dark Mode';
        document.getElementById('whiteModeBtn').style.backgroundColor = 'cyan';
        document.getElementById('whiteModeBtn').style.color = 'black';
    }
    else {
        set_colors();
    }
});
