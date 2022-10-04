const input = document.querySelector(`#name-input`)
const output = document.querySelector(`#name-output`)



const changed = (event) => {
    
    console.log(event.currentTarget.value);
    if (!event.currentTarget.value) {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
    }

}

input.addEventListener('input', changed);









