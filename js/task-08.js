const form = document.querySelector('.login-form')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')


const object = {};

const createObject = (event) => {
    event.preventDefault(); 
    if (email.value === "" || password.value === "") {
        alert("Заповнені не всі обовязкові поля")
    } else
    
    object.email = email.value;
    object.password = password.value;
    
    console.log(object);
    event.currentTarget.reset();
}

form.addEventListener('submit', createObject);