const myForm = document.forms['myForm'];
const usernameEl = myForm.username;
const passwordEl = myForm.password;

myForm.addEventListener("submit", validateForm);

function validateForm(e) {
	e.preventDefault(); // normal form behaivour will be prevented

	if(usernameEl.value === "" || passwordEl.value === "") {
		alert("Fields cannot be empty...");
		usernameEl.focus();
	} else if (usernameEl.value !== "bob" && passwordEl !== "password" ) {
		alert("Username or password does not match...")
	} else {
		alert(`Welcome ${usernameEl.value}`);
		usernameEl.value = "";
		passwordEl.value = "";
	}

}