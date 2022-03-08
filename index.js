const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const tel = document.getElementById('tel');
const gender =document.getElementById('gender');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateForm();
	 
});

function  validateForm() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();
	const telValue = tel.value.trim();
	const genderValue = gender.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if (!isUser(username)){
		setErrorFor(username, '');
	} 
	else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}  else if(!isPassword(passwordValue)) {
		setErrorFor(password, '');
	}
	else {
		setSuccessFor(password);
	}
	
	if(cpasswordValue === '') {
		setErrorFor(cpassword, 'Confirm Password cannot be blank');
	} else if(passwordValue !== cpasswordValue) {
		setErrorFor(cpassword, ' Confirm Passwords does not match');
	} else{
		setSuccessFor(cpassword);
	}
	if(telValue === '') {
		setErrorFor(tel, 'Number cannot be blank');
	}  else if(!istel(telValue)) {
		setErrorFor(tel, '');
	}
	else {
		setSuccessFor(tel);
	}
	if(genderValue === '') {
		setErrorFor(gender, 'Gender cannot be blank');
	} else {
		setSuccessFor(gender);
}
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password){
	return /^[a-zA-Z0-9!@#$&*]{15}$/.test(password);
}
function istel(tel){
	return /^[0-9]{10}$/.test(tel);
}
function isUser(username){
	return /^[A-Za-z0-9]$/.test(username)
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const span = formControl.querySelector('span');
	formControl.className = 'form-control error';
	span.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}