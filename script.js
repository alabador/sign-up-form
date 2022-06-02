const pw = document.querySelector('#password');
const pwConfirm = document.querySelector('#confirm-password');
const form = document.querySelector('form');


pwConfirm.addEventListener('input', function(e) {
    if(pwConfirm.value !== pw.value){
        pw.setCustomValidity('Passwords do not match');
        pw.reportValidity();
        pwConfirm.setCustomValidity('Passwords do not match');
        pwConfirm.reportValidity();
    }
    else {
        pwConfirm.setCustomValidity('');
        pw.setCustomValidity('');
    }
})