// DOM Manipulation means using javascript to change the content, structure, or style of a web
// page while it's running 


// Creating elements 
const plm = document.createElement("p");   // Creating a new HTML Element, a <p>
plm.innerText = "This is a text added dynamically";   // Setting the text content of the new <p> tag
document.body.appendChild(plm);   // First pointing to the body and then adding <p>, appendChild = adding a new element at the end of the line, always 
console.log(plm);



// Insert Elements 
const span = document.createElement("span");
span.innerText = "I am a span";

const plme = document.querySelector("p"); // Finds the p tag on othe page and stores it in plme.
// console.log(plme.nextElementSibling);
document.body.insertBefore(span, plme);  // Placing the span element before the plme element inside the body, so that it will appear above 
// the plme element.



