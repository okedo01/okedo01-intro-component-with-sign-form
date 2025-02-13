const contactForm = document.querySelector('form');
const namePattern = /^[a-z0-9]{6,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%&?*])[A-Za-z\d!@#$%&*?]{8,}$/;

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const validators = [
        validateFirstName,
        validateLastName,
        validateEmail,
        validatePassword
    ]

    validators.forEach(validator => {
        if (!validator()) isValid = false;
    });

    if (isValid) {
        alert(`Message Sent!
        Thanks for completing the form. We'll be in touch soon!`);
        clearErrors(); 
        contactForm.reset(); 
    }
})

const validateFirstName = () => {
    const firstName = contactForm.first.value.trim();
    if(firstName === "") {
        document.querySelector('.first-img').style.display = 'inline';
        document.querySelector('.first').innerHTML = "First Name can not be empty";
        contactForm.first.setAttribute('id', 'failed');
        return false;
    }else if(!namePattern.test(firstName)) {
        document.querySelector('.first').innerHTML = "First Name must be 6 characters long";
        return false;
    }else {
        contactForm.first.setAttribute('id', 'success');
        return true;
    }
}
contactForm.first.addEventListener('keyup', event => {
    if(namePattern.test(event.target.value)) {
        contactForm.first.setAttribute('id', 'success');
        document.querySelector('.first-img').style.display = 'none';
        document.querySelector('.first').innerHTML = "";
        
        if(window.innerWidth < 485) {
            document.querySelector('.last-img').style.top = '32em';
            document.querySelector('.email-img').style.top = '38em';
            document.querySelector('.password-img').style.top = '43.8em';
        }
        else if(window.innerWidth >= 485 && window.innerWidth <= 855) {
            document.querySelector('.last-img').style.top = '30.2em';   
            document.querySelector('.email-img').style.top = '36.2em';
            document.querySelector('.password-img').style.top = '42.3em';         
        } 
        else if(window.innerWidth > 855) {   
            document.querySelector('.last-img').style.top = '18.7em';   
            document.querySelector('.email-img').style.top = '24.7em';
            document.querySelector('.password-img').style.top = '30.6em';         
        } 
        
    }else {
        contactForm.first.setAttribute('id', 'failed');
    }
})

const validateLastName = () => {
    const lastName = contactForm.last.value.trim();
    if(lastName === "") {
        document.querySelector('.last-img').style.display = 'inline';
        document.querySelector('.last').innerHTML = "Last Name can not be empty";
        contactForm.last.setAttribute('id', 'failed');
        return false;
    }else if(!namePattern.test(lastName)) {
        document.querySelector('.last').innerHTML = "Last Name must be 6 characters long";
        return false;
    }else {
        contactForm.last.setAttribute('id', 'success');
        return true;
    }
}
contactForm.last.addEventListener('keyup', event => {
    if(namePattern.test(event.target.value)) {
        contactForm.last.setAttribute('id', 'success');
        document.querySelector('.last-img').style.display = 'none';
        document.querySelector('.last').innerHTML = "";

        if(window.innerWidth < 485) {
            document.querySelector('.email-img').style.top = '36.7em';
            document.querySelector('.password-img').style.top = '42.5em';
        }
        else if(window.innerWidth >= 485 && window.innerWidth <= 855) {   
            document.querySelector('.email-img').style.top = '35em';
            document.querySelector('.password-img').style.top = '41em';         
        } 
        else if(window.innerWidth > 855) {      
            document.querySelector('.email-img').style.top = '23.45em';
            document.querySelector('.password-img').style.top = '29.4em';         
        } 
        
    }else {
        contactForm.last.setAttribute('id', 'failed');
    }
})

const validateEmail = () => {
    const email = contactForm.email.value.trim();
    if(email === "") {
        document.querySelector('.email-img').style.display = 'inline';
        document.querySelector('.email').innerHTML = "Email can not be empty";
        contactForm.email.setAttribute('id', 'failed');
        return false;
    }else if(!emailPattern.test(email)) {
        document.querySelector('.email').innerHTML = "Looks like this is not an email";
        return false;
    }else {
        contactForm.email.setAttribute('id', 'success');
        return true;
    }
}
contactForm.email.addEventListener('keyup', event => {
    if(emailPattern.test(event.target.value)) {
        contactForm.email.setAttribute('id', 'success');
        document.querySelector('.email-img').style.display = 'none';
        document.querySelector('.email').innerHTML = "";

        if(window.innerWidth < 485) {
            document.querySelector('.password-img').style.top = '41.5em';
        }
        
        else if(window.innerWidth >= 485 && window.innerWidth <= 855) {   
            document.querySelector('.password-img').style.top = '40em';         
        } 
        else if(window.innerWidth > 855) {      
            document.querySelector('.password-img').style.top = '28.25em';         
        } 
        
    }else {
        contactForm.email.setAttribute('id', 'failed');
    }
})

const validatePassword = () => {
    const password = contactForm.password.value.trim();
    if(password === "") {
        document.querySelector('.password-img').style.display = 'inline';
        document.querySelector('.password').innerHTML = "Password can not be empty";
        contactForm.password.setAttribute('id', 'failed');
        return false;
    }else if(!passwordPattern.test(password)) {
        document.querySelector('.password').innerHTML = "Password must be at least 8 letters icluding special characters, lowercase, uppercase and numbers eg. Okedo123@";
        return false;
    }else {
        contactForm.password.setAttribute('id', 'success');
        return true;
    }
}
contactForm.password.addEventListener('keyup', event => {
    if(passwordPattern.test(event.target.value)) {
        contactForm.password.setAttribute('id', 'success');
        document.querySelector('.password-img').style.display = 'none';
        document.querySelector('.password').innerHTML = "";
        
    }else {
        contactForm.password.setAttribute('id', 'failed');
    }
})

const clearErrors = () => {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = "";
    });
    contactForm.querySelectorAll('input').forEach(input => {
        input.removeAttribute('id'); 
    });
};