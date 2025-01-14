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
    }

    contactForm.reset(); 
})

const validateFirstName = () => {
    const firstName = contactForm.first.value.trim();
    if(firstName === "") {
        document.querySelector('.first-img').style.display = 'inline';
        document.querySelector('.first').innerHTML = "First Name can not be empty";
        contactForm.first.setAttribute('id', 'failed');
    }else if(!namePattern.test(firstName)) {
        document.querySelector('.first').innerHTML = "First Name must be 6 characters long";
    }else {
        document.querySelector('.first-img').style.display = 'none';
        document.querySelector('.first').innerHTML = "";
        contactForm.first.setAttribute('id', 'success');
    }
}
contactForm.first.addEventListener('keyup', event => {
    if(namePattern.test(event.target.value)) {
        contactForm.first.setAttribute('id', 'success');
        
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
    }else if(!namePattern.test(lastName)) {
        document.querySelector('.last').innerHTML = "Last Name must be 6 characters long";
    }else {
        document.querySelector('.last-img').style.display = 'none';
        document.querySelector('.last').innerHTML = "";
        contactForm.last.setAttribute('id', 'success');
    }
}
contactForm.last.addEventListener('keyup', event => {
    if(namePattern.test(event.target.value)) {
        contactForm.last.setAttribute('id', 'success');
        
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
    }else if(!emailPattern.test(email)) {
        document.querySelector('.email').innerHTML = "Looks like this is not an email";
    }else {
        document.querySelector('.email-img').style.display = 'none';
        document.querySelector('.email').innerHTML = "";
        contactForm.email.setAttribute('id', 'success');
    }
}
contactForm.email.addEventListener('keyup', event => {
    if(emailPattern.test(event.target.value)) {
        contactForm.email.setAttribute('id', 'success');
        
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
    }else if(!passwordPattern.test(password)) {
        document.querySelector('.password').innerHTML = "Password must be at least 8 letters icluding special characters, lowercase, uppercase and numbers eg. Okedo123@";
    }else {
        document.querySelector('.password-img').style.display = 'none';
        document.querySelector('.password').innerHTML = "";
        contactForm.password.setAttribute('id', 'success');
    }
}
contactForm.password.addEventListener('keyup', event => {
    if(passwordPattern.test(event.target.value)) {
        console.log("passed");
        contactForm.password.setAttribute('id', 'success');
        
    }else {
        console.log("failed");
        contactForm.password.setAttribute('id', 'failed');
    }
})

const clearErrors = () => {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = "";
    });
};
