//reset the input fields 
function resetFunction() {
	document.getElementById('contactform').reset();
}

//listing the form after its filled
function formList() {
	document.getElementById('yourInput').innerHTML = "Your Input : ";
	document.getElementById('firstname').innerHTML = "First Name : " + document.getElementById('fname').value;
	document.getElementById('lastname').innerHTML = "Last Name : " + document.getElementById('lname').value;
	document.getElementById('sex').innerHTML = "Gender : " + document.getElementById('gender').value;
	document.getElementById('ages').innerHTML = "Age : " + document.getElementById('age').value;
	document.getElementById('emailAddress').innerHTML = "E-mail Address : " + document.getElementById('email').value;
	document.getElementById('webAddress').innerHTML = "Website : " + document.getElementById('website').value;
	document.getElementById('message').innerHTML = "Your Message : " + document.getElementById('comment').value;
}