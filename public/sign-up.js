// // let iconError1 = document.querySelector(".icon-1");
// // let iconError2 = document.querySelector(".icon-2");
// // let iconError3 = document.querySelector(".icon-3");
// // let iconError4 = document.querySelector(".icon-4");

// const iconError = document.querySelector('.icon-error');

// const signUpForm = document.querySelector('form');
// signUpForm.addEventListener("submit", event => {
//     event.preventDefault();

//     let isValid = true;

//     const validators = [
//         validateFirstName(),
//         validateLastName(),
//         validateEmail(),
//         validatePassword()
//     ]

//     validators.forEach(validator => {
//         if(!validator){
//             isValid = false;  
//         }
//     });

//     if(isValid){
//         alert(`Message Sent!
//                 Thanks for completing the form. We'll be in touch soon!`);
//                 signUpForm.reset();
//     }
//         clearErrors();
// })

// const validateFirstName = () => {
//     const firstName = document.getElementById("first-name");
//     const errorFirstName = document.getElementById("error-first-name");
//     const errorBorderFirstName = document.querySelector("#first-name");

//     firstName.addEventListener("input", () => {
//         errorFirstName.textContent = "";
//         // iconError1.style.display = "none";
//         // iconError2.style.top = "16.7em";
//         // iconError3.style.top = "22.6em";
//         // iconError4.style.top = "28.3em";
//         errorBorderFirstName.style.borderColor = "";
//     })
//     if(firstName.value.trim() === ""){
//         errorFirstName.textContent = "First Name cannot be empty";
//         iconError1.style.display = "block";
//         errorBorderFirstName.style.borderColor = "hsl(0, 100%, 74%)";
//     }else{
//         errorFirstName.textContent = ""; 
//         // iconError1.style.display = "none";
//     }
// }

// const validateLastName = () => {
//     const lastName = document.getElementById("last-name");
//     const errorLastName = document.getElementById("error-last-name");
//     const errorBorderLastName = document.querySelector("#last-name");

//     lastName.addEventListener("input", () => {
//         errorLastName.textContent = "";
//         // iconError2.style.display = "none";
//         // iconError3.style.top = "21.3em";
//         // iconError4.style.top = "27em";
//         errorBorderLastName.style.borderColor = "";
//     })
//     if(lastName.value.trim() === ""){
//         errorLastName.textContent = "Last Name cannot be empty";
//         iconError.style.display = "block";
//         errorBorderLastName.style.borderColor = "hsl(0, 100%, 74%)";
//     }else{
//         errorLastName.textContent = ""; 
//         // iconError2.style.display = "none";
//     }
// }

// const validateEmail = () => {
//     const email = document.getElementById("email");
//     const errorEmail = document.getElementById("error-email");
//     const errorBorderEmail = document.querySelector("#email");
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     email.addEventListener("input", () => {
//         errorEmail.textContent = "";
//         // iconError3.style.display = "none";
//         // iconError4.style.top = "26em";
//         errorBorderEmail.style.borderColor = "";
//     });

//     if(email.value.trim() === ""){
//         errorEmail.textContent = "Email cannot be empty";
//         // iconError3.style.display = "block";
//         errorBorderEmail.style.borderColor = "hsl(0, 100%, 74%)";
//     }else if(!emailPattern.test(email.value.trim())){
//         errorEmail.textContent = "Looks like this is not an email";
//         // iconError3.style.display = "block";
//         // iconError4.style.top = "27.1em";
//         errorBorderEmail.style.borderColor = "hsl(0, 100%, 74%)";
//     }else{
//         errorEmail.textContent = "";
//         iconError3.style.display = "none";
//     }
// }

// const validatePassword = () => {
//     const password = document.getElementById("password");
//     const errorPassword = document.getElementById("error-password");
//     const errorBorderPassword = document.querySelector("#password");
//     passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%&?*])[A-Za-z\d!@#$%&*?]{8,}$/;

//     password.addEventListener("input", () => {
//         errorPassword.textContent = "";
//         iconError4.style.display = "none";
//         errorBorderPassword.style.borderColor = "";
//     })

//     if(password.value.trim() === ""){
//         errorPassword.textContent = "Password cannot be empty";
//         iconError4.style.display = "block";
//         errorBorderPassword.style.borderColor = "hsl(0, 100%, 74%)";
//     }else if(!passwordPattern.test(password.value.trim())){
//         errorPassword.textContent = "Password must be at least 8 letters icluding special characters, lowercase, uppercase and numbers eg. Okedo123@";
//         iconError4.style.display = "block";
//         errorBorderPassword.style.borderColor = "hsl(0, 100%, 74%)";
//     }
//     else{
//         errorPassword.textContent = "";
//         iconError4.style.display = "none";
//     }
// }

// const clearErrors = () => {
//     const errors = document.querySelectorAll("error");
//     errors.forEach(error => {
//         error.textContent = "";
//     })
// }


const contactForm = document.querySelector('form');
const namePattern = /^[a-z0-9]{6,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%&?*])[A-Za-z\d!@#$%&*?]{8,}$/;

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const validators = [
        validateFirstName(),
        validateLastName(),
        validateEmail(),
        validatePassword()
    ]
    
    validators.forEach(validate => {
        if(validate) {
            isValid = false;
        }
    //     // contactForm.reset();
    })
    if(isValid){
                alert(`Message Sent!
                        Thanks for completing the form. We'll be in touch soon!`);
                        contactForm.reset();
            }
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
        console.log("passed");
        contactForm.email.setAttribute('id', 'success');
        
    }else {
        console.log("failed");
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