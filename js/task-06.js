const length = document.querySelector("#validation-input");
const lengthValue = length.getAttribute("data-length");



const change = (event) => {
    const string = event.currentTarget.value;
    
    if (string.length === Number(lengthValue)) {
        
        length.classList.add("valid");
    } else
    length.classList.add("invalid");
}

length.addEventListener(`blur`, change);
