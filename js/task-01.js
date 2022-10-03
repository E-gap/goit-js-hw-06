const items = document.querySelectorAll(".item");
console.log(`Number of categories:`, items.length);



for (const item of items) {
   
    const category = item.querySelector("h2");
    console.log(`Category:`, category.textContent);    
    const elements = item.querySelectorAll("li");
    console.log(`Elements:`, elements.length);

};