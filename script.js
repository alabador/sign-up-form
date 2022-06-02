const pw = document.querySelector('#password');
const pwConfirm = document.querySelector('#confirm-password');

pwConfirm.addEventListener('input', function(e) {
    if(pwConfirm.value !== pw.value){
        pwConfirm.style.borderColor = 'red';
        pwConfirm.style.outline = 'none';
        pwConfirm.validity.valid;
    }
    else {
        pwConfirm.style.borderColor = '#6abad4';
    }
})