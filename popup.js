function validateForm() {
    var x = document.forms["login"]["uname"].value;
	var y = document.forms["login"]["psw"].value;
    if (x == "") && (y == "") {
        alert("Fields must be filled");
        return false;
    }
}