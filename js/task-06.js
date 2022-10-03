const length = document.querySelector("#validation-input");
const lengthValue = length.getAttribute("data-length");



const change = (event) => {
    const string = event.currentTarget.value;
    
    if (string.length === Number(lengthValue)) {

        console.log('fdgdf');
        length.classList.add("valid");
        length.classList.remove("invalid");
                

    } else {
        length.classList.add("invalid");
        length.classList.remove("valid");
    }
    }
    


length.addEventListener(`blur`, change);
