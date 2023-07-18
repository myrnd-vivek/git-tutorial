const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const value = document.getElementById("item").value;
	
  const li = document.createElement("li");
	li.className = "list-group-item";
	li.appendChild(document.createTextNode(value));

	const button = document.createElement("button");
	button.className = "btn btn-danger btn-sm float-right delete";
  button.appendChild(document.createTextNode('X'))
	li.appendChild(button);
  
	itemList.appendChild(li);
});


itemList.addEventListener("click",(e) => {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure ?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
})