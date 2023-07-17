const ul = document.querySelector("#items");

const li = document.createElement("li");
li.textContent = 'Item 5';
ul.appendChild(li)


const items = document.getElementsByClassName("list-group-item");

for(let item of items) {
  item.style.backgroundColor = "#f5f9f7";
}

const items2 = document.getElementsByTagName("li");
for(let item of items2) {
  item.style.fontWeight = "bolder";
}

const secondEl = document.querySelector(".list-group-item:nth-child(2)");
const thirdEl = document.querySelector(".list-group-item:nth-child(3)");
secondEl.style.backgroundColor = 'green';
thirdEl.style.display = 'none';