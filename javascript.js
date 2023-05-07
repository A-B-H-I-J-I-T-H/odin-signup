let pass = document.getElementById("password");
let cpass = document.getElementById("cpassword");

cpass.addEventListener ("input", check);
pass.addEventListener ("input", check);

function check () {
	let pvalue = pass.value;
	let cvalue = cpass.value;
    
	if (pvalue == cvalue) {
		pass.className = "";
		cpass.className = "";
	}
	else {
		pass.className = "error";
		cpass.className = "error";
	}
}