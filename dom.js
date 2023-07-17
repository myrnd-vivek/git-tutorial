/*===== Traversing the DOM =====*/

const itemList = document.querySelector("#items");

// Parent Node

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f5f7f9"

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f5f7f9"

// Child Node 

// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[2].style.backgroundColor = 'yellow'

// First Child 

// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "hello world"

// Last Child

// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.color = 'green'
 
// Next Sibling

// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// Previous Sibling

// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)


// Create Element

const newDiv = document.createElement("div");

// Adding Class

newDiv.className = "hello";

// Adding id

newDiv.id = "hello1";

// Adding attribute

newDiv.setAttribute('titel','hello div');

// Create text node

const newDivText = document.createTextNode("hello world");

// Add text to div
newDiv.appendChild(newDivText)


const container = document.querySelector("header .container");
const h1 = document.querySelector("header h1")

container.insertBefore(newDiv,h1)
console.log(newDiv)

const li = document.createElement("li")
const items = document.querySelector("#items");
const item = document.querySelector(".list-group-item:nth-child(1)")
items.insertBefore(newDiv,item)