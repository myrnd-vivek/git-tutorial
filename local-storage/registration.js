function clickHandler(event) {
	event.preventDefault();
	const form = {};
	form.name = document.getElementById("name").value;
	form.email = document.getElementById("email").value;
	form.phone = document.getElementById("phone").value;
	form.date = document.getElementById("date").value;
	form.time = document.getElementById("time").value;

	addToLocalStorage(form);
	renderList();
}

function addToLocalStorage(form) {
	const data = JSON.parse(localStorage.getItem("users"));
	if (data) {
		data.push(form);
		localStorage.setItem("users", JSON.stringify(data));
	} else {
		localStorage.setItem("users", JSON.stringify([form]));
	}
}

function deleteUser(email) {
	const data = JSON.parse(localStorage.getItem("users"));
	const newData = data.filter((user) => {
		return user.email != email;
	});
	localStorage.setItem("users", JSON.stringify(newData));
	renderList();
}

function renderList() {
	const data = JSON.parse(localStorage.getItem("users"));
	if (data) {
		const ul = document.getElementById("output-items");
		ul.innerHTML = "";
		data.forEach((user) => {
			const li = document.createElement("li");
			li.style.display = "flex";
			li.style.padding = "2px";
			li.style.margin = "2px";
			li.innerHTML = `<span>Name: ${user.name}</span> <span>Email: ${user.email} </span> <span>Phone: ${user.phone}</span>
      <button onclick="deleteUser('${user.email}')">Delete</button>`;
			ul.appendChild(li);
		});
	}
}

renderList();
