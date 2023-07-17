const header = document.getElementById('main-header');
const additem = document.getElementById('add-item');

header.style.border = "2px solid black";
additem.style.fontWeight = "bolder"
additem.style.color = "green"

const listItem = document.getElementsByClassName("list-group-item");

listItem[2].style.backgroundColor = "green";

for(let list of listItem) {
  list.style.fontWeight = "bolder"
}


