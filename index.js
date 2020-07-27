let userRecieved = document.getElementById('userTag');
let returnRecieved = document.getElementById('returnMsg');

userRecieved.addEventListener('keyup', validUser);

 function validUser() {
    returnRecieved.innerHTML = '';
    let num = parseInt(userRecieved.value);
    try {
        if(typeof(num) === 'number') throw 'You cannot enter a number';
        if(userRecieved.value.length < 5) throw 'Username is too short.';
        if(userRecieved.value.length > 12) throw 'Username is too long.';
    }
    catch(error) {
        console.log('error', error);
        returnRecieved.innerHTML = error;
    }    
}