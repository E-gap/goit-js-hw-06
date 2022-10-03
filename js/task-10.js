function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const quantity = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const array = [];

const createBoxes = () => {
  let width = 30;
  let height = 30;
  
  for (let i = 1; i <= Number(quantity.value); i += 1) {
    
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    width += 10;
    height += 10;
    array.push(div);
    
  }
  console.log(array);
  boxes.append(...array);  

}

createButton.addEventListener('click', createBoxes)

const destroyBoxes = () => {
  const divs = boxes.querySelectorAll('div')
  
  for (const div of divs) {
    div.remove();
  }
}

destroyButton.addEventListener('click', destroyBoxes);
  
  

