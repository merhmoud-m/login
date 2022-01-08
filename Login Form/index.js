var uname = document.getElementById('email');
var pass = document.getElementById('password');
var btn = document.getElementById('button');

function handleClick() {
	if (uname.value == 'mahmud@gmail.com' && pass.value == 123456) {
		alert("welcome")
	}  else{
		alert("Please Key in a correct email or password")
	};
}

btn.addEventListener('click', handleClick);	