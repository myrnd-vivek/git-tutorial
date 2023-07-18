function clickHandler(event) {
  event.preventDefault();
  const form = {};
  form.name = document.getElementById("name").value;
  form.email = document.getElementById("email").value;
  form.phone = document.getElementById("phone").value;
  form.date = document.getElementById("date").value;
  form.time = document.getElementById("time").value;
 
  localStorage.setItem(form.name,JSON.stringify(form));
}
