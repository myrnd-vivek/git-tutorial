function clickHandler(event) {
	event.preventDefault();
	const form = {};
	form.name = document.getElementById("name").value;
	form.email = document.getElementById("email").value;
	form.phone = document.getElementById("phone").value;
	// form.date = document.getElementById("date").value;
	// form.time = document.getElementById("time").value;

	//addToLocalStorage(form);
	axios.post("https://crudcrud.com/api/90d906df5b1640e5bb6a61ae0a73c803/appointment",form)
		.then(res => {
			console.log(res)
			renderList();
			reset()
		})
		.catch(err => console.log(err));
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

function deleteUser(_id) {
	// const data = JSON.parse(localStorage.getItem("users"));
	// const newData = data.filter((user) => {
	// 	return user.email != email;
	// });
	// localStorage.setItem("users", JSON.stringify(newData));
	const val = confirm('Are you sure ?');
	if(val) {
		axios.delete(`https://crudcrud.com/api/90d906df5b1640e5bb6a61ae0a73c803/appointment/${_id}`)
			.then((res) => {
				console.log(res);
				renderList();
			})
			.catch((err) => console.log(err))
	}
}

function editUser(_id) {
	// const data = JSON.parse(localStorage.getItem("users"));
  // let user = {};
  // data.forEach((item) => {
  //   if(item.email == userEmail) {
  //     user = item;
  //   }
  // })
	// deleteUser(userEmail);

	axios.get(`https://crudcrud.com/api/90d906df5b1640e5bb6a61ae0a73c803/appointment/${_id}`)
		.then(res => {
			const user = res.data;
			const name = document.getElementById('name');
			const email = document.getElementById('email');
			const phone = document.getElementById('phone');
		
			name.value = user.name;
			email.value = user.email;
			phone.value = user.phone;

			axios.delete(`https://crudcrud.com/api/90d906df5b1640e5bb6a61ae0a73c803/appointment/${_id}`)
			.then((res) => {
				console.log(res);
				renderList();
			})
			.catch((err) => console.log(err))
		})
		
}

function renderList() {
	// const data = JSON.parse(localStorage.getItem("users"));
		axios.get("https://crudcrud.com/api/90d906df5b1640e5bb6a61ae0a73c803/appointment")
			.then((res) => {
				const data = res.data;
				console.log(data);
				if (data) {
					const tbody = document.getElementById("items");
					tbody.innerHTML = "";
					data.forEach((user,index) => {
						const tr = document.createElement("tr");
						tr.innerHTML = `
							<th scope="row">${index + 1}</th>
							<th scope="row">${user.name}</th>
							<td>${user.email}</td>
							<td>${user.phone}</td>
							<td> 
								<button onclick="editUser('${user._id}')"><i class="bi bi-pencil-square edit"></i></button>
								<button onclick="deleteUser('${user._id}')"><i class="bi bi-trash3 delete"></i></button>
							</td>
						`;
						tbody.appendChild(tr);
					});
				}
			})

}

function reset() {
	document.getElementById('name').value = '';
  document.getElementById('email').value = '';
	document.getElementById('phone').value = '';
}

renderList();
