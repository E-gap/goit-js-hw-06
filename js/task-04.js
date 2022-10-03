let counterValue = 0;
let value = document.querySelector(`#value`);


const increase = () => {
    counterValue += 1;
    value.textContent = counterValue;
    
}


const reduce = () => {
    counterValue -= 1;
    value.textContent = counterValue;
    
}


const plus = document.querySelector(`button[data-action="increment"]`)
plus.addEventListener("click", increase)

const minus = document.querySelector(`button[data-action="decrement"]`)
minus.addEventListener("click", reduce);







