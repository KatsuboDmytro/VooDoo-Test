'use strict';

const signUp = document.querySelector('.signUp');
const modal = document.querySelector('.modal');
signUp.addEventListener('click', () => {
    modal.classList.remove('mt-(-48)');
    modal.classList.add('mt-0');
    setTimeout(() => {
        modal.classList.remove('mt-0');
        modal.classList.add('mt-(-48)');
    }, 2000)
})

const validateEmail = function() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    const validation = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/g;
    if (validation.test(email)) {
        document.querySelector('.isValid').textContent = '*Valid email address';
        document.querySelector('.isValid').style.color = 'green';
    } else {
      document.querySelector('.isValid').textContent = '*Invalid email address';
      document.querySelector('.isValid').style.color = 'red';
    }
};
document.querySelector('#submitEmail').addEventListener('click', validateEmail);