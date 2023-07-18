const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.getElementById('filter');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const name = document.getElementById("item");
	const description = document.getElementById("desc");
	
  const li = document.createElement("li");
	li.className = "list-group-item";
	li.appendChild(document.createTextNode(name.value));
	li.appendChild(document.createTextNode(" " + description.value));

	const button = document.createElement("button");
	button.className = "btn btn-danger btn-sm float-right delete";
  button.appendChild(document.createTextNode('X'))
	li.appendChild(button);
  
	itemList.appendChild(li);
  name.value = '';
  description.value = ''
});


itemList.addEventListener("click",(e) => {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure ?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
})

filter.addEventListener("keyup",(e) => {
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    const itemDesp = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDesp.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
})